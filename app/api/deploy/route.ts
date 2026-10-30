import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const DEPLOY_TOKEN = 'claude-deploy-2026-secret';

export async function POST(request: NextRequest) {
  const { token } = await request.json();
  if (token !== DEPLOY_TOKEN) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const { stdout, stderr } = await execAsync(
      'export PATH=$PATH:/root/.nvm/versions/node/v20.18.0/bin && cd /tmp/affiliation-machine && git pull origin main && npm ci --prefer-offline 2>&1 | tail -5 && npm run build 2>&1 | tail -20 && (pm2 list | grep -q affiliation && pm2 restart affiliation --update-env || pm2 start /tmp/affiliation-machine/ecosystem.config.js) && pm2 save && echo DEPLOY_DONE',
      { timeout: 360000, maxBuffer: 1024 * 1024 * 10, shell: '/bin/bash' }
    );
    return NextResponse.json({ ok: true, out: stdout + stderr });
  } catch (err: any) {
    return NextResponse.json({ ok: false, err: err.message, out: err.stdout + err.stderr });
  }
}
