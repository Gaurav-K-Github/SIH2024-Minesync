# Contributing to MineSafe Pro

First off, thank you for considering contributing to MineSafe Pro! It's people like you that make MineSafe Pro such a great tool for mine safety and productivity management.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to kashvns705@gmail.com.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots** if possible
- **Include browser version and operating system**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Follow the JavaScript and CSS styleguides
- Include screenshots and animated GIFs in your pull request whenever possible
- End all files with a newline
- Avoid platform-dependent code

## Development Process

### Setup Development Environment

1. Fork the repo
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/SIH2024-MineSafePro.git
cd SIH2024-MineSafePro
```

3. Create a branch:
```bash
git checkout -b feature/your-feature-name
```

### Coding Standards

#### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Use meaningful class names
- Add comments for complex sections

#### CSS
- Use CSS variables for colors and common values
- Follow BEM naming convention where applicable
- Keep selectors specific but not overly complex
- Group related properties together
- Add comments for complex styles

#### JavaScript
- Use ES6+ features
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused
- Handle errors appropriately
- Use const and let, avoid var

### File Organization

```
frontend/
├── assets/
│   ├── css/       # Stylesheets
│   ├── js/        # JavaScript files
│   └── icons/     # PWA icons
└── pages/         # HTML pages
```

### Testing

Before submitting a pull request:

1. **Test on multiple browsers**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

2. **Test responsive design**
   - Mobile (320px - 768px)
   - Tablet (768px - 1024px)
   - Desktop (1024px+)

3. **Test PWA functionality**
   - Service worker registration
   - Offline functionality
   - Add to home screen

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Examples:
```
Add emergency alert feature to dashboard
Fix chart responsiveness on mobile devices
Update README with installation instructions
```

### Documentation

- Update README.md with any new features
- Update CHANGELOG.md with your changes
- Add inline comments for complex logic
- Update JSDoc comments if modifying functions

## Project Structure Guidelines

### Adding New Pages

1. Create HTML file in `frontend/pages/`
2. Include standard navigation (sidebar + mobile nav)
3. Use consistent styling from `styles.css`
4. Add page link to all other pages' navigation
5. Update README.md with page description

### Adding New Features

1. Discuss in GitHub Issues first
2. Create feature branch
3. Implement feature
4. Test thoroughly
5. Update documentation
6. Submit pull request

### Modifying Existing Features

1. Maintain backward compatibility when possible
2. Update all affected pages
3. Test on all screen sizes
4. Update documentation

## Style Guides

### CSS Class Naming

- Use lowercase with hyphens: `.stat-card`, `.feature-item`
- Be descriptive: `.emergency-btn` not `.btn1`
- Avoid abbreviations unless common: `.nav-item` is OK
- Use state classes: `.active`, `.disabled`, `.loading`

### JavaScript Naming

- camelCase for variables and functions: `getUserData()`
- PascalCase for classes: `ChartManager`
- UPPER_CASE for constants: `MAX_RETRY_ATTEMPTS`
- Descriptive names: `isAuthenticated` not `auth`

### File Naming

- Lowercase with hyphens: `incident-report.html`
- Descriptive names: `emergency-protocols.js`
- Match content purpose: `chart-config.js`

## Review Process

1. Maintainers review pull requests regularly
2. Feedback is provided for improvements
3. Once approved, changes are merged
4. Contributor is credited in CHANGELOG.md

## Community

- Be respectful and constructive
- Help others when possible
- Share knowledge and resources
- Celebrate successes together

## Questions?

Feel free to ask questions by:
- Opening a GitHub Issue
- Emailing kashvns705@gmail.com
- Connecting on LinkedIn

## Recognition

Contributors will be recognized in:
- CHANGELOG.md
- README.md (for significant contributions)
- GitHub Contributors page

Thank you for contributing to MineSafe Pro! 🚀
