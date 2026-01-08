#!/usr/bin/env node

/**
 * Version Bump Script
 * 
 * Helper script to bump version and prepare for publishing.
 * Usage: node scripts/version-bump.js [patch|minor|major]
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const versionType = process.argv[2] || 'patch';

if (!['patch', 'minor', 'major'].includes(versionType)) {
  console.error('❌ Invalid version type. Use: patch, minor, or major');
  process.exit(1);
}

try {
  console.log(`📦 Bumping ${versionType} version...\n`);

  // Read current package.json
  const packagePath = join(rootDir, 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));
  const currentVersion = packageJson.version;

  console.log(`Current version: ${currentVersion}`);

  // Bump version using npm
  execSync(`npm version ${versionType} --no-git-tag-version`, {
    cwd: rootDir,
    stdio: 'inherit',
  });

  // Read new version
  const updatedPackageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));
  const newVersion = updatedPackageJson.version;

  console.log(`\n✅ Version bumped: ${currentVersion} -> ${newVersion}`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Review changes: git diff`);
  console.log(`   2. Commit: git add package.json package-lock.json && git commit -m "chore: bump version to ${newVersion}"`);
  console.log(`   3. Tag: git tag v${newVersion}`);
  console.log(`   4. Push: git push origin main --tags`);
  console.log(`\n🚀 GitHub Actions will automatically publish to npm when you push the tag.`);
} catch (error) {
  console.error('❌ Error bumping version:', error.message);
  process.exit(1);
}

