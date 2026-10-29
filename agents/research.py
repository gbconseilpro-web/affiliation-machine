import os,json,time,urllib.request
BASE='/home/ubuntu/affiliation-machine/agents'
os.makedirs(BASE,exist_ok=True)
AWIN_ID='1957421'
KW=['logiciel facturation','devis gratuit','micro entrepreneur','facture en ligne']
results={'ts':int(time.time()),'keywords':KW,'awin_id':AWIN_ID}
out=BASE+'/research_output.json'
open(out,'w').write(json.dumps(results,indent=2,ensure_ascii=False))
print('RESEARCH OK:'+out)
