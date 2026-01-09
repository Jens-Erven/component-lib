# Publishing Guide for Component Library

This guide explains how to publish `@jens_erven/component-lib` to npm.

## Prerequisites

1. **npm Account**: You need an npm account with publish permissions for the `@jens_erven` scope
2. **GitHub Secrets**: Configure `NPM_TOKEN` in your GitHub repository settings
3. **Local npm Login**: For manual publishing, you need to be logged in:
   ```bash
   npm login
   ```

## Publishing Methods

### Method 1: Automated Publishing (Recommended)

The package is automatically published when you push a version tag:

1. **Update version in package.json**:

   ```bash
   npm version patch  # 0.0.1 -> 0.0.2
   npm version minor  # 0.0.1 -> 0.1.0
   npm version major  # 0.0.1 -> 1.0.0
   ```

   This automatically:

   - Updates `package.json` version
   - Creates a git commit
   - Creates a git tag

2. **Push the tag**:

   ```bash
   git push origin main --tags
   ```

3. **GitHub Actions will automatically**:
   - Build the library
   - Generate MUI themes
   - Publish to npm

### Method 2: Manual Publishing

1. **Build the library**:

   ```bash
   npm run build
   ```

2. **Verify build output**:

   ```bash
   ls -la dist/
   # Should contain: index.js, index.cjs, index.d.ts
   ```

3. **Publish to npm**:

   ```bash
   npm publish
   ```

   Or for a dry run (test without publishing):

   ```bash
   npm publish --dry-run
   ```

## Version Management

### Semantic Versioning

Follow [Semantic Versioning](https://semver.org/):

- **PATCH** (0.0.1 -> 0.0.2): Bug fixes, no breaking changes
- **MINOR** (0.0.1 -> 0.1.0): New features, backward compatible
- **MAJOR** (0.0.1 -> 1.0.0): Breaking changes

### Version Commands

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new features)
npm version minor

# Major version (breaking changes)
npm version major

# Specific version
npm version 1.2.3
```

## Build Process

Before publishing, the build process:

1. **Generates MUI themes** from `@jens_erven/design-tokens-brio`:

   ```bash
   npm run build:mui-themes
   ```

   Creates: `src/themes/index.ts`

2. **TypeScript compilation**:

   ```bash
   tsc
   ```

   Generates: Type definitions in `dist/`

3. **Vite build**:
   ```bash
   vite build
   ```
   Generates: `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`

## Package Contents

The published package includes (defined in `package.json` `files` field):

- `dist/` - Built library files
- `README.md` - Documentation
- `LICENSE` - License file

Excluded (via `.npmignore`):

- `src/` - Source files
- `node_modules/` - Dependencies
- `.storybook/` - Storybook config
- `scripts/` - Build scripts
- Config files (tsconfig.json, vite.config.ts)

## Verification

After publishing, verify the package:

1. **Check npm registry**:

   ```bash
   npm view @jens_erven/component-lib
   ```

2. **Test installation**:

   ```bash
   npm install @jens_erven/component-lib@latest
   ```

3. **Verify exports**:
   ```typescript
   import { ProfileCard, AppThemeProvider } from "@jens_erven/component-lib";
   ```

## Troubleshooting

### "You do not have permission to publish"

- Ensure you're logged in: `npm login`
- Verify you have publish access to `@jens_erven` scope
- Check `package.json` `publishConfig.access` is set to `"public"`

### "Package already exists"

- Version already published, increment version number
- Use `npm view @jens_erven/component-lib versions` to see published versions

### Build fails

- Ensure `@jens_erven/design-tokens-brio` is installed and accessible
- Run `npm install` to ensure all dependencies are installed
- Check that `npm run build:mui-themes` completes successfully

### GitHub Actions fails

- Verify `NPM_TOKEN` secret is configured in repository settings
- Check that the token has publish permissions
- Ensure the workflow file is in `.github/workflows/publish.yml`

## CI/CD Setup

### GitHub Secrets

Add the following secret in GitHub repository settings:

- **Name**: `NPM_TOKEN`
- **Value**: Your npm access token (create at https://www.npmjs.com/settings/YOUR_USERNAME/tokens)

### Workflow Triggers

The publish workflow triggers on:

- Push of version tags (`v*.*.*`)
- Manual workflow dispatch

The build workflow triggers on:

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

## Best Practices

1. **Always test locally** before publishing:

   ```bash
   npm run build
   npm publish --dry-run
   ```

2. **Update CHANGELOG.md** (if you maintain one) before publishing

3. **Tag releases** in git for easy reference:

   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

4. **Use automated publishing** via GitHub Actions for consistency

5. **Verify peer dependencies** are correctly specified before publishing
