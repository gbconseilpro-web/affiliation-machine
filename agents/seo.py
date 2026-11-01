import os,json,time
BASE='/home/ubuntu/affiliation-machine/agents'
def load_content():
    f=BASE+'/content_output.json'
    if os.path.exists(f):
        return json.loads(open(f).read())
    return []
def gen_meta(article):
    kw=article.get('kw','')
    title=article.get('title','')
    return {'slug':article.get('slug',''),'meta_title':title+' | FacturationPro','meta_desc':'Decouvrez '+kw+'. Guide complet 2025.','og_title':title,'canonical':'https://facturationpro.fr/'+article.get('slug','')}
def gen_sitemap(metas):
    urls=''.join(['<url><loc>'+m['canonical']+'</loc></url>' for m in metas])
    xml='<?xml version=\'1.0\'?><urlset xmlns=\'http://www.sitemaps.org/schemas/sitemap/0.9\'>'+urls+'</urlset>'
    out=BASE+'/sitemap.xml'
    open(out,'w').write(xml)
    return out
def main():
    articles=load_content()
    metas=[gen_meta(a) for a in articles]
    sm=gen_sitemap(metas)
    out=BASE+'/seo_output.json'
    open(out,'w').write(json.dumps(metas,indent=2,ensure_ascii=False))
    print('SEO OK:'+out+' sitemap:'+sm)
main()
def main():
    articles=load_content()
    metas=[gen_meta(a) for a in articles]
    sm=gen_sitemap(metas)
    out=BASE+'/seo_output.json'
    open(out,'w').write(json.dumps(metas,indent=2,ensure_ascii=False))
    print('SEO OK:'+out+' sitemap:'+sm)
main()
