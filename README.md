# MineSafe Pro – Smart India Hackathon 2024

[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](https://gaurav-k-github.github.io/SIH2024-MineSafePro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA: Enabled](https://img.shields.io/badge/PWA-Enabled-blue.svg)](https://web.dev/progressive-web-apps/)
[![Version](https://img.shields.io/badge/version-2.1-orange.svg)](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4.0-ff6384.svg)](https://www.chartjs.org/)

**Problem Statement**: *An app and web-based software for productivity and safety management of coal mines*  
**Project Type**: Progressive Web Application (PWA)  
**Repository**: [MineSafe Pro GitHub](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro)  
**Live Demo**: [https://gaurav-k-github.github.io/SIH2024-MineSafePro/](https://gaurav-k-github.github.io/SIH2024-MineSafePro/)  
**Current Version**: v2.1.0

---

## 🔍 Problem Overview

Coal mining operations in India face critical challenges:
- ⚠️ Manual reporting and delayed hazard detection
- 📋 Poor workforce coordination and productivity tracking
- 🚨 Lack of real-time safety monitoring
- 📊 Insufficient data analytics for decision-making

**MineSafe Pro** addresses these challenges with a unified digital platform that enhances **productivity**, **safety**, and **real-time management** in coal mines.

---

## 💡 Our Solution

MineSafe Pro is a **modern Progressive Web Application** designed for comprehensive mine safety and productivity management:

- 🌐 **Responsive Dashboard** - Works seamlessly on desktop, tablet, and mobile
- 📱 **PWA Technology** - Install like a native app with offline support
- 🎨 **Modern UI/UX** - Dark industrial theme with intuitive navigation
- 📊 **Real-time Analytics** - Interactive charts and data visualization with Chart.js
- 🔔 **Emergency Protocols** - Floating button with quick access to safety procedures
- 📈 **Productivity Tracking** - Shift-based performance monitoring

---

## ✨ Key Features

### 🎯 Core Modules

#### 1. **Dashboard & Analytics**
- Real-time KPI monitoring (Production, Safety, Incidents)
- Interactive charts for production and incident trends
- Quick stats overview with visual indicators
- Recent activity feed
- Emergency evacuation button

#### 2. **Safety Monitoring**
- Zone-based safety status tracking
- Environmental sensor monitoring (Gas, Temperature, Humidity)
- Real-time hazard alerts
- Emergency evacuation protocols
- Color-coded status indicators

#### 3. **Incident Reporting & Tracking**
- Comprehensive incident reporting form
- Severity-based categorization (Critical, High, Medium, Low)
- Status tracking (Open, Investigating, Resolved)
- Photo upload capability
- Historical incident database with filtering

#### 4. **Productivity Analytics**
- Shift-wise production tracking
- Daily, weekly, and monthly targets
- Performance visualization
- Trend analysis with interactive charts
- Target vs achievement comparison

#### 5. **Equipment Monitoring**
- Real-time equipment status tracking
- Maintenance scheduling and reminders
- Service history tracking
- Status indicators (Operational, Under Maintenance, Needs Repair)
- Equipment cards with detailed information

#### 6. **Reports Generation**
- Customizable report generation
- Multiple report types (Production, Safety, Equipment, Incidents)
- Date range selection
- Export functionality
- Report templates

#### 7. **User Profile Management**
- Role-based access (Admin, Supervisor, Worker)
- Personal information management
- Settings and preferences
- Activity logs
- Account security

#### 8. **Development Timeline**
- Interactive project evolution tracking
- Version history with badges
- Feature milestones
- Future roadmap
- Glassmorphism design

### 🚀 Technical Highlights

- **Progressive Web App (PWA)** - Installable, offline-capable, app-like experience
- **Responsive Design** - Optimized for all screen sizes (320px - 2560px+)
- **Hover-to-Expand Sidebar** - Smooth navigation expanding from 70px to 260px
- **Mobile Navigation** - Dedicated bottom navigation for devices ≤1024px
- **Chart.js v4.4.0** - Beautiful, responsive data visualizations
- **Modern CSS** - CSS variables, Grid, Flexbox, animations
- **Glassmorphism Effects** - Contemporary design with backdrop filters
- **Smooth Animations** - Cubic-bezier transitions (0.4s)
- **Accessibility** - Semantic HTML, proper ARIA labels
- **Performance** - Optimized assets, lazy loading

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox layouts
  - CSS Variables for theming
  - Animations & Transitions
  - Media Queries for responsiveness
  - Backdrop filters
- **JavaScript (ES6+)** - Vanilla JavaScript for:
  - DOM manipulation
  - Event handling
  - PWA functionality
  - Chart initialization
  - Form validation
- **Chart.js v4.4.0** - Data visualization library
- **Font Awesome 6.4.0** - Comprehensive icon library
- **PWA APIs** - Service Worker, Web App Manifest

### Design System
- **Dark Theme** - Industrial design with orange (#f97316) accents
- **CSS Variables** - Consistent color system
- **Responsive Grid** - Mobile-first approach
- **Typography** - Inter font family (400, 500, 600, 700)
- **Color Palette**:
  - Background: `#0f0f0f`, `#1a1a1a`, `#1f1f1f`
  - Accent: Orange `#f97316`, Yellow `#fbbf24`
  - Status: Green `#10b981`, Red `#ef4444`

### Tools & Workflow
- **Git & GitHub** - Version control and collaboration
- **VS Code** - Development environment
- **Chrome DevTools** - Debugging and testing
- **Lighthouse** - Performance auditing

---

## 📁 Project Structure

```
SIH2024-MineSafePro/
├── frontend/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css          # Main stylesheet (200+ lines)
│   │   ├── icons/                  # PWA icons (192x192, 512x512)
│   │   │   ├── icon-192.svg
│   │   │   ├── icon-512.svg
│   │   │   └── Indexbg.png        # Login background
│   │   └── js/
│   │       ├── app.js             # Main JavaScript
│   │       └── layout.js          # Layout utilities
│   ├── pages/
│   │   ├── dashboard.html         # Main dashboard with charts
│   │   ├── safety.html            # Safety monitoring
│   │   ├── incidents.html         # Incident reporting
│   │   ├── productivity.html      # Production tracking
│   │   ├── equipment.html         # Equipment monitoring
│   │   ├── reports.html           # Report generation
│   │   ├── profile.html           # User profile
│   │   └── timeline.html          # Development timeline
│   ├── index.html                 # Login page with 2x2 features
│   ├── manifest.json              # PWA manifest
│   └── sw.js                      # Service worker
├── LICENSE                        # MIT License
├── README.md                      # This file
├── CONTRIBUTING.md                # Contribution guidelines
├── CHANGELOG.md                   # Version history
├── QUICKSTART.md                  # Quick start guide
├── GIT_PUSH_GUIDE.md             # Git workflow reference
├── DEPLOYMENT_SUMMARY.md          # Deployment checklist
└── .gitignore                     # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript
- (Optional) Live Server extension for VS Code

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Gaurav-K-Github/SIH2024-MineSafePro.git
cd SIH2024-MineSafePro
```

2. **Navigate to frontend directory**
```bash
cd frontend
```

3. **Open in browser**
   - **Option 1**: Using VS Code Live Server
     - Right-click on `index.html`
     - Select "Open with Live Server"
   
   - **Option 2**: Direct file access
     - Double-click `index.html` to open in default browser
     - Navigate to different pages using the sidebar

4. **Login Credentials** (Demo)
   - **Admin**: admin@minesafe.com / admin123
   - **Supervisor**: supervisor@minesafe.com / super123
   - **Worker**: worker@minesafe.com / worker123 (default selection)

### 📲 Install as PWA

**On Desktop (Chrome/Edge):**
1. Open the application in your browser
2. Look for the install icon (⊕) in the address bar
3. Click "Install MineSafe Pro"
4. Access from your desktop/start menu

**On Mobile (Android/iOS):**
1. Open the application in mobile browser
2. Tap browser menu (⋮ or share icon)
3. Select "Add to Home Screen"
4. Tap "Add" to install
5. Launch from home screen like a native app

---

## 📖 Usage Guide

### Navigation
- **Sidebar**: Hover to expand on desktop (70px → 260px)
- **Logo Click**: Opens development timeline page
- **Mobile**: Bottom navigation bar appears on screens ≤1024px
- **Emergency Button**: Floating button on dashboard for quick protocols

### Pages Overview

1. **Login** - Role selection (Admin/Supervisor/Worker) with 4 key features
2. **Dashboard** - Overview of all metrics, charts, and quick access
3. **Safety Monitoring** - Real-time zone status and environmental data
4. **Incidents** - Report and track safety incidents with severity levels
5. **Productivity** - Monitor and analyze production data with charts
6. **Equipment** - Track equipment status and maintenance schedules
7. **Reports** - Generate custom reports with filters
8. **Profile** - Manage user settings and information
9. **Timeline** - View project development history (Oct 2024 - Present)

### Keyboard Shortcuts
- `Ctrl/Cmd + /` - Focus search bar
- `Esc` - Close modals
- `Tab` - Navigate form fields

---

## 🎨 Design System

### Color Palette
```css
--bg-primary: #0f0f0f        /* Main background */
--bg-secondary: #1a1a1a      /* Secondary background */
--bg-card: #1f1f1f           /* Card backgrounds */
--accent-orange: #f97316     /* Primary accent */
--warning-yellow: #fbbf24    /* Warning/highlights */
--safety-green: #10b981      /* Success/safe status */
--danger-red: #ef4444        /* Error/danger status */
```

### Typography Scale
- **Headings**: 2rem, 1.5rem, 1.25rem, 1.125rem
- **Body**: 1rem (16px base)
- **Small**: 0.875rem, 0.75rem
- **Line Height**: 1.5 - 1.6 for readability

### Component Library
- **Cards** with hover effects and shadows
- **Badges** for status indicators (success, warning, danger)
- **Buttons** with gradient backgrounds
- **Tables** with proper formatting and hover states
- **Charts** with responsive behavior
- **Forms** with validation styling
- **Modals** with backdrop blur

---

## 📈 Version History

### [v2.1.0] - 2026-01-20 (Current)
- ✨ Modern timeline page with glassmorphism effects
- 🎨 UI polish and header simplification
- 📊 Enhanced table and card structures
- 🔗 Timeline accessible via logo click
- 🎯 2x2 feature grid on login page
- 👔 Worker role as default selection
- 🔗 Footer link to timeline

### [v2.0.0] - 2024-12-20
- 📋 Redesigned tables with card structure
- 🏷️ Improved badge system
- 📈 Fixed chart responsiveness
- 📊 Chart containers with fixed heights

### [v1.8.0] - 2024-12-15
- 🎯 Hover-to-expand sidebar
- 🚨 Emergency evacuation button
- 🎨 Enhanced navigation UX
- ✨ Smooth sidebar animations

### [v1.5.0] - 2024-11-25
- 📱 PWA implementation
- 📴 Offline support
- 📲 Mobile navigation
- 🔔 Service worker

### [v1.2.0] - 2024-11-10
- 📊 Chart.js integration
- 📄 Multi-page implementation
- 📈 Analytics dashboards
- 🎨 Data visualization

### [v1.0.0] - 2024-10-15
- 🎉 Initial release
- 🏗️ Core architecture
- 🎨 Design system
- 📱 Responsive layout

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

---

## 🔮 Future Roadmap

### v3.0 (Q1 2026) - Backend Integration
- 🔙 **Backend Development**
  - Node.js/Express server
  - MongoDB database
  - REST API endpoints
  - WebSocket for real-time data
  - JWT authentication
  - Role-based access control (RBAC)
  - Password encryption with bcrypt

### Future Enhancements
- 🤖 **IoT Integration**
  - Real-time sensor data
  - Environmental monitoring
  - Equipment telemetry
- 🧠 **AI/ML Features**
  - Predictive maintenance
  - Anomaly detection
  - Risk assessment
- 🌍 **Localization**
  - Multi-language support (Hindi, Bengali, Telugu)
  - Regional compliance
- 🗺️ **Advanced Features**
  - Geospatial visualization
  - Voice commands
  - QR code scanning
  - Push notifications
  - Background sync
  - Health monitoring wearables

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on:
- Code of conduct
- Development workflow
- Pull request process
- Coding standards (HTML, CSS, JavaScript)
- Testing requirements
- Documentation guidelines

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024-2026 Gaurav Kumar & SIH2024 Team

Permission is hereby granted, free of charge, to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software.
```

---

## 👥 Team & Credits

**Smart India Hackathon 2024**  
**Project Name**: MineSafe Pro  
**Team Lead**: Gaurav Kumar

### Acknowledgments
- Smart India Hackathon 2024 organizers
- Chart.js team for excellent visualization library
- Font Awesome for comprehensive icon set
- Open source community for inspiration

---

## 📬 Contact & Support

### Get in Touch
- **GitHub Issues**: [Report bugs or request features](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro/issues)
- **Email**: kashvns705@gmail.com
- **LinkedIn**: [Gaurav Kumar](https://www.linkedin.com/in/gaurav-kumar/)

### Support
For technical support or questions:
1. Check [QUICKSTART.md](QUICKSTART.md) for quick answers
2. Browse [existing issues](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro/issues)
3. Create a new issue with detailed description
4. Email for collaboration opportunities

---

## 📊 Project Statistics

- **Total Lines of Code**: 5,000+
- **Files**: 31+
- **Pages**: 8 fully functional
- **Charts**: 4 interactive visualizations
- **Components**: 20+ reusable components
- **Development Time**: 4 months (Oct 2024 - Jan 2026)
- **Version**: 2.1.0

---

## 🙏 Show Your Support

If you find this project useful, please consider:
- ⭐ **Starring the repository**
- 🐛 **Reporting bugs** you encounter
- 💡 **Suggesting new features**
- 🔀 **Contributing code**
- 📢 **Sharing with others**

---

<div align="center">

### Built with ❤️ for safer and more productive mining operations

**Smart India Hackathon 2024 | Track: Productivity & Safety Technology**

[🚀 Live Demo](https://gaurav-k-github.github.io/SIH2024-MineSafePro/) • [⭐ Star this repo](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro) • [🐛 Report Bug](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro/issues) • [💡 Request Feature](https://github.com/Gaurav-K-Github/SIH2024-MineSafePro/issues)

**Last Updated**: January 20, 2026 | **Version**: 2.1.0

</div>

