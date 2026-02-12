# EAS Submit Configuration Guide

This guide explains how to configure `eas.json` for submitting apps to the App Store and Google Play Store.

## iOS App Store Submission

### Required Configuration

In your `eas.json`, the `submit.production.ios` section needs at minimum:

```json
{
  "submit": {
    "production": {
      "ios": {
        "ascAppId": "YOUR_APP_STORE_CONNECT_APP_ID"
      }
    }
  }
}
```

### Finding Your App Store Connect App ID

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Select your app
3. Go to "App Information"
4. Find the "Apple ID" - this is your `ascAppId` (it's a numeric ID like "1234567890")

### Optional: Advanced Configuration

For automated submissions without prompts, you can add:

```json
{
  "submit": {
    "production": {
      "ios": {
        "ascAppId": "1234567890",
        "appleId": "[email protected]",
        "appleTeamId": "AB12CD34EF",
        "ascApiKeyPath": "./path/to/AuthKey_XXXXXXXXXX.p8",
        "ascApiKeyId": "XXXXXXXXXX",
        "ascApiKeyIssuerId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    }
  }
}
```

**To set up App Store Connect API Key:**

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Navigate to: Users and Access → Keys → App Store Connect API
3. Click "+" to create a new key
4. Name: "EAS Submit" (or any name)
5. Role: "App Manager" or "Admin"
6. Download the `.p8` file (you can only download once!)
7. Note the Key ID and Issuer ID
8. Save the `.p8` file securely in your project (add to `.gitignore`!)

**Fields explanation:**
- `ascAppId`: Your App Store Connect App ID (required)
- `appleId`: Your Apple ID email (optional, will prompt if not set)
- `appleTeamId`: Your Apple Developer Team ID (optional, auto-detected)
- `ascApiKeyPath`: Path to your `.p8` API key file (for automation)
- `ascApiKeyId`: The Key ID from App Store Connect
- `ascApiKeyIssuerId`: The Issuer ID from App Store Connect

### Using Credentials Manager (Recommended)

Instead of hardcoding credentials, you can use:

```bash
eas credentials
```

This will:
- Store credentials securely
- Prompt for missing information
- Manage certificates and provisioning profiles

## Android Google Play Submission

### Required Configuration

```json
{
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./path/to/api-key.json",
        "track": "internal"
      }
    }
  }
}
```

**Fields:**
- `serviceAccountKeyPath`: Path to your Google Play service account JSON key
- `track`: Submission track - `"internal"`, `"alpha"`, `"beta"`, or `"production"`

### Getting Google Play Service Account Key

1. Go to [Google Play Console](https://play.google.com/console/)
2. Settings → API access
3. Create service account
4. Download JSON key file
5. Save securely in your project (add to `.gitignore`!)

## Simplified Configuration (Using Prompts)

You can also use a minimal configuration and EAS will prompt you:

```json
{
  "submit": {
    "production": {}
  }
}
```

When you run `eas submit`, it will ask for:
- iOS: App Store Connect App ID, Apple ID credentials
- Android: Service account key, package name, track

## Security Best Practices

1. **Never commit credentials to git:**
   ```gitignore
   # Add to .gitignore
   *.p8
   api-key.json
   AuthKey_*.p8
   service-account-key.json
   ```

2. **Use environment variables for CI/CD:**
   ```json
   {
     "submit": {
       "production": {
         "ios": {
           "ascAppId": "${ASC_APP_ID}"
         }
       }
     }
   }
   ```

3. **Use EAS credentials manager for local development:**
   ```bash
   eas credentials
   ```

## Submitting Your App

After configuring `eas.json`:

### iOS:
```bash
eas submit --platform ios --profile production
```

### Android:
```bash
eas submit --platform android --profile production
```

## Troubleshooting

### iOS Submission Issues

- **"ascAppId not found"**: Make sure you've created the app in App Store Connect first
- **Authentication errors**: Run `eas credentials` to set up authentication
- **Team ID issues**: Check your Apple Developer account membership

### Android Submission Issues

- **Service account errors**: Verify the JSON key file path is correct
- **Permission errors**: Ensure service account has correct permissions in Play Console
- **Track not found**: Make sure the track exists in Play Console

## Current Configuration

Your current `eas.json` is set up with:
- iOS: Requires `ascAppId` (you'll need to replace `YOUR_APP_STORE_CONNECT_APP_ID`)
- Android: Requires service account key path

**Next Steps:**
1. Create app in App Store Connect (iOS) or Play Console (Android)
2. Get the App Store Connect App ID (iOS)
3. Create service account and download key (Android)
4. Update `eas.json` with actual values
5. Run `eas submit --platform ios/android --profile production`


