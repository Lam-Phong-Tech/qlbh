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
        // Only show pending tasks for this user (Nguyễn Admin)
        const userTasks = mockData.tasks.filter(t => t.assignee === 'Nguyễn Admin' && t.status !== 'Hoàn thành');
        
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
    
    openCreateOrderModal: () => {
        const prodSelect = document.getElementById('m-new-order-service');
        if (prodSelect) {
            prodSelect.innerHTML = '<option value="">-- Chọn sản phẩm --</option>' + mockData.products.map(p => `<option value="${p.name}" data-price="${p.price}">${p.name}</option>`).join('');
            prodSelect.onchange = function() {
                const opt = this.options[this.selectedIndex];
                if(opt && opt.dataset.price) {
                    document.getElementById('m-new-order-value').value = opt.dataset.price;
                }
            };
        }
        
        document.getElementById('m-new-order-customer').value = '';
        document.getElementById('m-new-order-phone').value = '';
        document.getElementById('m-new-order-value').value = '';
        
        const modal = document.getElementById('m-modal-create-order');
        if(modal) modal.style.display = 'block';
    },
    
    closeModal: (id) => {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    },
    
    submitCreateOrder: () => {
        const cName = document.getElementById('m-new-order-customer').value;
        const cPhone = document.getElementById('m-new-order-phone').value;
        const service = document.getElementById('m-new-order-service').value;
        let val = document.getElementById('m-new-order-value').value;
        
        if(!cName || !service) {
            alert('Vui lòng điền đủ Tên khách hàng và Sản phẩm!');
            return;
        }
        
        val = parseInt(val) || 0;
        
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
        
        const newOrderId = generateId('DH');
        mockData.orders.push({
            id: newOrderId,
            customerId: custId,
            service: service,
            value: val,
            saler: 'Nguyễn Admin', // Giả lập user hiện tại
            paymentStatus: 'Chưa thanh toán',
            status: 'Chờ xác nhận',
            date: appState.today
        });
        
        saveData();
        mApp.renderOrders();
        mApp.renderReports(); // Update KPI
        mApp.closeModal('m-modal-create-order');
        alert('Tạo đơn hàng thành công!');
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
                html += `
                    <div class="m-card">
                        <div class="m-card-header">
                            <div class="m-card-title">${o.id}</div>
                            <span class="badge ${getBadgeClass(o.status)}">${o.status}</span>
                        </div>
                        <div class="m-card-subtitle">Khách hàng: ${getCustomerName(o.customerId)}</div>
                        <div class="m-card-subtitle">Ngày: ${formatDate(o.date)}</div>
                        <div style="font-weight:bold; font-size: 16px; margin-top:5px; color:var(--primary); text-align:right;">
                            ${formatMoney(o.value)}
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
