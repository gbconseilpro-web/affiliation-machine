#!/bin/bash
set -e
APP_DIR="/home/ubuntu/affiliation-machine"
PM2_NAME="affiliation-machine"
SITE_URL="https://facturationpro.com"
echo "=============================="
echo "==> DEPLOY START: $(date)"
echo "=============================="
cd "$APP_DIR"
echo "==> [1/6] Repertoire : $APP_DIR"
echo "==> [2/6] Git pull..."
git pull origin main
echo "==> [3/6] rm -rf node_modules .next && npm ci (toutes les dependances)..."
rm -rf node_modules .next && npm ci
echo "==> [4/6] npm run build..."
npm run build
if [ ! -f ".next/standalone/server.js" ]; then
  echo "ERREUR : .next/standalone/server.js absent apres le build !"
  echo "Le deploiement est annule. PM2 conserve l ancienne version."
  exit 1
fi
echo "==>       .next/standalone/server.js OK"
echo "==> [5/6] Copie des fichiers statiques..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
echo "==> [6/6] Redemarrage PM2..."
pm2 restart "$PM2_NAME" || pm2 start .next/standalone/server.js --name "$PM2_NAME" --env production
pm2 save
echo "=============================="
echo "==> DEPLOY OK: $(date)"
echo "==> Site : $SITE_URL"
echo "=============================="
