#!/bin/bash
# PythonAnywhere Deployment Update Script
# Run this from ~/portfolio to update the site after pushing to GitHub

set -e  # Exit on error

echo "🔄 Pulling latest changes..."
cd ~/portfolio
git pull origin main

echo "📦 Updating backend dependencies..."
cd backend
source ~/.virtualenvs/portfolio-env/bin/activate
pip install -r requirements.txt

echo "🔧 Building frontend..."
cd ~/portfolio
source ~/.nvm/nvm.sh
nvm use
cd frontend
npm ci
npm run build

echo "📁 Copying assets to Flask static folder..."
cp -r dist/* ../backend/app/static/

echo "✅ Done! Now reload your web app from the PythonAnywhere Web tab."
