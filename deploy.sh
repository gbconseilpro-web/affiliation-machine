#!/bin/bash
set -e
cd /home/ubuntu/affiliation-machine
git fetch origin
git reset --hard origin/main
npm run build
cp -r agents .next/standalone/agents
pm2 restart affiliation
echo "DEPLOY OK"
