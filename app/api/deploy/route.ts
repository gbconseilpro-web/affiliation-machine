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
      'cd /tmp/affiliation-machine && git pull origin main && npm ci --prefer-offline 2>&1 | tail -5 && npm run build 2>&1 | tail -20',
      { timeout: 300000, maxBuffer: 1024 * 1024 * 10 }
    );
    return NextResponse.json({ ok: true, out: stdout + stderr });
  } catch (err: any) {
    return NextResponse.json({ ok: false, err: err.message, out: err.stdout + err.stderr });
  }
}
