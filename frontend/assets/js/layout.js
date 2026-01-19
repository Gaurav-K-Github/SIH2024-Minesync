// Shared layout components
const LAYOUT = {
  sidebar: `
    <div class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo"><i class="fas fa-hard-hat"></i></div>
        <div>
          <h3 style="font-weight: 700; font-size: 1.125rem;">MineSafe Pro</h3>
          <p style="font-size: 0.75rem; color: var(--text-muted);">Safety First</p>
        </div>
      </div>
      <nav style="flex: 1;">
        <a href="/pages/dashboard.html" class="nav-item"><i class="fas fa-th-large"></i><span>Dashboard</span></a>
        <a href="/pages/safety.html" class="nav-item"><i class="fas fa-shield-alt"></i><span>Safety Monitoring</span></a>
        <a href="/pages/incidents.html" class="nav-item"><i class="fas fa-exclamation-circle"></i><span>Incidents</span></a>
        <a href="/pages/productivity.html" class="nav-item"><i class="fas fa-chart-line"></i><span>Productivity</span></a>
        <a href="/pages/equipment.html" class="nav-item"><i class="fas fa-cogs"></i><span>Equipment</span></a>
        <a href="/pages/reports.html" class="nav-item"><i class="fas fa-file-alt"></i><span>Reports</span></a>
        <a href="/pages/profile.html" class="nav-item"><i class="fas fa-user-circle"></i><span>Profile</span></a>
      </nav>
      <div style="padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <a href="#" onclick="logout()" class="nav-item"><i class="fas fa-sign-out-alt"></i><span>Logout</span></a>
      </div>
    </div>
  `,
  topbar: `
    <div class="topbar">
      <div class="search-bar"><i class="fas fa-search"></i><input type="text" placeholder="Search..."></div>
      <div class="topbar-actions">
        <button class="icon-btn"><i class="fas fa-bell"></i><span class="notification-badge">3</span></button>
        <button class="icon-btn" style="background: var(--danger-red); border-color: var(--danger-red); color: white;"><i class="fas fa-exclamation-triangle"></i></button>
        <div class="user-menu">
          <div class="user-avatar">JD</div>
          <div style="text-align: left;">
            <div style="font-size: 0.875rem; font-weight: 600;">John Doe</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Admin</div>
          </div>
          <i class="fas fa-chevron-down" style="font-size: 0.75rem; color: var(--text-muted);"></i>
        </div>
      </div>
    </div>
  `,
  mobileNav: `
    <div class="mobile-nav">
      <div class="mobile-nav-grid">
        <a href="/pages/dashboard.html" class="mobile-nav-item"><i class="fas fa-th-large"></i><span>Dashboard</span></a>
        <a href="/pages/safety.html" class="mobile-nav-item"><i class="fas fa-shield-alt"></i><span>Safety</span></a>
        <a href="/pages/incidents.html" class="mobile-nav-item"><i class="fas fa-file-medical"></i><span>Report</span></a>
        <a href="/pages/productivity.html" class="mobile-nav-item"><i class="fas fa-chart-line"></i><span>Production</span></a>
        <a href="/pages/profile.html" class="mobile-nav-item"><i class="fas fa-user-circle"></i><span>Profile</span></a>
      </div>
    </div>
  `,
  styles: `
    body { display: grid; grid-template-columns: 260px 1fr; grid-template-rows: auto 1fr auto; min-height: 100vh; }
    .sidebar { grid-column: 1; grid-row: 1 / -1; background: var(--bg-secondary); border-right: 1px solid var(--border-color); padding: 1.5rem; display: flex; flex-direction: column; position: fixed; width: 260px; height: 100vh; overflow-y: auto; }
    .sidebar-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); }
    .sidebar-logo { width: 48px; height: 48px; background: linear-gradient(135deg, var(--accent-orange), var(--warning-yellow)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
    .nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; border-radius: 8px; color: var(--text-secondary); text-decoration: none; margin-bottom: 0.5rem; transition: all 0.2s; }
    .nav-item:hover { background: var(--bg-hover); color: var(--text-primary); }
    .nav-item.active { background: rgba(249, 115, 22, 0.1); color: var(--accent-orange); font-weight: 600; }
    .nav-item i { width: 20px; text-align: center; }
    .topbar { grid-column: 2; grid-row: 1; background: var(--bg-card); border-bottom: 1px solid var(--border-color); padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; margin-left: 260px; }
    .search-bar { flex: 1; max-width: 400px; position: relative; }
    .search-bar input { width: 100%; padding: 0.625rem 1rem 0.625rem 2.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); }
    .search-bar i { position: absolute; left: 0.875rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
    .topbar-actions { display: flex; align-items: center; gap: 1rem; }
    .icon-btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; position: relative; }
    .icon-btn:hover { background: var(--bg-hover); }
    .notification-badge { position: absolute; top: -4px; right: -4px; width: 18px; height: 18px; background: var(--danger-red); border-radius: 50%; font-size: 0.625rem; display: flex; align-items: center; justify-content: center; border: 2px solid var(--bg-card); }
    .user-menu { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; }
    .user-avatar { width: 36px; height: 36px; background: linear-gradient(135deg, var(--accent-orange), var(--warning-yellow)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; }
    .main-content { grid-column: 2; grid-row: 2; padding: 2rem; margin-left: 260px; overflow-y: auto; }
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }
    .mobile-nav { display: none; position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg-card); border-top: 1px solid var(--border-color); padding: 0.5rem; z-index: 1000; }
    .mobile-nav-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; }
    .mobile-nav-item { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; padding: 0.5rem; border-radius: 8px; color: var(--text-secondary); text-decoration: none; font-size: 0.75rem; }
    .mobile-nav-item.active { color: var(--accent-orange); background: rgba(249, 115, 22, 0.1); }
    @media (max-width: 1024px) { body { grid-template-columns: 1fr; } .sidebar { transform: translateX(-100%); transition: transform 0.3s; } .sidebar.open { transform: translateX(0); } .topbar, .main-content { margin-left: 0; } .mobile-nav { display: block; } .main-content { padding-bottom: 5rem; } }
    @media (max-width: 640px) { .main-content { padding: 1rem; } .topbar { padding: 1rem; } .search-bar { display: none; } }
  `
};
