#!/bin/bash
set -e
cd /home/ubuntu/affiliation-machine
echo "=== Pull latest code ==="
git pull origin main
echo "=== Install dependencies ==="
npm install
echo "=== Build Next.js ==="
npm run build
echo "=== Copy static files to standalone ==="
cp -r .next/static .next/standalone/.next/
chmod --recursive a+rx .next/standalone/.next/static/
chmod o+x /home/ubuntu
echo "=== Restart PM2 ==="
pm2 restart affiliation
sudo systemctl reload nginx
echo "=== Deploy done ==="
