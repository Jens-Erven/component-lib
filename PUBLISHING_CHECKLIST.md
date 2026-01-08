# Publishing Checklist

Use this checklist before publishing a new version of `@portima/fe-lib`.

## Pre-Publishing

- [ ] **All tests pass**
  ```bash
  npm run build
  ```

- [ ] **MUI themes generated successfully**
  ```bash
  npm run build:mui-themes
  # Verify src/themes/index.ts is generated
  ```

- [ ] **Build output verified**
  ```bash
  ls dist/
  # Should contain: index.js, index.cjs, index.d.ts
  ```

- [ ] **TypeScript compilation successful**
  ```bash
  npx tsc --noEmit
  ```

- [ ] **Dry run publish successful**
  ```bash
  npm run publish:dry-run
  ```

- [ ] **Version number updated**
  - Check `package.json` version field
  - Follow semantic versioning (patch/minor/major)

- [ ] **CHANGELOG updated** (if maintained)
  - Document new features, bug fixes, breaking changes

- [ ] **README.md is up to date**
  - Installation instructions
  - Usage examples
  - API documentation

- [ ] **Dependencies are up to date**
  ```bash
  npm outdated
  npm audit
  ```

- [ ] **Peer dependencies are correct**
  - Verify versions in `package.json` `peerDependencies`

## Publishing

- [ ] **Version bumped**
  ```bash
  npm version patch|minor|major
  # Or use: npm run version:bump patch|minor|major
  ```

- [ ] **Changes committed**
  ```bash
  git add .
  git commit -m "chore: bump version to X.Y.Z"
  ```

- [ ] **Tag created**
  ```bash
  git tag vX.Y.Z
  ```

- [ ] **Tag pushed** (triggers automated publish)
  ```bash
  git push origin main --tags
  ```

## Post-Publishing

- [ ] **Verify package on npm**
  ```bash
  npm view @portima/fe-lib
  ```

- [ ] **Test installation in a new project**
  ```bash
  npm install @portima/fe-lib@latest
  ```

- [ ] **Verify exports work**
  ```typescript
  import { ProfileCard, AppThemeProvider } from '@portima/fe-lib';
  ```

- [ ] **GitHub Actions workflow completed successfully**
  - Check Actions tab in GitHub repository

- [ ] **Update documentation** (if needed)
  - Update any external documentation
  - Update consuming applications

## Troubleshooting

If publishing fails:

1. Check GitHub Actions logs
2. Verify `NPM_TOKEN` secret is configured
3. Ensure npm account has publish permissions
4. Check for version conflicts
5. Verify build completes successfully locally

## Version Guidelines

- **PATCH** (0.0.1 → 0.0.2): Bug fixes, no API changes
- **MINOR** (0.0.1 → 0.1.0): New features, backward compatible
- **MAJOR** (0.0.1 → 1.0.0): Breaking changes

