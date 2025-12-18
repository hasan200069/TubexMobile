#!/bin/bash

# Increase file descriptor limit to prevent EMFILE errors
# macOS default is 256, we need much higher for Metro
ulimit -n 65536

# Verify the limit was set
CURRENT_LIMIT=$(ulimit -n)
echo "File descriptor limit set to: $CURRENT_LIMIT"

# If limit is still low, try to source shell config that sets it
if [ "$CURRENT_LIMIT" -lt 4096 ]; then
  echo "Warning: File descriptor limit is still low. Installing Watchman is recommended:"
  echo "  brew install watchman"
  echo ""
fi

# Start Expo - use exec to keep ulimit in the same process
exec npm start

