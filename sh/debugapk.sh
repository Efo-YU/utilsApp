#!/bin/bash

cd ../
npm i
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
./gradlew assembleDebug

# Define the source file path
SOURCE_FILE="app/build/outputs/apk/debug/app-debug.apk"

# Check if the source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: $SOURCE_FILE not found!"
    exit 1
fi

# Get the current timestamp in the format YYYYMMDDHHMM
TIMESTAMP=$(date +%Y%m%d%H%M)

# Define the new file name with the timestamp
NEW_FILE_NAME="${TIMESTAMP}.apk"

# Rename the file
mv "$SOURCE_FILE" "app/build/outputs/apk/debug/$NEW_FILE_NAME"

# Check if the rename was successful
if [ $? -eq 0 ]; then
    echo "Successfully renamed to $NEW_FILE_NAME"
else
    echo "Error: Failed to rename the file."
    exit 1
fi

cd ../sh
