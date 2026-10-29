import os,json,time,urllib.request,urllib.parse
BASE='/home/ubuntu/affiliation-machine/agents'
def load_research():
    f=BASE+'/research_output.json'
    if os.path.exists(f):
        return json.loads(open(f).read())
    return {'keywords':['logiciel facturation']}
def gen_article(kw):
    slug=kw.replace(' ','-')
    title='Guide '+kw+' 2025'
    body='<h1>'+title+'</h1><p>Contenu SEO optimise pour '+kw+'.</p>'
    return {'slug':slug,'title':title,'body':body,'kw':kw,'ts':int(time.time())}
def write_articles(articles):
    out=BASE+'/content_output.json'
    open(out,'w').write(json.dumps(articles,indent=2,ensure_ascii=False))
    return out
def main():
    data=load_research()
    kws=data.get('keywords',['logiciel facturation'])
    articles=[gen_article(k) for k in kws]
    out=write_articles(articles)
    print('CONTENT OK:'+out+' ('+str(len(articles))+' articles)')
main()
