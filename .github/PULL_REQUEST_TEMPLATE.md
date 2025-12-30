# Pull Request

## 📝 Description

<!-- Provide a clear and concise description of what this PR does -->

**What does this PR do?**


**Why is this change needed?**


## 🎯 Type of Change

<!-- Check all that apply -->

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💅 UI/UX improvement (visual or interaction enhancement)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] 🔗 Backend integration (smart contract connection)
- [ ] 📝 Documentation update
- [ ] 🧪 Test addition or update
- [ ] 🎨 Style/formatting changes
- [ ] ⚡ Performance improvement
- [ ] 🔒 Security improvement
- [ ] 🔧 Configuration change
- [ ] 🚀 Deployment related

## 🔗 Related Issues

<!-- Link to related issues. Use "Closes #123" to auto-close issues when PR is merged -->

Closes #
Related to #

## 🧪 Testing

### How Has This Been Tested?

<!-- Describe how you tested your changes -->

- [ ] Manual testing in browser
- [ ] Tested on mobile devices / responsive design
- [ ] Tested with different browsers (Chrome, Firefox, Safari, etc.)
- [ ] Tested wallet connection (if applicable)
- [ ] Tested contract interactions (if applicable)
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated

### Test Configuration

**Browser(s):**
<!-- e.g., Chrome 120, Firefox 121, Safari 17 -->

**Device(s):**
<!-- e.g., Desktop (Windows 11), iPhone 14, iPad Pro -->

**Screen sizes tested:**
<!-- e.g., Mobile (375px), Tablet (768px), Desktop (1920px) -->

## 📸 Screenshots / Videos

<!-- 
If your PR includes UI changes, please provide screenshots or videos.
Delete this section if not applicable.
-->

### Before


### After


## ✅ Checklist

### Code Quality

- [ ] Code compiles without errors (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors/warnings (`npm run lint`)
- [ ] No console errors or warnings in browser
- [ ] Code follows the project's style guidelines
- [ ] Variable and function names are clear and descriptive
- [ ] Complex logic has comments explaining the "why"

### Frontend Specific

- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Images are optimized (using Next.js Image component)
- [ ] Loading states are implemented where appropriate
- [ ] Error states are handled gracefully
- [ ] Animations are smooth and not janky (60fps target)
- [ ] Accessibility considerations (ARIA labels, keyboard navigation, etc.)
- [ ] Dark mode support (if applicable)

### Web3 Integration (if applicable)

- [ ] Wallet connection flow tested
- [ ] Contract read operations work correctly
- [ ] Contract write operations work correctly
- [ ] Transaction loading states implemented
- [ ] Transaction error handling implemented
- [ ] Success feedback provided to user (toast, modal, etc.)
- [ ] Gas estimation displayed (if applicable)
- [ ] Contract addresses are correct (mainnet/testnet)

### Testing

- [ ] Existing tests still pass
- [ ] New tests added for new functionality
- [ ] Edge cases are covered
- [ ] Error scenarios are tested

### Documentation

- [ ] README updated (if needed)
- [ ] CONTRIBUTING.md updated (if workflow changes)
- [ ] Component props documented (JSDoc comments)
- [ ] Complex functions have explanatory comments
- [ ] Environment variables documented (if new ones added)

### Git Best Practices

- [ ] Commit messages follow Conventional Commits format
- [ ] Branch is up to date with main
- [ ] No merge conflicts
- [ ] Self-review completed (reviewed own code)
- [ ] Removed debugging code (console.logs, commented code, etc.)

## 🚧 Breaking Changes

<!-- Does this PR introduce breaking changes? -->

- [ ] Yes, this PR introduces breaking changes
- [ ] No breaking changes

**If yes, describe the breaking changes and migration path:**


## 📝 Additional Notes

<!-- Any additional information that reviewers should know -->

### Dependencies Added/Updated

<!-- List any new dependencies or updated versions -->


### Configuration Changes

<!-- List any changes to config files (next.config.ts, tailwind.config.ts, etc.) -->


### Known Issues / Follow-up Tasks

<!-- List any known issues or tasks that will be addressed in future PRs -->


## 📚 References

<!-- Links to relevant documentation, issues, designs, etc. -->

- Design: 
- Documentation: 
- Related PR: 

---

## 🎉 Reviewer Notes

<!-- 
@maintainers - Please review the following carefully:
- [ ] UI/UX matches design requirements
- [ ] Code quality and maintainability
- [ ] Performance implications
- [ ] Security considerations (if Web3 integration)
- [ ] Documentation completeness
-->

---

**Ready for review!** 🚀

<!-- Thank you for contributing! -->
