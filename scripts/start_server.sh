#!/bin/bash

# Start the backend server in the background
cd /var/www/shopping-app/shopping-backend
npm start > /dev/null 2>&1 &

# Serve the React frontend (build folder) in the background
cd /var/www/shopping-app/shopping-frontend/build
npx serve -s > /dev/null 2>&1 &
