# Git Commands to Push to Repository

Follow these steps to push your changes to GitHub:

## Step 1: Check Status
```bash
git status
```
This shows what files have been modified and what's untracked.

## Step 2: Add All Changes
```bash
git add .
```
Or add specific files:
```bash
git add README.md
git add CONTRIBUTING.md
git add CHANGELOG.md
git add .gitignore
git add frontend/
```

## Step 3: Commit Changes
```bash
git commit -m "feat: Complete MineSafe Pro v2.1 with modern UI and documentation

- Add comprehensive README with features, installation, and usage
- Create CONTRIBUTING.md with development guidelines
- Add CHANGELOG.md with complete version history
- Implement modern timeline page with glassmorphism effects
- Enhance table structures with card wrappers
- Add mobile-responsive design patterns
- Remove backup files and update .gitignore
- Set Worker role as default
- Add 4th feature on login page with 2x2 grid
- Link timeline page to footer
- Update all documentation"
```

## Step 4: Push to GitHub
```bash
git push origin main
```

If this is your first push or if you encounter issues:
```bash
git push -u origin main
```

## Alternative: Interactive Approach

### 1. Stage files selectively
```bash
git add README.md
git add CONTRIBUTING.md
git add CHANGELOG.md
git add .gitignore
```

### 2. Check what will be committed
```bash
git status
```

### 3. Commit with detailed message
```bash
git commit -m "docs: Update project documentation and guidelines"
```

### 4. Add frontend files
```bash
git add frontend/
git commit -m "feat: Implement modern UI improvements and PWA features"
```

### 5. Push all commits
```bash
git push origin main
```

## If Repository Doesn't Exist Yet

### 1. Initialize git (if not already done)
```bash
git init
```

### 2. Add remote repository
```bash
git remote add origin https://github.com/Gaurav-K-Github/SIH2024-MineSafePro.git
```

### 3. Verify remote
```bash
git remote -v
```

### 4. Create initial commit
```bash
git add .
git commit -m "Initial commit: MineSafe Pro v2.1"
```

### 5. Push to GitHub
```bash
git push -u origin main
```

## Common Git Commands

### View commit history
```bash
git log --oneline
```

### View changes before committing
```bash
git diff
```

### Unstage files
```bash
git restore --staged <file>
```

### Discard local changes
```bash
git restore <file>
```

### View remote repositories
```bash
git remote -v
```

### Pull latest changes
```bash
git pull origin main
```

## Branch Management (Optional)

### Create a new branch
```bash
git checkout -b feature/new-feature
```

### Switch branches
```bash
git checkout main
```

### Merge branch
```bash
git merge feature/new-feature
```

### Delete branch
```bash
git branch -d feature/new-feature
```

## Tagging Releases

### Create a tag for v2.1
```bash
git tag -a v2.1.0 -m "MineSafe Pro v2.1 - Modern UI with Timeline"
```

### Push tags to GitHub
```bash
git push origin --tags
```

## Quick Reference

```bash
# Full workflow in one go
git add .
git commit -m "your commit message"
git push origin main

# Check status anytime
git status

# View what changed
git diff
```

## Important Notes

1. **Always check `git status` before committing**
2. **Write clear, descriptive commit messages**
3. **Test your code before pushing**
4. **Pull latest changes before starting new work**
5. **Use branches for experimental features**

## Troubleshooting

### If push is rejected
```bash
git pull origin main --rebase
git push origin main
```

### If you need to force push (use carefully!)
```bash
git push origin main --force
```

### If you committed to wrong branch
```bash
git reset --soft HEAD~1  # Undo last commit, keep changes
git checkout correct-branch
git add .
git commit -m "your message"
```

---

**Ready to push?** Run these commands in order:

```bash
git add .
git commit -m "feat: Complete MineSafe Pro v2.1 with modern UI and comprehensive documentation"
git push origin main
```

Good luck! 🚀
