# Changelog

All notable changes to MineSafe Pro will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-01-20

### Added
- Modern development timeline page with glassmorphism effects
- Version badges for each timeline milestone
- Animated timeline markers with hover effects
- Stat cards with shine animations
- Timeline accessible by clicking MineSafe logo in sidebar
- Enhanced hover effects on timeline content cards
- Gradient borders and shadows on timeline elements
- Equipment Monitoring feature on login page (4th feature in 2x2 grid)
- Footer link to timeline page on index.html

### Changed
- Converted features list on login page to 2x2 grid layout
- Simplified features to show only icons and text (removed card backgrounds)
- Set Worker role as default selection on login page
- Updated timeline to span October 2024 - January 2026
- Made timeline design more compact with reduced spacing
- Timeline line now centered and stops before last item
- Header subtitle updated to show version history (v1.0 to v2.1)

### Fixed
- Timeline line alignment to center with markers
- Footer pointer events to enable timeline link clicks
- Removed extra timeline line extending past last item

## [2.0.0] - 2024-12-20

### Added
- Card wrapper structure for tables across all pages
- Card headers with icons for better organization
- Proper table formatting with thead and tbody
- Enhanced badge system for status indicators

### Changed
- Redesigned equipment maintenance table with card structure
- Improved incident table with proper formatting
- Standardized table styling across equipment and incident pages
- Enhanced chart sizing for better responsiveness

### Fixed
- Chart containers now have fixed height (380px)
- Chart canvas wrapped in positioned div (300px height)
- Charts no longer elongate infinitely on resize

## [1.8.0] - 2024-12-15

### Added
- Hover-to-expand sidebar functionality across all pages
- Sidebar expands from 70px to 260px on hover
- Floating emergency evacuation button on dashboard
- Emergency protocol modal dialog
- Emergency button icon (exclamation-triangle)
- Smooth animations for sidebar expansion

### Changed
- Enhanced navigation UX with hover effects
- Improved sidebar transition timing (0.3s ease)
- Updated sidebar header to support expand/collapse states

### Fixed
- Sidebar navigation consistency across all pages
- Icon and text visibility during sidebar transitions

## [1.5.0] - 2024-11-25

### Added
- Progressive Web App (PWA) implementation
- Service worker (sw.js) for offline support
- Web app manifest (manifest.json)
- App icons for different sizes
- Install prompts for desktop and mobile
- Mobile-responsive navigation bar
- Bottom navigation for mobile devices (<=1024px)

### Changed
- Converted application to installable PWA
- Added responsive mobile-first navigation
- Optimized for offline functionality

### Features
- Install to home screen capability
- Offline page access
- App-like experience on mobile devices

## [1.2.0] - 2024-11-10

### Added
- Chart.js v4.4.0 integration
- Interactive production charts on dashboard
- Incident trend visualization
- Productivity analytics with shift-based charts
- Daily, weekly, and monthly target tracking
- Equipment monitoring charts

### Changed
- Enhanced dashboard with data visualization
- Added analytics to productivity page
- Improved data presentation across all pages

### Features
- Real-time chart updates
- Responsive chart sizing
- Interactive tooltips and legends

## [1.0.0] - 2024-10-15

### Added
- Initial release of MineSafe Pro
- Login page with role selection (Admin, Supervisor, Worker)
- Dashboard with KPI cards
- Safety monitoring page with zone status
- Incident reporting and tracking page
- Productivity analytics page
- Equipment monitoring page
- Reports generation page
- User profile page
- Responsive design system
- Dark industrial theme
- CSS variable-based theming

### Features
- Role-based authentication UI
- Multi-page application structure
- Responsive grid layout
- Modern UI components (cards, buttons, badges)
- Icon integration (Font Awesome 6.4.0)
- Inter font family typography

## [Unreleased]

### Planned for v3.0 (Q1 2026)
- Backend API integration
- Node.js/Express server
- MongoDB database
- REST API endpoints
- WebSocket for real-time data
- JWT authentication
- Role-based access control
- User registration and management
- Real-time sensor data integration

### Future Enhancements
- IoT sensor connectivity
- Machine learning for predictive maintenance
- Multi-language support (Hindi, Bengali, Telugu)
- Geospatial visualization
- Voice command integration
- QR code scanning
- Push notifications
- Background sync
- Health monitoring integration

---

## Version Format

- **Major.Minor.Patch** (e.g., 2.1.0)
- **Major**: Breaking changes or significant feature additions
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes and minor improvements

## Categories

- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements

---

For detailed commit history, see [GitHub Commits](https://github.com/Gaurav-K-Github/SIH2024-Minesync/commits/)
