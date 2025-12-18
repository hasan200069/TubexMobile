# Fix: EMFILE - Too Many Open Files Error

## ⚠️ IMPORTANT: Install Watchman (Best Solution)

The **recommended and most reliable fix** is to install Watchman. This is Facebook's file watching service that Expo/Metro uses more efficiently:

```bash
brew install watchman
```

If you get permission errors:
```bash
sudo chown -R $(whoami) /opt/homebrew/Cellar
brew install watchman
```

After installing, **restart your terminal** and try `npm start` again.

---

## Temporary Workarounds

If you can't install Watchman immediately, try these:

### Option 1: Use the startup script
```bash
./start.sh
```

### Option 2: Manually set ulimit
```bash
ulimit -n 65536
npm start
```

### Option 3: Add to your shell profile (permanent)

Add this to `~/.zshrc`:
```bash
# Increase file descriptor limit for Metro/Expo
ulimit -n 65536
```

Then reload:
```bash
source ~/.zshrc
```

---

## Why This Happens

Metro bundler watches many files (especially in `node_modules`). macOS has a default file descriptor limit of 256, which gets exceeded. Watchman handles this much more efficiently and is the recommended solution by Expo.

---

## Verify Watchman Installation

Check if Watchman is installed:
```bash
which watchman
watchman --version
```

If installed, you should see a version number. If not, install it using the command above.
