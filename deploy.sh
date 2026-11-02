#!/bin/bash
set -e

APP_DIR="/home/ubuntu/affiliation-machine"
PM2_NAME="affiliation"

echo "==> Pull latest from main..."
cd "$APP_DIR"
git pull origin main

echo "==> Install dependencies..."
npm ci --omit=dev

echo "==> Build Next.js..."
npm run build

echo "==> Copy static files (standalone mode)..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo "==> Restart PM2..."
pm2 restart "$PM2_NAME" || pm2 start .next/standalone/server.js --name "$PM2_NAME" --env production

echo "==> Save PM2 state..."
pm2 save

echo "==> Done. Site live at https://facturationpro.com"
