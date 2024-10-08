#!/bin/bash

# Frontend: Install dependencies and build the React app
cd /var/www/shopping-app/shopping-frontend
npm install
npm run build

# Backend: Install dependencies for the NodeJS server
cd /var/www/shopping-app/shopping-backend
npm install
