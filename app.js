// --- MOCK DATA ---
const defaultMockData = {
    users: [
        { id: 1, name: 'Nguyễn Admin', role: 'Admin', phone: '0988111222', email: 'admin@audiocrm.vn', password: 'password123', cccd: 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc', status: 'Hoạt động' },
        { id: 2, name: 'Lê Quản Lý', role: 'Quản lý', phone: '0977222333', email: 'manager@audiocrm.vn', password: 'password123', cccd: 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc', status: 'Hoạt động' },
        { id: 3, name: 'Trần Sale 1', role: 'Bán hàng', phone: '0901333444', email: 'sale1@audiocrm.vn', password: 'password123', cccd: 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc', status: 'Hoạt động' },
        { id: 4, name: 'Phạm Kỹ Thuật 1', role: 'Xử lý', phone: '0912444555', email: 'tech1@audiocrm.vn', password: 'password123', cccd: 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc', status: 'Hoạt động' },
        { id: 5, name: 'Hoàng Kỹ Thuật 2', role: 'Xử lý', phone: '0944555666', email: 'tech2@audiocrm.vn', password: 'password123', cccd: 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc', status: 'Hoạt động' }
    ],
    customers: [
        { id: 'KH001', name: 'Công ty Minh An', phone: '0901234567', email: 'contact@minhan.vn', source: 'Website', date: '2026-07-01', note: 'Khách hàng VIP' },
        { id: 'KH002', name: 'Shop Nội Thất Việt', phone: '0987654321', email: 'noithatviet@gmail.com', source: 'Facebook', date: '2026-07-02', note: '' },
        { id: 'KH003', name: 'Anh Hoàng', phone: '0911222333', email: 'hoang@gmail.com', source: 'Giới thiệu', date: '2026-07-02', note: 'Cần tư vấn gấp' },
        { id: 'KH004', name: 'Chị Lan', phone: '0933444555', email: 'lan.nguyen@yahoo.com', source: 'Khác', date: '2026-07-03', note: '' },
        { id: 'KH005', name: 'Công ty ABC', phone: '0909888777', email: 'info@abc.com', source: 'Website', date: '2026-07-03', note: '' },
        { id: 'KH006', name: 'Cửa hàng Tiện Lợi X', phone: '0977666555', email: 'x.store@gmail.com', source: 'Facebook', date: '2026-07-04', note: '' },
        { id: 'KH007', name: 'Anh Vũ (KTS)', phone: '0944333222', email: 'vukts@gmail.com', source: 'Giới thiệu', date: '2026-07-04', note: '' },
        { id: 'KH008', name: 'Chị Mai (Mỹ Phẩm)', phone: '0922111000', email: 'maicosmetic@gmail.com', source: 'Facebook', date: '2026-07-05', note: '' }
    ],
    products: [
        { id: 'SP001', name: 'Loa Bluetooth Marshall Stanmore III', brand: 'Marshall', category: 'Loa Bluetooth', warranty: 12, price: 9500000, stock: 12, image: './assets/images/SP001.jpg' },
        { id: 'SP002', name: 'Loa Karaoke JBL PartyBox 310', brand: 'JBL', category: 'Loa Karaoke/Kéo', warranty: 12, price: 14900000, stock: 4, image: './assets/images/SP002.jpg' },
        { id: 'SP003', name: 'Loa Soundbar Sony HT-S400', brand: 'Sony', category: 'Soundbar', warranty: 12, price: 4500000, stock: 20, image: './assets/images/SP003.jpg' },
        { id: 'SP004', name: 'Loa Bluetooth Harman Kardon Aura Studio 4', brand: 'Harman Kardon', category: 'Loa Bluetooth', warranty: 12, price: 6900000, stock: 2, image: './assets/images/SP004.jpg' },
        { id: 'SP005', name: 'Dàn âm thanh Sony MHC-V43D', brand: 'Sony', category: 'Loa Karaoke/Kéo', warranty: 12, price: 7500000, stock: 15, image: './assets/images/SP005.jpg' },
        { id: 'SP006', name: 'Loa Kéo Nanomax S-1000', brand: 'Khác', category: 'Loa Karaoke/Kéo', warranty: 6, price: 3200000, stock: 8, image: './assets/images/SP006.jpg' },
        { id: 'SP007', name: 'Loa Bluetooth JBL Flip 6', brand: 'JBL', category: 'Loa Bluetooth', warranty: 12, price: 2900000, stock: 35, image: './assets/images/SP007.jpg' },
        { id: 'SP008', name: 'Loa Vi Tính Logitech Z906', brand: 'Khác', category: 'Loa Vi Tính', warranty: 24, price: 6500000, stock: 0, image: './assets/images/SP008.jpg' },
        { id: 'SP009', name: 'Cặp Loa Bookshelf Edifier R1700BT', brand: 'Khác', category: 'Loa Vi Tính', warranty: 12, price: 2500000, stock: 10, image: './assets/images/SP009.jpg' },
        { id: 'SP010', name: 'Micro Không Dây JBL VM300', brand: 'JBL', category: 'Khác', warranty: 12, price: 7900000, stock: 3, image: './assets/images/SP010.jpg' }
    ],
    orders: [
        { id: 'DH001', customerId: 'KH001', service: 'Loa Bluetooth Marshall Stanmore III', value: 9500000, saler: 'Trần Sale 1', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-07-01' },
        { id: 'DH002', customerId: 'KH002', service: 'Loa Karaoke JBL PartyBox 310', value: 14900000, saler: 'Trần Sale 1', status: 'Chờ giao hàng', paymentStatus: 'Chưa thanh toán', date: '2026-07-02' },
        { id: 'DH003', customerId: 'KH003', service: 'Loa Soundbar Sony HT-S400', value: 4500000, saler: 'Lê Quản Lý', status: 'Chờ xác nhận', paymentStatus: 'Thanh toán một phần', date: '2026-07-02' },
        { id: 'DH004', customerId: 'KH004', service: 'Loa Bluetooth Harman Kardon Aura Studio 4', value: 6900000, saler: 'Trần Sale 1', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-07-03' },
        { id: 'DH005', customerId: 'KH005', service: 'Loa Bluetooth JBL Flip 6', value: 2900000, saler: 'Trần Sale 1', status: 'Chờ lấy hàng', paymentStatus: 'Chưa thanh toán', date: '2026-07-03' },
        { id: 'DH006', customerId: 'KH006', service: 'Loa Kéo Nanomax S-1000', value: 3200000, saler: 'Trần Sale 1', status: 'Đã hủy', paymentStatus: 'Chưa thanh toán', date: '2026-07-04' },
        { id: 'DH007', customerId: 'KH007', service: 'Cặp Loa Bookshelf Edifier R1700BT', value: 2500000, saler: 'Trần Sale 1', status: 'Chờ xác nhận', paymentStatus: 'Chưa thanh toán', date: '2026-07-04' },
        { id: 'DH008', customerId: 'KH008', service: 'Dàn âm thanh Sony MHC-V43D', value: 7500000, saler: 'Lê Quản Lý', status: 'Trả hàng', paymentStatus: 'Đã thanh toán', date: '2026-07-05' },
        { id: 'DH009', customerId: 'KH001', service: 'Micro Không Dây JBL VM300', value: 7900000, saler: 'Trần Sale 1', status: 'Chờ xác nhận', paymentStatus: 'Chưa thanh toán', date: '2026-07-05' },
        { id: 'DH010', customerId: 'KH003', service: 'Loa Vi Tính Logitech Z906', value: 6500000, saler: 'Lê Quản Lý', status: 'Chờ giao hàng', paymentStatus: 'Chưa thanh toán', date: '2026-07-05' },
        { id: 'DH011', customerId: 'KH002', service: 'Loa Bluetooth JBL Flip 6', value: 2900000, saler: 'Nguyễn Admin', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-07-01' },
        { id: 'DH012', customerId: 'KH004', service: 'Loa Soundbar Sony HT-S400', value: 4500000, saler: 'Nguyễn Admin', status: 'Chờ giao hàng', paymentStatus: 'Chưa thanh toán', date: '2026-07-03' },
        { id: 'DH013', customerId: 'KH005', service: 'Loa Karaoke JBL PartyBox 310', value: 14900000, saler: 'Nguyễn Admin', status: 'Chờ lấy hàng', paymentStatus: 'Đã thanh toán', date: '2026-07-04' },
        { id: 'DH014', customerId: 'KH007', service: 'Dàn Âm thanh Sony MHC-V43D', value: 7500000, saler: 'Nguyễn Admin', status: 'Chờ xác nhận', paymentStatus: 'Chưa thanh toán', date: '2026-07-05' },
        { id: 'DH015', customerId: 'KH001', service: 'Loa Bluetooth Marshall Stanmore III', value: 9500000, saler: 'Trần Sale 1', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-01-15' },
        { id: 'DH016', customerId: 'KH002', service: 'Loa Karaoke JBL PartyBox 310', value: 14900000, saler: 'Lê Quản Lý', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-02-10' },
        { id: 'DH017', customerId: 'KH003', service: 'Loa Soundbar Sony HT-S400', value: 4500000, saler: 'Nguyễn Admin', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-03-20' },
        { id: 'DH018', customerId: 'KH004', service: 'Loa Bluetooth Harman Kardon Aura Studio 4', value: 6900000, saler: 'Trần Sale 1', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-04-05' },
        { id: 'DH019', customerId: 'KH005', service: 'Loa Bluetooth JBL Flip 6', value: 2900000, saler: 'Lê Quản Lý', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-05-12' },
        { id: 'DH020', customerId: 'KH006', service: 'Dàn âm thanh Sony MHC-V43D', value: 7500000, saler: 'Nguyễn Admin', status: 'Đã giao', paymentStatus: 'Đã thanh toán', date: '2026-06-25' }
    ],
    tasks: [
        { id: 'CV001', title: 'Test âm thanh trước khi giao', orderId: 'DH001', assignee: 'Phạm Kỹ Thuật 1', priority: 'Cao', status: 'Hoàn thành', deadline: '2026-07-10', notes: 'Đã kiểm tra kỹ' },
        { id: 'CV002', title: 'Giao hàng và lắp đặt tại nhà', orderId: 'DH002', assignee: 'Phạm Kỹ Thuật 1', priority: 'Trung', status: 'Chưa làm', deadline: '2026-07-12', notes: 'Gọi khách trước khi đến' },
        { id: 'CV003', title: 'Tư vấn setup dàn karaoke', orderId: 'DH003', assignee: 'Lê Quản Lý', priority: 'Khẩn', status: 'Đang làm', deadline: '2026-07-06', notes: '' },
        { id: 'CV004', title: 'Xuất hóa đơn VAT', orderId: 'DH004', assignee: 'Nguyễn Kế Toán', priority: 'Thấp', status: 'Chờ duyệt', deadline: '2026-07-15', notes: '' },
        { id: 'CV005', title: 'Kiểm tra bảo hành', orderId: 'DH005', assignee: 'Phạm Kỹ Thuật 1', priority: 'Cao', status: 'Quá hạn', deadline: '2026-07-04', notes: 'Khách đang giục' },
        { id: 'CV006', title: 'Lấy hàng từ kho tổng', orderId: 'DH006', assignee: 'Lê Quản Lý', priority: 'Trung', status: 'Hoàn thành', deadline: '2026-07-08', notes: '' },
        { id: 'CV007', title: 'Hướng dẫn sử dụng cho khách', orderId: 'DH007', assignee: 'Trần Kỹ Thuật 2', priority: 'Cao', status: 'Chưa làm', deadline: '2026-07-09', notes: '' },
        { id: 'CV008', title: 'Nhập lại kho hàng trả', orderId: 'DH008', assignee: 'Trần Kỹ Thuật 2', priority: 'Khẩn', status: 'Đang làm', deadline: '2026-07-05', notes: 'Kiểm tra tình trạng máy' },
        { id: 'CV009', title: 'Nghiên cứu API thanh toán', orderId: 'DH009', assignee: 'Phạm Kỹ Thuật 1', priority: 'Trung bình', status: 'Chưa làm', deadline: '2026-07-10', notes: '' },
        { id: 'CV010', title: 'Viết 15 bài content', orderId: 'DH010', assignee: 'Hoàng Kỹ Thuật 2', priority: 'Trung bình', status: 'Đang làm', deadline: '2026-07-12', notes: 'Đã xong 5 bài' },
        { id: 'CV011', title: 'Review tiến độ', orderId: 'DH002', assignee: 'Nguyễn Admin', priority: 'Thấp', status: 'Chưa làm', deadline: '2026-07-09', notes: '' },
        { id: 'CV012', title: 'Gọi xác nhận yêu cầu', orderId: 'DH007', assignee: 'Trần Sale 1', priority: 'Khẩn cấp', status: 'Hoàn thành', deadline: '2026-07-04', notes: 'Khách muốn màu xanh' },
        { id: 'CV013', title: 'Bàn giao tài khoản', orderId: 'DH001', assignee: 'Trần Sale 1', status: 'Hoàn thành', deadline: '2026-07-02', notes: '' },
        { id: 'CV014', title: 'Kiểm tra lỗi hiển thị', orderId: 'DH004', assignee: 'Phạm Kỹ Thuật 1', priority: 'Cao', status: 'Quá hạn', deadline: '2026-07-01', notes: 'Lỗi CSS trên safari' },
        { id: 'CV015', title: 'Báo cáo tháng', orderId: '', assignee: 'Lê Quản Lý', priority: 'Trung bình', status: 'Đang làm', deadline: '2026-07-05', notes: '' }
    ]
};

// Force reload mock data to apply fixes
localStorage.setItem('qlbh_data', JSON.stringify(defaultMockData));
let mockData = JSON.parse(localStorage.getItem('qlbh_data'));

// Helper to save data to localStorage
const saveData = () => {
    localStorage.setItem('qlbh_data', JSON.stringify(mockData));
};

// --- APP STATE ---
const appState = {
    currentView: 'dashboard',
    currentCustomerId: null,
    currentOrderId: null,
    currentTaskId: null,
    today: new Date().toISOString().split('T')[0], // Giả lập hôm nay
    taskViewMode: 'kanban',
    posCarts: [[]],
    activePosCartIndex: 0
};

let revenueChartInstance = null;
let taskChartInstance = null;

// --- HELPERS ---
const formatMoney = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const formatDate = (dateString) => {
    const parts = dateString.split('-');
    if(parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateString;
};

const generateId = (prefix) => {
    return prefix + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
};

const getCustomerName = (id) => {
    const c = mockData.customers.find(c => c.id === id);
    return c ? c.name : 'Unknown';
};

const getOrderService = (id) => {
    const o = mockData.orders.find(o => o.id === id);
    return o ? o.service : 'Unknown';
};

const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

const getBadgeClass = (status) => {
    switch(status) {
        case 'Chờ xác nhận': return 'badge-new';
        case 'Chờ lấy hàng': return 'badge-processing';
        case 'Chờ giao hàng': return 'badge-processing';
        case 'Đã giao': return 'badge-completed';
        case 'Chờ duyệt trả hàng': return 'badge-processing';
        case 'Trả hàng': return 'badge-cancel';
        case 'Đã hủy': return 'badge-danger';
        
        case 'Mới tạo': return 'badge-new';
        case 'Đang xử lý': return 'badge-processing';
        case 'Hoàn thành': return 'badge-completed';
        case 'Hủy': return 'badge-cancel';
        
        case 'Đang làm': return 'badge-doing';
        case 'Chưa làm': return 'badge-pending';
        case 'Chờ duyệt': return 'badge-processing';
        case 'Quá hạn': return 'badge-overdue';
        default: return 'badge-pending';
    }
};

const isOverdue = (deadline, status) => {
    if(status === 'Hoàn thành' || status === 'Hủy' || status === 'Đã giao' || status === 'Đã hủy' || status === 'Trả hàng') return false;
    return deadline < appState.today;
};

// Update task status automatically if overdue
mockData.tasks.forEach(t => {
    if(isOverdue(t.deadline, t.status)) t.status = 'Quá hạn';
});

// --- RENDERERS ---

const renderDashboard = () => {
    // Stats
    const revenue = mockData.orders.filter(o => o.status === 'Đã giao').reduce((sum, o) => sum + o.value, 0);
    document.getElementById('dash-revenue').textContent = formatMoney(revenue);
    document.getElementById('dash-customers').textContent = mockData.customers.length;
    document.getElementById('dash-orders').textContent = mockData.orders.length;
    document.getElementById('dash-orders-processing').textContent = mockData.orders.filter(o => ['Chờ xác nhận', 'Chờ lấy hàng', 'Chờ giao hàng'].includes(o.status)).length;
    document.getElementById('dash-tasks-doing').textContent = mockData.tasks.filter(t => t.status === 'Đang làm').length;
    document.getElementById('dash-tasks-overdue').textContent = mockData.tasks.filter(t => t.status === 'Quá hạn').length;
    
    const dashCanceled = document.getElementById('dash-orders-canceled');
    if(dashCanceled) {
        dashCanceled.textContent = mockData.orders.filter(o => ['Trả hàng', 'Đã hủy'].includes(o.status)).length;
    }

    // Upcoming tasks
    const upcomingTasks = [...mockData.tasks]
        .filter(t => t.status !== 'Hoàn thành')
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 5);
    
    let tasksHtml = '';
    upcomingTasks.forEach(t => {
        tasksHtml += `
            <tr style="cursor:pointer" onclick="app.viewTaskDetail('${t.id}')">
                <td>${t.title}</td>
                <td>${t.assignee}</td>
                <td class="${isOverdue(t.deadline, t.status) ? 'text-danger font-bold' : ''}">${formatDate(t.deadline)}</td>
                <td><span class="badge ${getBadgeClass(t.status)}">${t.status}</span></td>
            </tr>
        `;
    });
    document.getElementById('dash-tasks-table').innerHTML = tasksHtml;

    // New orders
    const newOrders = [...mockData.orders].reverse().slice(0, 5);
    let ordersHtml = '';
    newOrders.forEach(o => {
        ordersHtml += `
            <tr style="cursor:pointer;" class="hover-row" onclick="app.viewOrderDetail('${o.id}')">
                <td>${o.id}</td>
                <td>${getCustomerName(o.customerId)}</td>
                <td>${formatMoney(o.value)}</td>
                <td><span class="badge ${getBadgeClass(o.status)}">${o.status}</span></td>
            </tr>
        `;
    });
    document.getElementById('dash-orders-table').innerHTML = ordersHtml;
};

const renderCustomers = () => {
    const searchTerm = document.getElementById('search-customer').value.toLowerCase();
    const sourceFilter = document.getElementById('filter-customer-source').value;

    let filtered = mockData.customers.filter(c => {
        const matchSearch = c.name.toLowerCase().includes(searchTerm) || c.phone.includes(searchTerm);
        const matchSource = sourceFilter === 'all' || c.source === sourceFilter;
        return !c.isDeleted && matchSearch && matchSource;
    });

    let html = '';
    if (filtered.length === 0) {
        html = `<tr><td colspan="7" style="text-align:center; padding: 30px;">Không tìm thấy dữ liệu.</td></tr>`;
    } else {
        filtered.forEach(c => {
            html += `
                <tr style="cursor: pointer;" class="hover-row" onclick="app.viewCustomerDetail('${c.id}')">
                    <td>${c.id}</td>
                    <td style="font-weight:600; color:var(--primary)">${c.name}</td>
                    <td>${c.phone}</td>
                    <td>${c.email}</td>
                    <td>${c.source}</td>
                    <td>${formatDate(c.date)}</td>
                    <td>
                        <div style="display:flex; gap:5px; align-items:center;">
                            <button class="btn btn-sm" onclick="event.stopPropagation(); app.openEditCustomerModal('${c.id}')" title="Sửa" style="background:var(--info); color:white;">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="event.stopPropagation(); app.softDeleteCustomer('${c.id}')" title="Xóa">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });
    }
    document.getElementById('customers-table').innerHTML = html;
};

const renderProducts = () => {
    const searchTerm = document.getElementById('search-product') ? document.getElementById('search-product').value.toLowerCase() : '';
    let filtered = mockData.products.filter(p => !p.isDeleted && (p.name.toLowerCase().includes(searchTerm) || p.id.toLowerCase().includes(searchTerm)));
    
    let html = '';
    if (filtered.length === 0) {
        html = `<tr><td colspan="8" style="text-align:center; padding: 30px;">Không tìm thấy dữ liệu.</td></tr>`;
    } else {
        filtered.forEach(p => {
            html += `
                <tr>
                    <td>${p.id}</td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <img src="${p.image || 'https://placehold.co/60x60/f4f4f4/888?text=Loa'}" onerror="this.onerror=null; this.src='https://placehold.co/60x60/f4f4f4/888?text=Loa';" alt="${p.name}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 4px; border: 1px solid #eee;">
                            <div>
                                <div style="font-weight:600; color:var(--primary)">${p.name}</div>
                                <div style="font-size:12px; margin-top:4px;">
                                    <span class="badge" style="background:#eee; color:#555; font-weight:600;"><i class="fa-solid fa-tag"></i> ${p.brand || 'Khác'}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>${p.category || 'Khác'}</td>
                    <td>${p.warranty || 12} tháng</td>
                    <td style="font-weight:500">${formatMoney(p.price)}</td>
                    <td class="${p.stock <= 5 ? (p.stock <= 0 ? 'text-danger font-bold' : 'text-warning font-bold') : ''}">${p.stock}</td>
                    <td><span class="badge ${p.stock > 5 ? 'badge-completed' : (p.stock > 0 ? 'badge-processing' : 'badge-danger')}">${p.stock > 5 ? 'Còn hàng' : (p.stock > 0 ? 'Sắp hết' : 'Hết hàng')}</span></td>
                    <td>
                        <div style="display:flex; gap:5px; align-items:center;">
                            <button class="btn btn-sm btn-secondary" onclick="app.openImportStockModal('${p.id}')" title="Nhập kho">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            <button class="btn btn-sm" onclick="app.openEditProductModal('${p.id}')" title="Sửa" style="background:var(--info); color:white;">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="app.softDeleteProduct('${p.id}')" title="Xóa">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });
    }
    const table = document.getElementById('products-table');
    if (table) table.innerHTML = html;
};

const renderPOSProducts = () => {
    const searchTerm = document.getElementById('search-pos') ? document.getElementById('search-pos').value.toLowerCase() : '';
    let filtered = mockData.products.filter(p => !p.isDeleted && (p.name.toLowerCase().includes(searchTerm) || p.id.toLowerCase().includes(searchTerm)));
    
    let html = '';
    if (filtered.length === 0) {
        html = `<div style="padding: 20px; text-align: center; width: 100%;">Không tìm thấy sản phẩm.</div>`;
    } else {
        filtered.forEach(p => {
            const outOfStock = p.stock <= 0;
            html += `
                <div class="pos-card" onclick="${outOfStock ? '' : `app.addToPOSCart('${p.id}')`}" style="${outOfStock ? 'opacity: 0.6; cursor: not-allowed;' : ''}">
                    <img src="${p.image || 'https://placehold.co/150x150/f4f4f4/888?text=Loa'}" onerror="this.onerror=null; this.src='https://placehold.co/150x150/f4f4f4/888?text=Loa';" alt="${p.name}">
                    <div class="pos-card-title">${p.name}</div>
                    <div class="pos-card-price">${formatMoney(p.price)}</div>
                    <div class="pos-card-stock ${outOfStock ? 'text-danger font-bold' : ''}">Tồn kho: ${p.stock}</div>
                </div>
            `;
        });
    }
    const grid = document.getElementById('pos-products-grid');
    if (grid) grid.innerHTML = html;
};

const renderPOSCart = () => {
    let html = '';
    let total = 0;

    if (appState.posCart.length === 0) {
        html = `<div style="padding: 20px; text-align: center; color: var(--text-secondary);">Giỏ hàng đang trống</div>`;
    } else {
        appState.posCart.forEach(item => {
            const sub = item.price * item.qty;
            total += sub;
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${formatMoney(item.price)}</div>
                    </div>
                    <div class="cart-item-qty">
                        <button onclick="app.changePOSCartQty('${item.id}', -1)">-</button>
                        <span style="font-weight:600; min-width:20px; text-align:center;">${item.qty}</span>
                        <button onclick="app.changePOSCartQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            `;
        });
    }

    const itemsContainer = document.getElementById('pos-cart-items');
    if (itemsContainer) itemsContainer.innerHTML = html;

    const subtotalEl = document.getElementById('pos-subtotal');
    const totalEl = document.getElementById('pos-total');
    if (subtotalEl) subtotalEl.textContent = formatMoney(total);
    if (totalEl) totalEl.textContent = formatMoney(total);
    
    // Fill customer select if not filled
    const custSelect = document.getElementById('pos-customer');
    if (custSelect && custSelect.options.length <= 1) { // 1 or 0
        custSelect.innerHTML = '<option value="Khách lẻ">Khách lẻ (Không lưu thông tin)</option>' + 
            mockData.customers.filter(c => !c.isDeleted).map(c => `<option value="${c.id}">${c.name} - ${c.phone}</option>`).join('');
    }
};

const renderOrders = () => {
    const searchTerm = document.getElementById('search-order').value.toLowerCase();
    const statusFilter = document.getElementById('filter-order-status').value;

    let filtered = mockData.orders.filter(o => {
        const cName = getCustomerName(o.customerId).toLowerCase();
        const matchSearch = o.id.toLowerCase().includes(searchTerm) || cName.includes(searchTerm);
        const matchStatus = statusFilter === 'all' || o.status === statusFilter;
        return matchSearch && matchStatus;
    });

    let html = '';
    if (filtered.length === 0) {
        html = `<tr><td colspan="8" style="text-align:center; padding: 30px;">Không tìm thấy dữ liệu.</td></tr>`;
    } else {
        filtered.reverse().forEach(o => {
            html += `
                <tr style="cursor: pointer;" class="hover-row" onclick="app.viewOrderDetail('${o.id}')">
                    <td style="font-weight:600; color:var(--primary)">${o.id}</td>
                    <td>${getCustomerName(o.customerId)}</td>
                    <td>${o.service}</td>
                    <td>${formatMoney(o.value)}</td>
                    <td>${o.saler}</td>
                    <td><span class="badge ${getBadgeClass(o.status)}">${o.status}</span></td>
                    <td>${formatDate(o.date)}</td>
                    <td></td>
                </tr>
            `;
        });
    }
    document.getElementById('orders-table').innerHTML = html;
};

const renderTasks = () => {
    const statusFilter = document.getElementById('filter-task-status').value;
    const assigneeFilter = document.getElementById('filter-task-assignee').value;

    let filtered = mockData.tasks.filter(t => {
        const matchStatus = statusFilter === 'all' || t.status === statusFilter;
        const matchAssignee = assigneeFilter === 'all' || t.assignee === assigneeFilter;
        return matchStatus && matchAssignee;
    });

    if (appState.taskViewMode === 'table') {
        let html = '';
        if (filtered.length === 0) {
            html = `<tr><td colspan="7" style="text-align:center; padding: 30px;">Không tìm thấy dữ liệu.</td></tr>`;
        } else {
            filtered.sort((a,b) => new Date(a.deadline) - new Date(b.deadline)).forEach(t => {
                const overdue = isOverdue(t.deadline, t.status);
                if(overdue) t.status = 'Quá hạn'; // Ensure view update
                html += `
                    <tr>
                        <td style="font-weight:600; cursor:pointer; color:var(--primary)" onclick="app.viewTaskDetail('${t.id}')">${t.title}</td>
                        <td>${t.orderId ? `<a href="#" onclick="app.viewOrderDetail('${t.orderId}')">${t.orderId}</a>` : '-'}</td>
                        <td>${t.assignee}</td>
                        <td class="priority-${t.priority.split(' ')[0]}">${t.priority}</td>
                        <td class="${overdue ? 'text-danger font-bold' : ''}">${formatDate(t.deadline)}</td>
                        <td><span class="badge ${getBadgeClass(t.status)}">${t.status}</span></td>
                        <td>
                            <button class="btn btn-sm btn-secondary" onclick="app.viewTaskDetail('${t.id}')">Xem</button>
                        </td>
                    </tr>
                `;
            });
        }
        document.getElementById('tasks-table').innerHTML = html;
    } else {
        // Render Kanban
        const cols = {
            'Chưa làm': [],
            'Đang làm': [],
            'Hoàn thành': [],
            'Quá hạn': []
        };
        
        filtered.forEach(t => {
            const overdue = isOverdue(t.deadline, t.status);
            if(overdue) t.status = 'Quá hạn';
            
            let targetCol = t.status;
            if (!cols[targetCol]) targetCol = 'Chưa làm'; // Fallback
            cols[targetCol].push(t);
        });
        
        ['Chưa làm', 'Đang làm', 'Hoàn thành', 'Quá hạn'].forEach(status => {
            const colId = status === 'Chưa làm' ? 'todo' : status === 'Đang làm' ? 'doing' : status === 'Hoàn thành' ? 'done' : 'overdue';
            const container = document.getElementById(`kanban-${colId}`);
            if (container) {
                let html = '';
                cols[status].sort((a,b) => new Date(a.deadline) - new Date(b.deadline)).forEach(t => {
                    const avatarStr = t.assignee.substring(0,2).toUpperCase();
                    html += `
                        <div class="kanban-card" draggable="true" ondragstart="app.drag(event)" id="task-card-${t.id}" data-id="${t.id}" onclick="app.viewTaskDetail('${t.id}')">
                            <div class="kanban-card-meta">
                                <span>${t.id} ${t.orderId ? ` | <i class="fa-solid fa-cart-shopping"></i> ${t.orderId}` : ''}</span>
                                <span class="priority-${t.priority.split(' ')[0]}">${t.priority}</span>
                            </div>
                            <div class="kanban-card-title">${t.title}</div>
                            <div class="kanban-card-footer">
                                <div class="kanban-assignee">
                                    <div class="avatar-sm">${avatarStr}</div>
                                    <span>${t.assignee.split(' ')[0]}</span>
                                </div>
                                <div style="font-size:12px; color: ${isOverdue(t.deadline, t.status) ? 'var(--danger)' : 'var(--text-secondary)'}">
                                    <i class="fa-regular fa-clock"></i> ${formatDate(t.deadline)}
                                </div>
                            </div>
                        </div>
                    `;
                });
                container.innerHTML = html;
                
                // Update count
                container.parentElement.querySelector('.kanban-count').textContent = cols[status].length;
            }
        });
    }
};

const renderUsers = () => {
    let html = '';
    mockData.users.forEach(u => {
        html += `
            <tr style="cursor: pointer;" class="hover-row" onclick="app.viewUserDetail(${u.id})">
                <td style="font-weight:600">${u.name}</td>
                <td>${u.role}</td>
                <td>${u.phone || ''}</td>
                <td><span class="badge ${u.status === 'Hoạt động' ? 'badge-completed' : 'badge-canceled'}">${u.status}</span></td>
                <td onclick="event.stopPropagation()">
                    <button class="btn btn-secondary" style="padding: 6px 10px;" onclick="app.openEditUserModal(${u.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn btn-secondary" style="padding: 6px 10px;" onclick="app.softDeleteUser(${u.id})"><i class="fa-solid fa-lock"></i></button>
                </td>
            </tr>
        `;
    });
    document.getElementById('users-table').innerHTML = html;
};

// --- USER MODAL LOGIC ---
const viewUserDetail = (id) => {
    const u = mockData.users.find(x => x.id === id);
    if(!u) return;

    const doing = mockData.tasks.filter(t => t.assignee === u.name && t.status === 'Đang làm').length;
    const infoHtml = `
        <div class="detail-row"><div class="label">Họ tên:</div><div class="value" style="font-weight:bold;">${u.name}</div></div>
        <div class="detail-row"><div class="label">Vai trò:</div><div class="value">${u.role}</div></div>
        <div class="detail-row"><div class="label">Số điện thoại:</div><div class="value">${u.phone || '-'}</div></div>
        <div class="detail-row"><div class="label">Email:</div><div class="value">${u.email || '-'}</div></div>
        <div class="detail-row"><div class="label">Mật khẩu:</div><div class="value">***</div></div>
        <div class="detail-row"><div class="label">Trạng thái:</div><div class="value"><span class="badge ${u.status === 'Hoạt động' ? 'badge-completed' : 'badge-canceled'}">${u.status}</span></div></div>
        <div class="detail-row"><div class="label">Việc đang làm:</div><div class="value">${doing} công việc</div></div>
    `;
    document.getElementById('user-detail-info').innerHTML = infoHtml;
    
    document.getElementById('user-cccd-front').style.display = 'block';
    document.getElementById('user-cccd-front').src = u.cccd || 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc';
    document.getElementById('user-cccd-back').style.display = 'block';
    document.getElementById('user-cccd-back').src = u.cccd ? u.cccd.replace('Mat+Truoc', 'Mat+Sau') : 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Sau';

    app.openModal('user-detail-modal');
};

const openEditUserModal = (id = null) => {
    if(id) {
        const u = mockData.users.find(x => x.id === id);
        if(u) {
            document.getElementById('edit-user-modal-title').innerText = 'Cập nhật Nhân sự';
            document.getElementById('edit-user-id').value = u.id;
            document.getElementById('edit-user-name').value = u.name;
            document.getElementById('edit-user-role').value = u.role;
            document.getElementById('edit-user-phone').value = u.phone || '';
            document.getElementById('edit-user-email').value = u.email || '';
            document.getElementById('edit-user-password').value = u.password || 'password123';
            document.getElementById('edit-user-status').value = u.status;
        }
    } else {
        document.getElementById('edit-user-modal-title').innerText = 'Thêm Nhân sự mới';
        document.getElementById('edit-user-form').reset();
        document.getElementById('edit-user-id').value = '';
    }
    app.openModal('edit-user-modal');
};

const saveUserEdit = () => {
    const id = document.getElementById('edit-user-id').value;
    const name = document.getElementById('edit-user-name').value;
    const role = document.getElementById('edit-user-role').value;
    const phone = document.getElementById('edit-user-phone').value;
    const email = document.getElementById('edit-user-email').value;
    const password = document.getElementById('edit-user-password').value;
    const status = document.getElementById('edit-user-status').value;
    
    if(!name || !role) {
        alert('Vui lòng nhập đủ Họ tên và Vai trò!');
        return;
    }

    if(id) {
        const u = mockData.users.find(x => x.id == id);
        if(u) {
            if (u.role === 'Admin' && status === 'Khóa') {
                alert('Không thể khóa tài khoản Admin!');
                return;
            }
            u.name = name; u.role = role; u.phone = phone; u.email = email;
            u.password = password; u.status = status;
        }
    } else {
        const newId = Math.max(...mockData.users.map(u => u.id)) + 1;
        mockData.users.push({
            id: newId, name, role, phone, email, password, status,
            cccd: 'https://placehold.co/400x250/f4f4f4/888?text=CCCD+Mat+Truoc'
        });
    }
    
    saveData();
    renderUsers();
    app.closeModal('edit-user-modal');
    alert('Đã lưu thông tin nhân sự!');
};

const softDeleteUser = (id) => {
    const u = mockData.users.find(x => x.id === id);
    if (!u) return;
    
    if (u.role === 'Admin') {
        alert('Không thể khóa tài khoản Admin!');
        return;
    }

    if(confirm('Bạn có chắc chắn muốn khóa tài khoản nhân viên này không?')) {
        u.status = 'Khóa';
        saveData();
        renderUsers();
    }
};

const renderReports = () => {
    const timeFilter = document.getElementById('filter-report-time').value;
    const now = new Date(appState.today);
    
    // Filter logic
    const isThisMonth = (dateStr) => {
        const d = new Date(dateStr);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    };
    
    const isLastMonth = (dateStr) => {
        const d = new Date(dateStr);
        const lastM = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        return d.getMonth() === lastM.getMonth() && d.getFullYear() === lastM.getFullYear();
    };

    let filteredOrders = mockData.orders.filter(o => o.status === 'Đã giao');
    let filteredTasks = mockData.tasks;

    if (timeFilter === 'this_month') {
        filteredOrders = filteredOrders.filter(o => isThisMonth(o.date));
        filteredTasks = filteredTasks.filter(t => isThisMonth(t.deadline));
    } else if (timeFilter === 'last_month') {
        filteredOrders = filteredOrders.filter(o => isLastMonth(o.date));
        filteredTasks = filteredTasks.filter(t => isLastMonth(t.deadline));
    }

    // Update Summary
    const totalRevenue = filteredOrders.reduce((sum, o) => sum + o.value, 0);
    const totalOrdersCount = mockData.orders.filter(o => timeFilter === 'all' ? true : (timeFilter === 'this_month' ? isThisMonth(o.date) : isLastMonth(o.date))).length;
    
    const completedTasksCount = filteredTasks.filter(t => t.status === 'Hoàn thành').length;
    const completionRate = filteredTasks.length ? Math.round((completedTasksCount / filteredTasks.length) * 100) : 0;

    document.getElementById('report-total-revenue').textContent = formatMoney(totalRevenue);
    document.getElementById('report-total-orders').textContent = totalOrdersCount;
    document.getElementById('report-task-completion').textContent = completionRate + '%';

    // Group Revenue Data
    const revenueLabels = [];
    const revenueData = [];
    const revenueByGroup = {};
    
    let minDate = null;
    let maxDate = null;
    
    if (timeFilter === 'all') {
        // Group by Month
        filteredOrders.forEach(o => {
            const dateObj = new Date(o.date);
            const mStr = `${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;
            revenueByGroup[mStr] = (revenueByGroup[mStr] || 0) + o.value;
            
            if (!minDate || dateObj < minDate) minDate = new Date(dateObj);
            if (!maxDate || dateObj > maxDate) maxDate = new Date(dateObj);
        });

        if (minDate && maxDate) {
            let current = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
            const end = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
            while (current <= end) {
                const mStr = `${String(current.getMonth() + 1).padStart(2, '0')}/${current.getFullYear()}`;
                revenueLabels.push(`Tháng ${mStr}`);
                revenueData.push(revenueByGroup[mStr] || 0);
                current.setMonth(current.getMonth() + 1);
            }
        }
    } else {
        // Group by Date for this/last month
        filteredOrders.forEach(o => {
            const dateObj = new Date(o.date);
            const dStr = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
            revenueByGroup[dStr] = (revenueByGroup[dStr] || 0) + o.value;
            
            if (!minDate || dateObj < minDate) minDate = new Date(dateObj);
            if (!maxDate || dateObj > maxDate) maxDate = new Date(dateObj);
        });

        if (timeFilter === 'this_month') {
            minDate = new Date(now.getFullYear(), now.getMonth(), 1);
            maxDate = new Date(now.getFullYear(), now.getMonth() + 1, 0); // last day
        } else if (timeFilter === 'last_month') {
            minDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            maxDate = new Date(now.getFullYear(), now.getMonth(), 0);
        }

        if (minDate && maxDate) {
            let current = new Date(minDate);
            while (current <= maxDate) {
                const dStr = `${String(current.getDate()).padStart(2, '0')}/${String(current.getMonth() + 1).padStart(2, '0')}`;
                revenueLabels.push(dStr);
                revenueData.push(revenueByGroup[dStr] || 0);
                current.setDate(current.getDate() + 1);
            }
        }
    }
    
    if (revenueChartInstance) revenueChartInstance.destroy();
    const ctxRev = document.getElementById('revenueChart').getContext('2d');
    
    // Create gradient
    let gradient = ctxRev.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(15, 98, 254, 0.8)');   
    gradient.addColorStop(1, 'rgba(15, 98, 254, 0.2)');

    revenueChartInstance = new Chart(ctxRev, {
        type: 'bar',
        data: {
            labels: revenueLabels.length ? revenueLabels : ['Chưa có dữ liệu'],
            datasets: [{
                label: 'Doanh thu (VNĐ)',
                data: revenueData.length ? revenueData : [0],
                backgroundColor: gradient,
                borderColor: 'rgba(15, 98, 254, 1)',
                borderWidth: 2,
                borderRadius: 6,
                barThickness: 40,
                hoverBackgroundColor: 'rgba(0, 67, 206, 0.9)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    titleFont: { size: 14, family: "'Segoe UI', sans-serif" },
                    bodyFont: { size: 14, family: "'Segoe UI', sans-serif" },
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: { 
                y: { 
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false,
                    },
                    ticks: {
                        font: { family: "'Segoe UI', sans-serif" },
                        callback: function(value, index, values) {
                            if(value >= 1000000) return (value / 1000000) + 'M';
                            if(value >= 1000) return (value / 1000) + 'K';
                            return value;
                        }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { family: "'Segoe UI', sans-serif" } }
                }
            }
        }
    });

    // Group Task Data
    const taskStats = { 'Hoàn thành': 0, 'Đang làm': 0, 'Chờ duyệt': 0, 'Quá hạn': 0, 'Chưa làm': 0 };
    filteredTasks.forEach(t => {
        const status = (isOverdue(t.deadline, t.status)) ? 'Quá hạn' : t.status;
        if(taskStats[status] !== undefined) taskStats[status]++;
        else taskStats['Chưa làm']++;
    });

    const taskColors = ['#48bb78', '#4299e1', '#ecc94b', '#f56565', '#a0aec0'];
    const taskLabels = Object.keys(taskStats);
    const taskData = Object.values(taskStats);

    if (taskChartInstance) taskChartInstance.destroy();
    const ctxTask = document.getElementById('taskChart').getContext('2d');
    taskChartInstance = new Chart(ctxTask, {
        type: 'doughnut',
        data: {
            labels: taskLabels,
            datasets: [{
                data: taskData,
                backgroundColor: taskColors,
                borderWidth: 0,
                hoverOffset: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 10,
                    bodyFont: { size: 14, family: "'Segoe UI', sans-serif" }
                }
            },
            cutout: '75%'
        }
    });

    // Render Task List HTML
    let taskHtml = '';
    taskLabels.forEach((label, idx) => {
        const val = taskData[idx];
        const pct = filteredTasks.length ? Math.round((val / filteredTasks.length) * 100) : 0;
        if (val >= 0) {
            taskHtml += `<li style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 14px; height: 14px; border-radius: 4px; background-color: ${taskColors[idx]}; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
                    <span style="font-size: 14px; color: var(--text-main); font-weight: 500;">${label}</span>
                </div>
                <strong style="color: ${taskColors[idx]}; font-size: 16px;">${val} <span style="font-size:13px; font-weight:normal; color:var(--text-secondary);">(${pct}%)</span></strong>
            </li>`;
        }
    });
    if(!taskHtml) taskHtml = '<li><span>Không có dữ liệu</span></li>';
    document.getElementById('report-task-list').innerHTML = taskHtml;
};

// --- DETAILS VIEW RENDERS ---

const renderCustomerDetail = (id) => {
    const c = mockData.customers.find(x => x.id === id);
    if(!c) return;
    appState.currentCustomerId = id;

    const infoHtml = `
        <div class="detail-row"><div class="label">Mã KH:</div><div class="value">${c.id}</div></div>
        <div class="detail-row"><div class="label">Tên khách hàng:</div><div class="value">${c.name}</div></div>
        <div class="detail-row"><div class="label">Số điện thoại:</div><div class="value">${c.phone}</div></div>
        <div class="detail-row"><div class="label">Email:</div><div class="value">${c.email || '-'}</div></div>
        <div class="detail-row"><div class="label">Nguồn:</div><div class="value">${c.source}</div></div>
        <div class="detail-row"><div class="label">Ngày tạo:</div><div class="value">${formatDate(c.date)}</div></div>
        <div class="detail-notes"><strong>Ghi chú:</strong> ${c.note || 'Không có ghi chú'}</div>
    `;
    document.getElementById('customer-detail-info').innerHTML = infoHtml;

    const orders = mockData.orders.filter(o => o.customerId === id);
    let ordersHtml = '';
    if(orders.length === 0) {
        ordersHtml = `<tr><td colspan="5" style="text-align:center">Chưa có đơn hàng nào</td></tr>`;
    } else {
        orders.forEach(o => {
            ordersHtml += `
                <tr style="cursor:pointer" onclick="app.viewOrderDetail('${o.id}')">
                    <td class="text-primary">${o.id}</td>
                    <td>${o.service}</td>
                    <td>${formatMoney(o.value)}</td>
                    <td><span class="badge ${getBadgeClass(o.status)}">${o.status}</span></td>
                    <td>${formatDate(o.date)}</td>
                </tr>
            `;
        });
    }
    document.getElementById('customer-orders-table').innerHTML = ordersHtml;
};

const renderOrderDetail = (id) => {
    const o = mockData.orders.find(x => x.id === id);
    if(!o) return;
    appState.currentOrderId = id;
    const c = mockData.customers.find(x => x.id === o.customerId);

    const infoHtml = `
        <div class="detail-row"><div class="label">Mã đơn:</div><div class="value">${o.id}</div></div>
        <div class="detail-row"><div class="label">Khách hàng:</div><div class="value"><a href="#" onclick="app.viewCustomerDetail('${c.id}')">${c.name}</a></div></div>
        <div class="detail-row"><div class="label">Dịch vụ:</div><div class="value">${o.service}</div></div>
        <div class="detail-row"><div class="label">Giá trị:</div><div class="value">${formatMoney(o.value)}</div></div>
        <div class="detail-row"><div class="label">Người phụ trách:</div><div class="value">${o.saler}</div></div>
        <div class="detail-row"><div class="label">Thanh toán:</div><div class="value"><span class="badge ${o.paymentStatus === 'Đã thanh toán' ? 'badge-completed' : (o.paymentStatus === 'Thanh toán một phần' ? 'badge-doing' : 'badge-danger')}">${o.paymentStatus || 'Chưa thanh toán'}</span></div></div>
        <div class="detail-row"><div class="label">Trạng thái:</div><div class="value"><span class="badge ${getBadgeClass(o.status)}">${o.status}</span></div></div>
        <div class="detail-row"><div class="label">Ngày tạo:</div><div class="value">${formatDate(o.date)}</div></div>
    `;
    document.getElementById('order-detail-info').innerHTML = infoHtml;
    
    // ACTION BUTTONS
    let actionButtonsHtml = '';
    if (o.status === 'Chờ xác nhận') {
        actionButtonsHtml = `
            <button class="btn btn-primary" onclick="app.changeOrderStatus('${id}', 'Chờ lấy hàng')">Xác nhận đơn</button>
            <button class="btn btn-danger" onclick="app.changeOrderStatus('${id}', 'Đã hủy')">Hủy đơn</button>
        `;
    } else if (o.status === 'Chờ lấy hàng') {
        actionButtonsHtml = `
            <button class="btn btn-primary" onclick="app.changeOrderStatus('${id}', 'Chờ giao hàng')">Đã lấy hàng</button>
        `;
    } else if (o.status === 'Chờ giao hàng') {
        actionButtonsHtml = `
            <button class="btn btn-primary" onclick="app.changeOrderStatus('${id}', 'Đã giao')">Đã giao</button>
        `;
    } else if (o.status === 'Đã giao') {
        actionButtonsHtml = `
            <button class="btn btn-secondary" onclick="app.openReturnModal('${id}')">Yêu cầu trả hàng</button>
        `;
    } else if (o.status === 'Chờ duyệt trả hàng') {
        actionButtonsHtml = `
            <button class="btn btn-success" onclick="app.approveReturn('${id}')">Duyệt trả hàng</button>
            <button class="btn btn-danger" onclick="app.rejectReturn('${id}')">Từ chối</button>
        `;
    }
    document.getElementById('order-action-buttons').innerHTML = actionButtonsHtml;

    const tasks = mockData.tasks.filter(t => t.orderId === id);
    let tasksHtml = '';
    if(tasks.length === 0) {
        tasksHtml = `<tr><td colspan="4" style="text-align:center">Chưa có công việc nào</td></tr>`;
    } else {
        tasks.forEach(t => {
            tasksHtml += `
                <tr style="cursor:pointer" onclick="app.viewTaskDetail('${t.id}')">
                    <td class="text-primary">${t.title}</td>
                    <td>${t.assignee}</td>
                    <td class="${isOverdue(t.deadline, t.status) ? 'text-danger font-bold' : ''}">${formatDate(t.deadline)}</td>
                    <td><span class="badge ${getBadgeClass(t.status)}">${t.status}</span></td>
                </tr>
            `;
        });
    }
    document.getElementById('order-tasks-table').innerHTML = tasksHtml;
};

const renderTaskDetail = (id) => {
    const t = mockData.tasks.find(x => x.id === id);
    if(!t) return;
    appState.currentTaskId = id;
    
    let orderHtml = '-';
    if (t.orderId) {
        const s = getOrderService(t.orderId);
        orderHtml = `<a href="#" onclick="app.viewOrderDetail('${t.orderId}')">${t.orderId} - ${s}</a>`;
    }

    const infoHtml = `
        <h2 style="margin-bottom: 20px;">${t.title}</h2>
        <div class="detail-row"><div class="label">Đơn hàng liên kết:</div><div class="value">${orderHtml}</div></div>
        <div class="detail-row"><div class="label">Người phụ trách:</div><div class="value">${t.assignee}</div></div>
        <div class="detail-row"><div class="label">Mức ưu tiên:</div><div class="value priority-${t.priority.split(' ')[0]}">${t.priority}</div></div>
        <div class="detail-row"><div class="label">Deadline:</div><div class="value ${isOverdue(t.deadline, t.status) ? 'text-danger font-bold' : ''}">${formatDate(t.deadline)}</div></div>
        <div class="detail-row"><div class="label">Trạng thái:</div><div class="value"><span class="badge ${getBadgeClass(t.status)}">${t.status}</span></div></div>
        <div class="detail-notes">
            <strong>Ghi chú tiến độ:</strong> <br><br>
            ${t.notes ? t.notes.replace(/\n/g, '<br>') : 'Chưa có ghi chú.'}
        </div>
    `;
    document.getElementById('task-detail-info').innerHTML = infoHtml;
};

// --- APP LOGIC (GLOBAL METHODS) ---
window.app = {
    showLoading: (callback) => {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.remove('hidden');
        setTimeout(() => {
            callback();
            overlay.classList.add('hidden');
        }, 300);
    },

    navigate: (viewId) => {
        app.showLoading(() => {
            // update nav active state
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const navItem = document.querySelector(`.nav-item[data-view="${viewId}"]`);
            if(navItem) {
                navItem.classList.add('active');
                const titleSpan = navItem.querySelector('span');
                const headerTitle = document.getElementById('header-title');
                if (titleSpan && headerTitle) {
                    headerTitle.textContent = titleSpan.textContent === 'Dashboard' ? 'Tổng quan' : 'Quản lý ' + titleSpan.textContent;
                }
            }

            // hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            
            // show target view
            document.getElementById(`view-${viewId}`).classList.remove('hidden');
            document.getElementById(`view-${viewId}`).classList.add('active');

            // render data
            if(viewId === 'dashboard') renderDashboard();
            if(viewId === 'customers') renderCustomers();
            if(viewId === 'products') renderProducts();
            if(viewId === 'orders') renderOrders();
            if(viewId === 'tasks') renderTasks();
            if(viewId === 'users') renderUsers();
            if(viewId === 'reports') renderReports();
            if(viewId === 'pos') {
                app.renderPOSProducts();
                app.renderPOSCart();
            }
        });
    },

    viewCustomerDetail: (id) => {
        app.showLoading(() => {
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById('view-customer-detail').classList.remove('hidden');
            const headerTitle = document.getElementById('header-title');
            if(headerTitle) headerTitle.textContent = 'Chi tiết Khách hàng';
            renderCustomerDetail(id);
        });
    },

    viewOrderDetail: (id) => {
        app.showLoading(() => {
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById('view-order-detail').classList.remove('hidden');
            const headerTitle = document.getElementById('header-title');
            if(headerTitle) headerTitle.textContent = 'Chi tiết Đơn hàng';
            renderOrderDetail(id);
        });
    },

    viewTaskDetail: (id) => {
        app.showLoading(() => {
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById('view-task-detail').classList.remove('hidden');
            const headerTitle = document.getElementById('header-title');
            if(headerTitle) headerTitle.textContent = 'Chi tiết Công việc';
            renderTaskDetail(id);
        });
    },

    // Modal helpers
    openModal: (modalId) => {
        document.getElementById(modalId).classList.add('active');
    },
    closeModal: (modalId) => {
        document.getElementById(modalId).classList.remove('active');
    },

    // Product logic
    openCreateProductModal: () => {
        document.getElementById('product-form').reset();
        document.getElementById('prod-id').value = '';
        document.getElementById('product-modal-title').textContent = 'Thêm Sản phẩm';
        app.openModal('product-modal');
    },

    openEditProductModal: (id) => {
        const p = mockData.products.find(x => x.id === id);
        if(!p) return;
        document.getElementById('product-form').reset();
        document.getElementById('prod-id').value = p.id;
        document.getElementById('prod-name').value = p.name;
        document.getElementById('prod-brand').value = p.brand || 'Khác';
        document.getElementById('prod-category').value = p.category || 'Khác';
        document.getElementById('prod-price').value = p.price;
        document.getElementById('prod-warranty').value = p.warranty || 12;
        document.getElementById('prod-power').value = p.power || '';
        document.getElementById('prod-battery').value = p.battery || '';
        document.getElementById('prod-stock').value = p.stock;
        
        if (document.getElementById('prod-size')) document.getElementById('prod-size').value = p.size || '';
        if (document.getElementById('prod-weight')) document.getElementById('prod-weight').value = p.weight || '';
        if (document.getElementById('prod-connections')) document.getElementById('prod-connections').value = p.connections || '';
        if (document.getElementById('prod-description')) document.getElementById('prod-description').value = p.description || '';
        
        document.getElementById('product-modal-title').textContent = 'Sửa Sản phẩm - ' + p.id;
        app.openModal('product-modal');
    },

    softDeleteProduct: (id) => {
        if(confirm('Bạn có chắc chắn muốn xóa sản phẩm này? (Dữ liệu sẽ bị ẩn đi)')) {
            const p = mockData.products.find(x => x.id === id);
            if(p) {
                p.isDeleted = true;
                showToast('Đã xóa sản phẩm: ' + p.name);
                if(!document.getElementById('view-products').classList.contains('hidden')) renderProducts();
            }
        }
    },

    saveProduct: () => {
        const id = document.getElementById('prod-id').value;
        const name = document.getElementById('prod-name').value;
        const brand = document.getElementById('prod-brand').value;
        const category = document.getElementById('prod-category').value;
        const price = document.getElementById('prod-price').value;
        const warranty = document.getElementById('prod-warranty').value;
        const power = document.getElementById('prod-power').value;
        const battery = document.getElementById('prod-battery').value;
        const stock = document.getElementById('prod-stock').value || 0;
        
        const size = document.getElementById('prod-size') ? document.getElementById('prod-size').value : '';
        const weight = document.getElementById('prod-weight') ? document.getElementById('prod-weight').value : '';
        const connections = document.getElementById('prod-connections') ? document.getElementById('prod-connections').value : '';
        const desc = document.getElementById('prod-description') ? document.getElementById('prod-description').value : '';
        
        if(!name || !price) return alert('Vui lòng nhập đầy đủ tên và giá sản phẩm');

        const fileInput = document.getElementById('prod-image');

        const finalizeSave = (imgBase64) => {
            if (id) {
                // Update
                const p = mockData.products.find(x => x.id === id);
                if(p) {
                    p.name = name;
                    p.brand = brand;
                    p.category = category;
                    p.warranty = parseInt(warranty || 12);
                    p.price = parseInt(price);
                    p.stock = parseInt(stock);
                    p.power = power;
                    p.battery = battery;
                    p.size = size;
                    p.weight = weight;
                    p.connections = connections;
                    p.description = desc;
                    if(imgBase64) p.image = imgBase64;
                    showToast('Cập nhật sản phẩm thành công');
                }
            } else {
                // Create
                const newId = generateId('SP');
                mockData.products.push({
                    id: newId,
                    name: name,
                    brand: brand,
                    category: category,
                    warranty: parseInt(warranty || 12),
                    price: parseInt(price),
                    stock: parseInt(stock),
                    power: power,
                    battery: battery,
                    size: size,
                    weight: weight,
                    connections: connections,
                    description: desc,
                    image: imgBase64
                });
                showToast('Thêm sản phẩm thành công');
            }
            
            app.closeModal('product-modal');
            document.getElementById('product-form').reset();
            
            const prodSelect = document.getElementById('order-service');
            if (prodSelect) prodSelect.innerHTML = '<option value="">-- Chọn sản phẩm --</option>' + mockData.products.map(p => `<option value="${p.name}" data-price="${p.price}">${p.name}</option>`).join('');
            
            if(!document.getElementById('view-products').classList.contains('hidden')) renderProducts();
        };

        if (fileInput && fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => finalizeSave(e.target.result);
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            finalizeSave(null);
        }
    },
    
    openImportStockModal: (id) => {
        const p = mockData.products.find(x => x.id === id);
        if(!p) return;
        document.getElementById('import-prod-id').value = p.id;
        document.getElementById('import-prod-name').value = p.name;
        document.getElementById('import-prod-qty').value = '';
        app.openModal('import-stock-modal');
    },

    saveImportStock: () => {
        const id = document.getElementById('import-prod-id').value;
        const qty = parseInt(document.getElementById('import-prod-qty').value);
        if(!qty || qty <= 0) return alert('Vui lòng nhập số lượng hợp lệ lớn hơn 0');

        const p = mockData.products.find(x => x.id === id);
        if(!p) return;
        
        p.stock += qty;
        
        app.closeModal('import-stock-modal');
        showToast(`Đã nhập thêm ${qty} sản phẩm ${p.name}`);
        if(!document.getElementById('view-products').classList.contains('hidden')) renderProducts();
    },

    // Customer logic
    saveCustomer: () => {
        const id = document.getElementById('cust-id').value;
        const name = document.getElementById('cust-name').value;
        const phone = document.getElementById('cust-phone').value;
        if(!name || !phone) return alert('Vui lòng nhập tên và SĐT');

        if (id) {
            // Edit existing
            const c = mockData.customers.find(x => x.id === id);
            if (c) {
                c.name = name;
                c.phone = phone;
                c.email = document.getElementById('cust-email').value;
                c.source = document.getElementById('cust-source').value;
                c.note = document.getElementById('cust-note').value;
            }
            showToast('Cập nhật khách hàng thành công!');
        } else {
            // Create new
            const newId = generateId('KH');
            mockData.customers.push({
                id: newId,
                name: name,
                phone: phone,
                email: document.getElementById('cust-email').value,
                source: document.getElementById('cust-source').value,
                date: appState.today,
                note: document.getElementById('cust-note').value
            });
            showToast('Thêm khách hàng thành công!');
        }
        
        app.closeModal('customer-modal');
        document.getElementById('customer-form').reset();
        
        if(!document.getElementById('view-customers').classList.contains('hidden')) renderCustomers();
        if(!document.getElementById('view-customer-detail').classList.contains('hidden')) renderCustomerDetail(id);
        renderDashboard();
    },

    openEditCustomerModal: (id) => {
        const c = mockData.customers.find(x => x.id === id);
        if(!c) return;
        document.getElementById('customer-form').reset();
        document.getElementById('customer-modal-title').textContent = 'Sửa thông tin khách hàng';
        
        document.getElementById('cust-id').value = c.id;
        document.getElementById('cust-name').value = c.name;
        document.getElementById('cust-phone').value = c.phone;
        document.getElementById('cust-email').value = c.email || '';
        document.getElementById('cust-source').value = c.source || 'Website';
        document.getElementById('cust-note').value = c.note || '';
        
        app.openModal('customer-modal');
    },

    openCreateCustomerModal: () => {
        document.getElementById('customer-form').reset();
        document.getElementById('cust-id').value = '';
        document.getElementById('customer-modal-title').textContent = 'Thêm khách hàng';
        app.openModal('customer-modal');
    },

    softDeleteCustomer: (id) => {
        if(confirm('Bạn có chắc chắn muốn xóa khách hàng này? (Các đơn hàng cũ vẫn được giữ lại)')) {
            const c = mockData.customers.find(x => x.id === id);
            if(c) c.isDeleted = true;
            showToast('Đã xóa khách hàng');
            if(!document.getElementById('view-customers').classList.contains('hidden')) renderCustomers();
            renderDashboard();
        }
    },

    openCreateOrderFromCustomer: () => {
        document.getElementById('order-customer').value = appState.currentCustomerId;
        document.getElementById('order-qty').value = 1;
        app.openModal('order-modal');
    },

    onProductSelectChange: () => {
        app.onQuantityChange();
    },

    onQuantityChange: () => {
        const select = document.getElementById('order-service');
        const priceInput = document.getElementById('order-value');
        const qtyInput = document.getElementById('order-qty');
        
        if (select.selectedIndex > 0) {
            const price = parseInt(select.options[select.selectedIndex].getAttribute('data-price') || 0);
            const qty = parseInt(qtyInput.value || 1);
            priceInput.value = price * qty;
        } else {
            priceInput.value = '';
        }
    },

    // Order logic
    saveOrder: () => {
        const customerId = document.getElementById('order-customer').value;
        const service = document.getElementById('order-service').value;
        const value = document.getElementById('order-value').value;
        const qty = parseInt(document.getElementById('order-qty').value || 1);
        
        if(!customerId || !service || !value || qty < 1) return alert('Vui lòng điền đủ thông tin hợp lệ');

        const p = mockData.products.find(x => x.name === service);
        if (p && p.stock < qty) {
            return alert(`Sản phẩm này chỉ còn ${p.stock} trong kho, không đủ số lượng ${qty}!`);
        }

        const newId = generateId('DH');
        mockData.orders.push({
            id: newId,
            customerId: customerId,
            service: service,
            value: parseInt(value),
            saler: document.getElementById('order-saler').value,
            paymentStatus: document.getElementById('order-payment-status').value || 'Chưa thanh toán',
            status: 'Chờ xác nhận',
            date: appState.today
        });

        // Trừ tồn kho
        if (p) p.stock = Math.max(0, p.stock - qty);

        app.closeModal('order-modal');
        document.getElementById('order-form').reset();
        showToast('Tạo đơn hàng thành công!');
        
        if(!document.getElementById('view-orders').classList.contains('hidden')) renderOrders();
        if(!document.getElementById('view-customer-detail').classList.contains('hidden')) renderCustomerDetail(appState.currentCustomerId);
        if(!document.getElementById('view-products').classList.contains('hidden')) renderProducts();
        renderDashboard();
    },

    // Order State Machine actions
    changeOrderStatus: (id, newStatus) => {
        const o = mockData.orders.find(x => x.id === id);
        if(!o) return;
        o.status = newStatus;
        showToast(`Đã chuyển trạng thái thành: ${newStatus}`);
        renderOrderDetail(id);
        renderDashboard();
    },

    openReturnModal: (id) => {
        appState.currentOrderId = id;
        document.getElementById('return-form').reset();
        document.getElementById('return-image-preview').innerHTML = '';
        app.openModal('return-modal');
    },

    submitReturnRequest: () => {
        const files = document.getElementById('return-images').files;
        const reason = document.getElementById('return-reason').value;
        if(files.length === 0 || !reason) {
            return alert('Vui lòng nhập lý do và đính kèm ít nhất 1 ảnh!');
        }
        if(files.length > 5) {
            return alert('Chỉ được đính kèm tối đa 5 ảnh!');
        }
        
        // Update status
        app.changeOrderStatus(appState.currentOrderId, 'Chờ duyệt trả hàng');
        app.closeModal('return-modal');
        showToast('Đã gửi yêu cầu trả hàng, vui lòng chờ duyệt.');
    },

    approveReturn: (id) => {
        app.changeOrderStatus(id, 'Trả hàng');
    },

    rejectReturn: (id) => {
        app.changeOrderStatus(id, 'Đã giao');
        showToast('Đã từ chối yêu cầu trả hàng, đơn chuyển về Đã giao.', 'error');
    },

    // Task logic
    openCreateTaskFromOrder: () => {
        document.getElementById('task-order').value = appState.currentOrderId;
        app.openModal('task-modal');
    },

    saveTask: () => {
        const title = document.getElementById('task-title').value;
        const assignee = document.getElementById('task-assignee').value;
        const deadline = document.getElementById('task-deadline').value;
        
        if(!title || !assignee || !deadline) return alert('Vui lòng điền đủ thông tin bắt buộc');

        const newId = generateId('CV');
        mockData.tasks.push({
            id: newId,
            title: title,
            orderId: document.getElementById('task-order').value,
            assignee: assignee,
            priority: document.getElementById('task-priority').value,
            status: 'Chưa làm',
            deadline: deadline,
            notes: document.getElementById('task-desc').value
        });

        app.closeModal('task-modal');
        document.getElementById('task-form').reset();
        showToast('Giao việc thành công!');
        
        if(!document.getElementById('view-tasks').classList.contains('hidden')) renderTasks();
        if(!document.getElementById('view-order-detail').classList.contains('hidden')) renderOrderDetail(appState.currentOrderId);
        renderDashboard();
    },

    openUpdateTaskStatusModal: () => {
        const t = mockData.tasks.find(x => x.id === appState.currentTaskId);
        document.getElementById('update-task-status-select').value = t.status === 'Quá hạn' ? 'Chưa làm' : t.status;
        document.getElementById('update-task-note').value = '';
        app.openModal('update-task-status-modal');
    },

    saveTaskStatus: () => {
        const t = mockData.tasks.find(x => x.id === appState.currentTaskId);
        const newStatus = document.getElementById('update-task-status-select').value;
        const note = document.getElementById('update-task-note').value;
        
        t.status = newStatus;
        if(note) {
            t.notes = (t.notes ? t.notes + '\n' : '') + `[${appState.today}] ` + note;
        }

        app.closeModal('update-task-status-modal');
        showToast('Cập nhật tiến độ thành công!');
        renderTaskDetail(t.id);
        renderDashboard();
    },

    renderReports: () => {
        renderReports();
    },

    // Kanban Logic
    toggleTaskView: (mode) => {
        appState.taskViewMode = mode;
        document.getElementById('btn-view-kanban').classList.remove('active');
        document.getElementById('btn-view-table').classList.remove('active');
        document.getElementById(`btn-view-${mode}`).classList.add('active');
        
        if (mode === 'kanban') {
            document.getElementById('tasks-kanban').classList.remove('hidden');
            document.getElementById('tasks-table-view').classList.add('hidden');
        } else {
            document.getElementById('tasks-kanban').classList.add('hidden');
            document.getElementById('tasks-table-view').classList.remove('hidden');
        }
        renderTasks();
    },
    
    drag: (ev) => {
        ev.dataTransfer.setData("taskId", ev.currentTarget.getAttribute('data-id'));
        ev.currentTarget.classList.add('dragging');
    },

    allowDrop: (ev) => {
        ev.preventDefault();
        const columnCards = ev.currentTarget;
        if (columnCards) columnCards.classList.add('drag-over');
    },
    
    dragLeave: (ev) => {
        const columnCards = ev.currentTarget;
        if (columnCards) columnCards.classList.remove('drag-over');
    },

    drop: (ev) => {
        ev.preventDefault();
        const columnCards = ev.currentTarget;
        if (columnCards) columnCards.classList.remove('drag-over');
        
        const taskId = ev.dataTransfer.getData("taskId");
        const kanbanCol = ev.currentTarget.closest('.kanban-column');
        if(!kanbanCol) return;
        const newStatus = kanbanCol.getAttribute('data-status');
        
        const task = mockData.tasks.find(t => t.id === taskId);
        if(task && task.status !== newStatus) {
            task.status = newStatus;
            showToast('Cập nhật trạng thái thành ' + newStatus);
            renderTasks();
            renderDashboard();
        }
    },

    // POS Logic
    renderPOSProducts: () => renderPOSProducts(),
    renderPOSCart: () => {
        let html = '';
        let total = 0;
        
        // Render Tabs
        let tabsHtml = '';
        appState.posCarts.forEach((cart, index) => {
            tabsHtml += `
                <button class="pos-tab-btn ${index === appState.activePosCartIndex ? 'active' : ''}" onclick="app.switchPOSCartTab(${index})">
                    Đơn ${index + 1}
                    ${appState.posCarts.length > 1 ? `<span style="margin-left:5px; color:var(--danger);" onclick="event.stopPropagation(); app.removePOSCartTab(${index})"><i class="fa-solid fa-xmark"></i></span>` : ''}
                </button>
            `;
        });
        tabsHtml += `<button class="pos-tab-btn" onclick="app.addPOSCartTab()"><i class="fa-solid fa-plus"></i></button>`;
        const tabsContainer = document.getElementById('pos-cart-tabs');
        if (tabsContainer) tabsContainer.innerHTML = tabsHtml;

        const currentCart = appState.posCarts[appState.activePosCartIndex] || [];

        if (currentCart.length === 0) {
            html = `<div style="padding: 20px; text-align: center; color: var(--text-secondary);">Giỏ hàng đang trống</div>`;
        } else {
            currentCart.forEach(item => {
                const sub = item.price * item.qty;
                total += sub;
                html += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${formatMoney(item.price)}</div>
                        </div>
                        <div class="cart-item-qty">
                            <button onclick="app.changePOSCartQty('${item.id}', -1)">-</button>
                            <span style="font-weight:600; min-width:20px; text-align:center;">${item.qty}</span>
                            <button onclick="app.changePOSCartQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                `;
            });
        }

        const itemsContainer = document.getElementById('pos-cart-items');
        if (itemsContainer) itemsContainer.innerHTML = html;

        const subtotalEl = document.getElementById('pos-subtotal');
        const totalEl = document.getElementById('pos-total');
        if (subtotalEl) subtotalEl.textContent = formatMoney(total);
        if (totalEl) totalEl.textContent = formatMoney(total);
        
        // Fill customer select if not filled
        const custSelect = document.getElementById('pos-customer');
        if (custSelect && custSelect.options.length <= 1) { 
            custSelect.innerHTML = '<option value="Khách lẻ">Khách lẻ (Không lưu thông tin)</option>' + 
                mockData.customers.filter(c => !c.isDeleted).map(c => `<option value="${c.id}">${c.name} - ${c.phone}</option>`).join('');
        }
    },
    
    addToPOSCart: (productId) => {
        const p = mockData.products.find(x => x.id === productId);
        if (!p) return;

        const currentCart = appState.posCarts[appState.activePosCartIndex];
        const existingItem = currentCart.find(x => x.id === productId);
        if (existingItem) {
            if (existingItem.qty + 1 > p.stock) return showToast('Không đủ tồn kho', 'error');
            existingItem.qty += 1;
        } else {
            if (p.stock < 1) return showToast('Sản phẩm đã hết hàng', 'error');
            currentCart.push({
                id: p.id,
                name: p.name,
                price: p.price,
                qty: 1
            });
        }
        app.renderPOSCart();
    },

    changePOSCartQty: (productId, delta) => {
        const currentCart = appState.posCarts[appState.activePosCartIndex];
        const index = currentCart.findIndex(x => x.id === productId);
        if (index > -1) {
            const item = currentCart[index];
            const p = mockData.products.find(x => x.id === productId);
            
            const newQty = item.qty + delta;
            if (newQty <= 0) {
                currentCart.splice(index, 1);
            } else if (p && newQty > p.stock) {
                return showToast('Không đủ tồn kho', 'error');
            } else {
                item.qty = newQty;
            }
            app.renderPOSCart();
        }
    },
    
    addPOSCartTab: () => {
        appState.posCarts.push([]);
        appState.activePosCartIndex = appState.posCarts.length - 1;
        app.renderPOSCart();
    },
    
    switchPOSCartTab: (index) => {
        appState.activePosCartIndex = index;
        app.renderPOSCart();
    },
    
    removePOSCartTab: (index) => {
        if(appState.posCarts.length > 1) {
            appState.posCarts.splice(index, 1);
            if(appState.activePosCartIndex >= appState.posCarts.length) {
                appState.activePosCartIndex = appState.posCarts.length - 1;
            } else if(appState.activePosCartIndex > index) {
                appState.activePosCartIndex--;
            }
            app.renderPOSCart();
        }
    },
    
    openPOSPaymentModal: () => {
        const currentCart = appState.posCarts[appState.activePosCartIndex];
        if (currentCart.length === 0) return showToast('Giỏ hàng trống!', 'error');
        
        let total = 0;
        currentCart.forEach(item => total += item.price * item.qty);
        
        document.getElementById('pos-payment-total').textContent = formatMoney(total);
        app.selectPOSPaymentMethod('cash'); // default
        app.openModal('pos-payment-modal');
    },
    
    selectPOSPaymentMethod: (method) => {
        document.getElementById('pos-method-cash').classList.remove('active');
        document.getElementById('pos-method-transfer').classList.remove('active');
        document.getElementById(`pos-method-${method}`).classList.add('active');
        
        const qrBox = document.getElementById('pos-qr-box');
        if(method === 'transfer') {
            qrBox.style.display = 'block';
        } else {
            qrBox.style.display = 'none';
        }
    },
    
    printInvoice: (orderId, cartItems) => {
        const order = mockData.orders.find(o => o.id === orderId);
        if(!order) return;
        
        const customerName = getCustomerName(order.customerId);
        
        let itemsHtml = '';
        if (cartItems && cartItems.length > 0) {
            cartItems.forEach(item => {
                itemsHtml += `
                    <tr>
                        <td style="padding-right: 10px;">${item.name}</td>
                        <td style="text-align: center;">${item.qty}</td>
                        <td style="text-align: right;">${formatMoney(item.price)}</td>
                        <td style="text-align: right; font-weight: bold;">${formatMoney(item.price * item.qty)}</td>
                    </tr>
                `;
            });
        } else {
            // Fallback for non-POS orders
            itemsHtml = `<tr><td colspan="4">${order.service}</td></tr>`;
        }
        
        const printWindow = window.open('', '_blank', 'width=500,height=700');
        printWindow.document.write(`
            <html>
            <head>
                <title>In Hóa Đơn</title>
                <style>
                    body { font-family: 'Courier New', Courier, monospace; margin: 0; padding: 20px; font-size: 13px; color: #000; }
                    .header { text-align: center; margin-bottom: 15px; }
                    .header h2 { margin: 0 0 5px 0; padding: 0; font-size: 20px; letter-spacing: 1px; }
                    .divider { border-bottom: 1px dashed #000; margin: 15px 0; }
                    .info-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                    th, td { text-align: left; padding: 8px 0; vertical-align: top; border-bottom: 1px dotted #ccc; }
                    th { font-weight: bold; border-bottom: 1px dashed #000; border-top: 1px dashed #000; }
                    .total-box { font-weight: bold; font-size: 16px; margin-top: 15px; text-align: right; }
                    .footer { text-align: center; margin-top: 30px; font-size: 12px; font-style: italic; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>AUDIO CRM</h2>
                    <div>123 Đường Demo, Phường 1, Quận 1, TP.HCM</div>
                    <div>ĐT: 0123.456.789 - Web: audiocrm.vn</div>
                </div>
                <div class="divider"></div>
                <div class="info-row">
                    <span><strong>Số HĐ:</strong> ${order.id}</span>
                    <span><strong>Ngày:</strong> ${order.date}</span>
                </div>
                <div class="info-row">
                    <span><strong>Khách hàng:</strong> ${customerName}</span>
                </div>
                <div class="info-row">
                    <span><strong>Thu ngân:</strong> ${order.saler}</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="width: 45%;">Tên SP</th>
                            <th style="text-align: center; width: 10%;">SL</th>
                            <th style="text-align: right; width: 20%;">Đơn giá</th>
                            <th style="text-align: right; width: 25%;">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
                <div class="total-box">TỔNG CỘNG: ${formatMoney(order.value)}</div>
                <div class="divider"></div>
                <div class="footer">
                    <div>Cảm ơn quý khách và hẹn gặp lại!</div>
                    <div style="margin-top: 5px;">(Hàng mua rồi miễn đổi trả sau 7 ngày)</div>
                </div>
                <script>
                    window.onload = function() { window.print(); window.close(); }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    },

    checkoutPOS: () => {
        const currentCart = appState.posCarts[appState.activePosCartIndex];
        if (currentCart.length === 0) return showToast('Giỏ hàng trống!', 'error');

        let totalValue = 0;
        let serviceNames = [];
        
        // Trừ tồn kho và tính tổng
        currentCart.forEach(item => {
            totalValue += item.price * item.qty;
            serviceNames.push(`${item.name} (x${item.qty})`);
            
            const p = mockData.products.find(x => x.id === item.id);
            if (p) {
                p.stock -= item.qty;
            }
        });

        const custSelect = document.getElementById('pos-customer');
        const customerId = custSelect ? custSelect.value : 'Khách lẻ';
        
        // Tạo đơn hàng mới
        const newOrderId = generateId('DH');
        mockData.orders.push({
            id: newOrderId,
            customerId: customerId === 'Khách lẻ' ? '' : customerId,
            service: serviceNames.join(', '),
            value: totalValue,
            saler: 'Nguyễn Admin', // Giả lập user hiện tại
            paymentStatus: 'Đã thanh toán',
            status: 'Đã giao', // POS bán trực tiếp nên đã giao
            date: appState.today
        });

        // Xóa giỏ hàng hiện tại và lấy clone để in
        const cartClone = [...appState.posCarts[appState.activePosCartIndex]];
        appState.posCarts[appState.activePosCartIndex] = [];
        app.renderPOSProducts();
        app.renderPOSCart();
        
        // Play success sound
        const audio = document.getElementById('pos-success-audio');
        if(audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio play failed: ', e));
        }

        app.closeModal('pos-payment-modal');
        showToast('Thanh toán thành công! Hóa đơn: ' + newOrderId);
        saveData(); // Lưu lại
        renderDashboard();
        
        // Mở in hóa đơn
        app.printInvoice(newOrderId, cartClone);
    },

    // --- USER METHODS ---
    viewUserDetail: (id) => viewUserDetail(id),
    openEditUserModal: (id) => openEditUserModal(id),
    saveUserEdit: () => saveUserEdit(),
    softDeleteUser: (id) => softDeleteUser(id)
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Chỉ khởi tạo giao diện Admin nếu có thành phần của Admin (ví dụ header-title)
    if (!document.getElementById('header-title')) {
        return; // Dừng lại nếu đang ở trang Landing hoặc Mobile App
    }
    
    // Bind Sidebar Nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = e.currentTarget.getAttribute('data-view');
            app.navigate(viewId);
        });
    });

    // Populate Select Options from Mock Data
    const populateSelects = () => {
        const custSelect = document.getElementById('order-customer');
        custSelect.innerHTML = mockData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

        const salerSelect = document.getElementById('order-saler');
        const salers = mockData.users.filter(u => u.role === 'Bán hàng' || u.role === 'Quản lý');
        salerSelect.innerHTML = salers.map(u => `<option value="${u.name}">${u.name}</option>`).join('');

        const assigneeSelect = document.getElementById('task-assignee');
        const filterAssigneeSelect = document.getElementById('filter-task-assignee');
        const assignees = mockData.users.filter(u => u.role !== 'Bán hàng');
        assigneeSelect.innerHTML = assignees.map(u => `<option value="${u.name}">${u.name}</option>`).join('');
        filterAssigneeSelect.innerHTML += assignees.map(u => `<option value="${u.name}">${u.name}</option>`).join('');

        const taskOrderSelect = document.getElementById('task-order');
        taskOrderSelect.innerHTML += mockData.orders.map(o => `<option value="${o.id}">${o.id} - ${getCustomerName(o.customerId)}</option>`).join('');
        
        const prodSelect = document.getElementById('order-service');
        if (prodSelect) prodSelect.innerHTML = '<option value="">-- Chọn sản phẩm --</option>' + mockData.products.map(p => `<option value="${p.name}" data-price="${p.price}">${p.name}</option>`).join('');
    };

    populateSelects();

    // Bind event listeners for search & filters
    document.getElementById('search-customer').addEventListener('input', renderCustomers);
    document.getElementById('filter-customer-source').addEventListener('change', renderCustomers);
    
    if (document.getElementById('search-product')) {
        document.getElementById('search-product').addEventListener('input', renderProducts);
    }
    
    document.getElementById('search-order').addEventListener('input', renderOrders);
    document.getElementById('filter-order-status').addEventListener('change', renderOrders);
    
    document.getElementById('filter-task-status').addEventListener('change', renderTasks);
    document.getElementById('filter-task-assignee').addEventListener('change', renderTasks);

    // Bind file input preview logic
    document.getElementById('return-images').addEventListener('change', function(e) {
        const preview = document.getElementById('return-image-preview');
        preview.innerHTML = '';
        const files = Array.from(e.target.files);
        if (files.length > 5) {
            alert('Chỉ được chọn tối đa 5 ảnh!');
            this.value = ''; // reset
            return;
        }
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                preview.appendChild(img);
            }
        });
    });

    // Bind Kanban events
    document.querySelectorAll('.kanban-cards').forEach(container => {
        container.addEventListener('dragover', app.allowDrop);
        container.addEventListener('dragleave', app.dragLeave);
        container.addEventListener('drop', app.drop);
    });

    // Initial Render
    renderDashboard();
});
