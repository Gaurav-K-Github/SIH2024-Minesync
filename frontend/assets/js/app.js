// App initialization
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  initializeSidebar();
  initializeMobileNav();
});

// Authentication check
function checkAuth() {
  const user = JSON.parse(localStorage.getItem('minesafe_user') || 'null');
  const publicPages = ['index.html', '/'];
  const currentPath = window.location.pathname;
  
  if (!user && !publicPages.some(page => currentPath.includes(page) || currentPath === '/')) {
    window.location.href = '../index.html';
  }
}

// Logout function
function logout() {
  localStorage.removeItem('minesafe_user');
  window.location.href = '../index.html';
}

// Get current user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('minesafe_user') || 'null');
}

// Sidebar toggle
function initializeSidebar() {
  const toggleBtn = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
}

// Mobile navigation
function initializeMobileNav() {
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const currentPath = window.location.pathname;
  
  mobileNavItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('active');
    }
  });
}

// Toast notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-left: 4px solid ${type === 'success' ? 'var(--safety-green)' : type === 'error' ? 'var(--danger-red)' : 'var(--warning-yellow)'};
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Format date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Chart.js default config
if (typeof Chart !== 'undefined') {
  Chart.defaults.color = '#9ca3af';
  Chart.defaults.borderColor = '#2d3748';
  Chart.defaults.backgroundColor = 'rgba(249, 115, 22, 0.1)';
}
