import os,json,subprocess
from datetime import datetime
BASE='/home/ubuntu/affiliation-machine/agents'
def get_pm2_stats():
    try:
        r=subprocess.run(['pm2','jlist'],capture_output=True,text=True)
        procs=json.loads(r.stdout)
        out=[]
        for p in procs:
            out.append({'name':p.get('name'),'status':p.get('pm2_env',{}).get('status')})
        return out
    except:
        return []
def get_nginx_stats():
    try:
        r=subprocess.run(['systemctl','is-active','nginx'],capture_output=True,text=True)
        return {'nginx':r.stdout.strip()}
    except:
        return {'nginx':'unknown'}
def main():
    pm2=get_pm2_stats()
    nginx=get_nginx_stats()
    report={'ts':datetime.now().isoformat(),'pm2':pm2,'nginx':nginx}
    out=BASE+'/analytics_output.json'
    open(out,'w').write(json.dumps(report,indent=2))
    print('ANALYTICS OK:'+out)
main()
