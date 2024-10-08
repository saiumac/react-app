#!/bin/bash

# Start the backend server (Node.js)
cd /var/www/shopping-app/shopping-backend
npm start &

# Serve the React frontend (either use npx serve or set up nginx)
cd /var/www/shopping-app/shopping-frontend/build
npx serve -s &
