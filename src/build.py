import os
d=os.path.dirname(os.path.abspath(__file__))
head=open(d+"/head.html",encoding="utf8").read()
data=open(d+"/data.js",encoding="utf8").read()
app=open(d+"/app.js",encoding="utf8").read()
out=('<!doctype html><html lang="en"><head><meta charset="utf-8">'
     '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
     +head+'\n</head><body>\n<div id="app"></div>\n<script>\n'+data+app+'\n</script>\n</body></html>')
open(d+"/../index.html","w",encoding="utf8").write(out)
print(len(out)//1024,"KB")
