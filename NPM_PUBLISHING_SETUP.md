# NPM Publishing Setup Summary

## ✅ What's Configured

### 1. Package Configuration (`package.json`)

- ✅ **Package name**: `@portima/component-lib`
- ✅ **Publish config**: Public access to npm registry
- ✅ **Files included**: `dist/`, `README.md`, `LICENSE`
- ✅ **Exports**: ES modules, CommonJS, and TypeScript definitions
- ✅ **Pre-publish hook**: Automatically builds before publishing

### 2. GitHub Actions Workflows

#### `.github/workflows/publish.yml`

- **Triggers**: Version tags (`v*.*.*`) or manual dispatch
- **Actions**:
  1. Installs dependencies
  2. Generates MUI themes
  3. Builds the library
  4. Publishes to npm (on tag push)

#### `.github/workflows/build.yml`

- **Triggers**: Push to main/develop, PRs
- **Actions**:
  1. Builds and tests the library
  2. Verifies build output

### 3. Build Scripts

- `npm run build` - Full build (themes + TypeScript + Vite)
- `npm run build:mui-themes` - Generate MUI themes from design tokens
- `npm run publish:dry-run` - Test publish without actually publishing
- `npm run version:bump` - Helper script to bump version

### 4. Documentation

- `PUBLISHING.md` - Complete publishing guide
- `PUBLISHING_CHECKLIST.md` - Pre-publish checklist
- `README.md` - Updated with publishing instructions

## 🚀 Quick Start: Publishing

### Automated Publishing (Recommended)

1. **Bump version**:

   ```bash
   npm version patch  # or minor, major
   ```

2. **Push tag**:

   ```bash
   git push origin main --tags
   ```

3. **GitHub Actions automatically publishes** to npm!

### Manual Publishing

1. **Build**:

   ```bash
   npm run build
   ```

2. **Publish**:
   ```bash
   npm publish
   ```

## 📋 Required Setup

### 1. npm Account & Token

1. Create npm account (if you don't have one)
2. Create access token at https://www.npmjs.com/settings/YOUR_USERNAME/tokens
3. Add token as GitHub secret:
   - Repository → Settings → Secrets and variables → Actions
   - Add secret: `NPM_TOKEN` with your token value

### 2. npm Login (for manual publishing)

```bash
npm login
# Enter your npm credentials
```

### 3. Verify Package Access

Ensure you have publish permissions for `@portima` scope:

```bash
npm access ls-packages
```

## 📦 What Gets Published

The published package includes:

```
@portima/component-lib/
├── dist/
│   ├── index.js      # ES module
│   ├── index.cjs     # CommonJS
│   └── index.d.ts    # TypeScript definitions
├── README.md
└── LICENSE
```

**Excluded** (via `.npmignore`):

- Source files (`src/`)
- Build scripts (`scripts/`)
- Config files
- Storybook files
- Development documentation

## 🔍 Verification

After publishing, verify:

1. **Check npm registry**:

   ```bash
   npm view @portima/component-lib
   ```

2. **Test installation**:

   ```bash
   npm install @portima/component-lib@latest
   ```

3. **Import and use**:
   ```typescript
   import { ProfileCard, AppThemeProvider } from "@portima/component-lib";
   ```

## 🎯 Publishing Workflow

```
Developer
    ↓
1. Update code
    ↓
2. npm version patch|minor|major
    ↓
3. git push origin main --tags
    ↓
GitHub Actions
    ↓
4. Checkout code
    ↓
5. Install dependencies
    ↓
6. Generate MUI themes
    ↓
7. Build library
    ↓
8. Publish to npm
    ↓
npm Registry
    ↓
9. Package available at @portima/component-lib
```

## 📝 Version Management

Follow [Semantic Versioning](https://semver.org/):

- **PATCH** (0.0.1 → 0.0.2): Bug fixes
- **MINOR** (0.0.1 → 0.1.0): New features (backward compatible)
- **MAJOR** (0.0.1 → 1.0.0): Breaking changes

## ⚠️ Important Notes

1. **Design Tokens Dependency**: The library depends on `@jens_erven/design-tokens`. Ensure it's published and accessible before publishing this library.

2. **Peer Dependencies**: Consumers must install peer dependencies (React, MUI, etc.) separately.

3. **Build Requirements**: The build process requires:

   - Node.js >= 18.0.0
   - npm >= 9.0.0
   - Access to `@jens_erven/design-tokens` package

4. **Generated Files**: `src/themes/index.ts` is generated during build and should not be committed to git.

## 🐛 Troubleshooting

### "You do not have permission to publish"

- Verify npm login: `npm whoami`
- Check publish permissions for `@portima` scope
- Verify `publishConfig.access` is `"public"` in package.json

### "Package already exists"

- Version already published, increment version
- Check published versions: `npm view @portima/component-lib versions`

### GitHub Actions fails

- Verify `NPM_TOKEN` secret is configured
- Check token has publish permissions
- Review workflow logs in GitHub Actions tab

## 📚 Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
