// Logic for Mobile App

const mApp = {
    init: () => {
        // Render initial data
        mApp.renderTasks();
        mApp.renderOrders();
        mApp.renderReports();
    },

    navigate: (viewId) => {
        // Update tabs
        document.querySelectorAll('.m-tab').forEach(tab => tab.classList.remove('active'));
        const activeTab = document.querySelector(`.m-tab[data-target="m-view-${viewId}"]`);
        if(activeTab) activeTab.classList.add('active');

        // Update views
        document.querySelectorAll('.m-view').forEach(view => view.classList.remove('active'));
        const activeView = document.getElementById(`m-view-${viewId}`);
        if(activeView) activeView.classList.add('active');
        
        // Render data when navigating to ensure it's fresh
        if(viewId === 'tasks') mApp.renderTasks();
        if(viewId === 'reports') mApp.renderReports();
        if(viewId === 'orders') mApp.renderOrders();
    },

    renderTasks: () => {
        const container = document.getElementById('m-tasks-list');
        if(!container) return;

        let html = '';
        // Only show tasks for this user (Nguyễn Admin), don't filter out completed tasks so the UI looks fuller
        const userTasks = mockData.tasks.filter(t => t.assignee === 'Nguyễn Admin');
        
        if (userTasks.length === 0) {
            html = '<div style="text-align:center; padding:20px; color:var(--text-sec);">Không có công việc nào</div>';
        } else {
            userTasks.sort((a,b) => new Date(a.deadline) - new Date(b.deadline)).forEach(t => {
                const overdue = isOverdue(t.deadline, t.status);
                const displayStatus = overdue ? 'Quá hạn' : t.status;
                
                html += `
                    <div class="m-card">
                        <div class="m-card-header">
                            <div class="m-card-title">${t.title}</div>
                            <span class="badge ${getBadgeClass(displayStatus)}">${displayStatus}</span>
                        </div>
                        <div class="m-card-subtitle"><i class="fa-regular fa-clock"></i> Hạn chót: <span class="${overdue ? 'text-danger font-bold' : ''}">${formatDate(t.deadline)}</span></div>
                        ${t.orderId ? `<div class="m-card-subtitle"><i class="fa-solid fa-file-invoice"></i> Liên kết: ${t.orderId}</div>` : ''}
                        <div class="m-btn-group">
                            <button class="m-btn m-btn-primary" onclick="mApp.updateTaskStatus('${t.id}', 'Đang thực hiện')">Bắt đầu</button>
                            <button class="m-btn m-btn-success" onclick="mApp.updateTaskStatus('${t.id}', 'Hoàn thành')">Hoàn thành</button>
                        </div>
                    </div>
                `;
            });
        }
        container.innerHTML = html;
    },

    updateTaskStatus: (taskId, newStatus) => {
        const task = mockData.tasks.find(t => t.id === taskId);
        if(task) {
            task.status = newStatus;
            saveData(); // Lệnh từ app.js
            mApp.renderTasks();
            alert('Đã cập nhật trạng thái: ' + newStatus);
        }
    },

    renderReports: () => {
        const user = 'Nguyễn Admin'; // Current simulated user
        const now = new Date(appState.today);
        
        // Calculate Revenue for Current Month
        let revenue = 0;
        let ordersCount = 0;
        mockData.orders.filter(o => o.saler === user).forEach(o => {
            const d = new Date(o.date);
            if(d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()) {
                revenue += o.value;
                ordersCount++;
            }
        });
        
        // Calculate Task Completion Rate
        const userTasks = mockData.tasks.filter(t => t.assignee === user);
        let taskCompleted = userTasks.filter(t => t.status === 'Hoàn thành').length;
        let taskRate = userTasks.length ? Math.round((taskCompleted / userTasks.length) * 100) : 0;
        
        const revEl = document.getElementById('m-kpi-revenue');
        if(revEl) {
            revEl.textContent = formatMoney(revenue);
            document.getElementById('m-kpi-orders').textContent = ordersCount;
            document.getElementById('m-kpi-tasks').textContent = taskRate + '%';
            
            // Add Recent Activities
            let recentHtml = `
            <div style="text-align: left; margin-top: 25px;">
                <h3 style="font-size: 16px; margin-bottom: 12px; color: var(--text-main); font-weight: 600;">Hoạt động gần đây</h3>
                <div class="m-card" style="padding: 0; overflow: hidden; margin-bottom: 50px;">
                    <div style="padding: 15px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">Đơn hàng DH012</div>
                            <div style="font-size: 12px; color: var(--text-sec); margin-top: 3px;">Đã thanh toán</div>
                        </div>
                        <div style="color: var(--primary); font-weight: 600; font-size: 14px;">+4.500.000 đ</div>
                    </div>
                    <div style="padding: 15px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">Đơn hàng DH011</div>
                            <div style="font-size: 12px; color: var(--text-sec); margin-top: 3px;">Đã thanh toán</div>
                        </div>
                        <div style="color: var(--primary); font-weight: 600; font-size: 14px;">+2.900.000 đ</div>
                    </div>
                    <div style="padding: 15px; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">Check-in chấm công</div>
                            <div style="font-size: 12px; color: var(--text-sec); margin-top: 3px;">08:30 Sáng nay</div>
                        </div>
                        <div style="color: #16a34a; font-weight: 600; font-size: 14px;"><i class="fa-solid fa-check"></i></div>
                    </div>
                </div>
            </div>`;
            
            let reportView = document.getElementById('m-view-reports');
            let recentContainer = document.getElementById('m-recent-activities');
            if(!recentContainer) {
                let div = document.createElement('div');
                div.id = 'm-recent-activities';
                div.innerHTML = recentHtml;
                reportView.appendChild(div);
            }
        }
    },
    
    checkIn: () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'});
        alert(`Đã Check-in thành công tại vị trí hiện tại lúc ${timeString}!`);
        
        const btn = document.getElementById('btn-checkin');
        if (btn) {
            btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>Đã Check-in (${timeString})</span>`;
            btn.style.background = '#defbe6';
            btn.style.color = '#198038';
        }
    },
    
    openCreateOrderModal: (orderId = null) => {
        document.getElementById('m-order-items-container').innerHTML = '';
        const modalTitle = document.getElementById('m-modal-create-order-title');
        const editIdInput = document.getElementById('m-edit-order-id');
        editIdInput.value = '';
        
        let initialItems = [];
        
        if (orderId) {
            const order = mockData.orders.find(o => o.id === orderId);
            if (order) {
                modalTitle.textContent = 'Cập nhật Đơn Hàng';
                editIdInput.value = orderId;
                
                const c = mockData.customers.find(c => c.id === order.customerId);
                if (c) {
                    document.getElementById('m-new-order-customer').value = c.name;
                    document.getElementById('m-new-order-phone').value = c.phone;
                }
                
                // Parse "2x Loa ABC, 1x Loa XYZ"
                const parts = order.service.split(', ');
                parts.forEach(part => {
                    let qty = 1;
                    let name = part;
                    const match = part.match(/^(\d+)x\s+(.*)$/);
                    if (match) {
                        qty = parseInt(match[1]);
                        name = match[2];
                    } else if (!part.includes('x ')) { // Maybe it's just the old format without "x "
                        name = part;
                    }
                    initialItems.push({name, qty});
                });
            }
        } else {
            modalTitle.textContent = 'Tạo Đơn Hàng';
            document.getElementById('m-new-order-customer').value = '';
            document.getElementById('m-new-order-phone').value = '';
        }
        
        if (initialItems.length === 0) {
            initialItems.push({name: '', qty: 1});
        }
        
        initialItems.forEach(item => mApp.addOrderItemRow(item.name, item.qty));
        mApp.calculateOrderTotal();
        
        const modal = document.getElementById('m-modal-create-order');
        if(modal) modal.style.display = 'block';
    },

    addOrderItemRow: (selectedName = '', qty = 1) => {
        const container = document.getElementById('m-order-items-container');
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; gap: 10px; margin-bottom: 12px; align-items: flex-start;';
        
        let selectHtml = `<select class="m-item-select" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px;" onchange="mApp.calculateOrderTotal()">`;
        selectHtml += '<option value="">-- Chọn sản phẩm --</option>';
        mockData.products.forEach(p => {
            selectHtml += `<option value="${p.name}" data-price="${p.price}" ${p.name === selectedName ? 'selected' : ''}>${p.name}</option>`;
        });
        selectHtml += `</select>`;
        
        row.innerHTML = `
            <div style="flex: 1;">
                ${selectHtml}
                <div class="m-item-price-display" style="font-size: 13px; color: var(--text-sec); margin-top: 6px; padding-left: 5px;"></div>
            </div>
            <input type="number" class="m-item-qty" value="${qty}" min="1" style="width: 60px; padding: 12px; border: 1px solid var(--border); border-radius: 8px; text-align: center;" onchange="mApp.calculateOrderTotal()">
            <div style="color: var(--text-sec); font-size: 22px; cursor: pointer; padding: 4px 5px 0 0; line-height: 34px;" onclick="this.parentElement.remove(); mApp.calculateOrderTotal();">&times;</div>
        `;
        container.appendChild(row);
    },
    
    calculateOrderTotal: () => {
        const container = document.getElementById('m-order-items-container');
        let total = 0;
        const rows = container.children;
        
        for (let i = 0; i < rows.length; i++) {
            const select = rows[i].querySelector('.m-item-select');
            const qtyInput = rows[i].querySelector('.m-item-qty');
            const priceDisplay = rows[i].querySelector('.m-item-price-display');
            
            const opt = select.options[select.selectedIndex];
            let rowPrice = 0;
            if (opt && opt.dataset.price) {
                rowPrice = parseInt(opt.dataset.price) * (parseInt(qtyInput.value) || 1);
                total += rowPrice;
            }
            if(priceDisplay) {
                priceDisplay.textContent = rowPrice > 0 ? new Intl.NumberFormat('vi-VN').format(rowPrice) + ' đ' : '';
            }
        }
        
        document.getElementById('m-new-order-value').value = new Intl.NumberFormat('vi-VN').format(total) + ' đ';
        document.getElementById('m-new-order-value').dataset.rawValue = total;
    },
    
    closeModal: (id) => {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    },
    
    submitCreateOrder: () => {
        const cName = document.getElementById('m-new-order-customer').value;
        const cPhone = document.getElementById('m-new-order-phone').value;
        
        const container = document.getElementById('m-order-items-container');
        const selects = container.querySelectorAll('.m-item-select');
        const qtys = container.querySelectorAll('.m-item-qty');
        let itemsArr = [];
        
        for (let i = 0; i < selects.length; i++) {
            if (selects[i].value) {
                itemsArr.push(`${parseInt(qtys[i].value) || 1}x ${selects[i].value}`);
            }
        }
        
        const service = itemsArr.join(', ');
        const val = parseInt(document.getElementById('m-new-order-value').dataset.rawValue) || 0;
        
        if(!cName || itemsArr.length === 0) {
            alert('Vui lòng điền đủ Tên khách hàng và chọn ít nhất 1 Sản phẩm!');
            return;
        }
        
        // Find or create customer
        let cust = mockData.customers.find(c => c.name.toLowerCase() === cName.toLowerCase());
        let custId = cust ? cust.id : '';
        if(!cust) {
            custId = generateId('KH');
            mockData.customers.push({
                id: custId,
                name: cName,
                phone: cPhone,
                email: '',
                source: 'Thị trường (Mobile)',
                date: appState.today,
                note: ''
            });
        }
        
        const editId = document.getElementById('m-edit-order-id').value;
        if (editId) {
            const existingOrder = mockData.orders.find(o => o.id === editId);
            if (existingOrder) {
                existingOrder.customerId = custId;
                existingOrder.service = service;
                existingOrder.value = val;
            }
        } else {
            const newOrderId = generateId('DH');
            mockData.orders.push({
                id: newOrderId,
                customerId: custId,
                service: service,
                value: val,
                saler: 'Nguyễn Admin',
                paymentStatus: 'Chưa thanh toán',
                status: 'Chờ xác nhận',
                date: appState.today
            });
        }
        
        saveData();
        mApp.renderOrders();
        mApp.renderReports(); // Update KPI
        mApp.closeModal('m-modal-create-order');
        alert(editId ? 'Cập nhật đơn hàng thành công!' : 'Tạo đơn hàng thành công!');
    },

    renderOrders: () => {
        const container = document.getElementById('m-orders-list');
        if(!container) return;

        let html = '';
        // Lấy đơn hàng của cá nhân
        const recentOrders = [...mockData.orders].filter(o => o.saler === 'Nguyễn Admin').reverse().slice(0, 10);
        
        if(recentOrders.length === 0) {
            html = '<div style="text-align:center; padding:20px; color:var(--text-sec);">Chưa có đơn hàng nào</div>';
        } else {
            recentOrders.forEach(o => {
                const editBtn = o.status === 'Chờ xác nhận' ? `<button style="background:none; border:none; color:var(--primary); font-size:13px; font-weight:600; cursor:pointer;" onclick="mApp.openCreateOrderModal('${o.id}')"><i class="fa-solid fa-pen-to-square"></i> Sửa</button>` : '';
                html += `
                    <div class="m-card">
                        <div class="m-card-header">
                            <div class="m-card-title">${o.id}</div>
                            <span class="badge ${getBadgeClass(o.status)}">${o.status}</span>
                        </div>
                        <div class="m-card-subtitle" style="color:var(--text-main); font-weight: 500;">Khách hàng: ${getCustomerName(o.customerId)}</div>
                        <div class="m-card-subtitle" style="line-height: 1.4;">${o.service}</div>
                        <div class="m-card-subtitle">Ngày: ${formatDate(o.date)}</div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top:10px;">
                            ${editBtn}
                            <div style="font-weight:bold; font-size: 16px; color:var(--primary); text-align:right; flex:1;">
                                ${formatMoney(o.value)}
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        container.innerHTML = html;
    }
};

// Initialize mobile app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Only run if we are in the mobile app layout
    if(document.getElementById('m-tasks-list')) {
        mApp.init();
    }
});
