# QR Code Scanning Troubleshooting Guide

## Common Issues When QR Code Doesn't Work

### 1. **Install Expo Go App**

Make sure you have Expo Go installed on your device:

- **iOS**: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779)
- **Android**: Download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### 2. **Same WiFi Network**

Both your computer and phone **MUST be on the same WiFi network**.

**To check:**
- Look at the QR code URL in terminal: `exp://192.168.x.x:8081`
- Your phone's WiFi IP should be on the same network (192.168.x.x)

**If not on same network:**
- Connect both devices to the same WiFi
- Restart Expo: `npm start` or press `r` in the Expo terminal

### 3. **QR Code Scanning Method**

**For iOS:**
- Use the **Camera app** (built-in iOS camera)
- Point at the QR code in terminal
- Tap the notification that appears

**For Android:**
- Use the **Expo Go app** directly
- Tap "Scan QR Code" button in Expo Go
- Point at the QR code

### 4. **Alternative: Manual URL Entry**

If QR code scanning doesn't work:

1. Look at the terminal output for the URL (e.g., `exp://192.168.1.189:8081`)
2. In Expo Go app:
   - Tap "Enter URL manually"
   - Type the URL exactly as shown
   - Tap "Connect"

### 5. **Tunnel Mode (Works Across Networks)**

If you're on different networks, use tunnel mode:

```bash
npx expo start --tunnel
```

Note: This requires an Expo account and is slower, but works from anywhere.

### 6. **Check Firewall**

Your computer's firewall might be blocking the connection:

**macOS:**
1. System Preferences → Security & Privacy → Firewall
2. Make sure it allows Node/Expo connections

**Windows:**
1. Windows Security → Firewall & network protection
2. Allow Node.js through firewall

### 7. **Clear Cache and Restart**

```bash
# Stop the current Expo server (Ctrl+C)
# Then run:
npx expo start -c
```

The `-c` flag clears the cache.

### 8. **Check for Errors**

Look at the terminal for any error messages. Common issues:
- Metro bundler errors
- Port already in use
- Network connectivity issues

### 9. **Try LAN Mode Explicitly**

```bash
npx expo start --lan
```

This forces LAN mode and might help with network detection.

### 10. **Use USB Connection (Android)**

For Android, you can use USB:

1. Enable USB debugging on your phone
2. Connect phone via USB
3. Run: `npm run android` or press `a` in Expo terminal

---

## Quick Checklist

- [ ] Expo Go app installed on phone
- [ ] Phone and computer on same WiFi network
- [ ] Firewall allows Node.js/Expo connections
- [ ] No errors in terminal
- [ ] Using correct scanning method (Camera app for iOS, Expo Go for Android)
- [ ] Tried clearing cache (`npx expo start -c`)
- [ ] Tried tunnel mode if networks are different

---

## Still Not Working?

1. **Check the exact error message** in Expo Go app
2. **Check terminal logs** for any errors
3. **Try tunnel mode**: `npx expo start --tunnel`
4. **Try on a different device** to isolate the issue
5. **Try web version**: Press `w` in Expo terminal to open in browser (limited functionality)


