// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Reduce file watcher issues by excluding large directories
config.watchFolders = [__dirname];

// Exclude node_modules and other large directories from watching
config.watcher = {
  ...config.watcher,
  additionalExts: ['cjs', 'mjs'],
  healthCheck: {
    enabled: true,
  },
};

// Use file system watcher with polling as fallback (helps with EMFILE)
if (process.platform === 'darwin') {
  config.watcher = {
    ...config.watcher,
    usePolling: false, // Will fallback to polling if watch fails
  };
}

module.exports = config;

