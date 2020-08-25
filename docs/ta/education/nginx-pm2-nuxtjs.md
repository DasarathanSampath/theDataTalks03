---
date: 19 Apr 2020
desc: Nuxt Js  செயலிக்கான PM2 மற்றும் Nginx சேவையக தொகுதி. (ஒற்றை பொது IP ல் இயங்கும் இரண்டு Nuxt Js செயலிகள்)
imgDesc: 'படம் சின்னங்களின் திரை பிடிப்புகள்'
name: 'nginx-pm2-nuxtjs'
noMainImage: True
title: " NuxtJs செயலிகள், Nginx உடன் PM2"
altLang: true
---

இந்த கட்டுரையில் குறிப்பிடப்பட்டுள்ள வடிவமைப்புகள்(Configurations) மற்றும் செயற்பாடுகள்(settings) Ubuntu இயக்கதளத்தில்(Operating system) Node.js வழங்கியுடன்(Server) சோதிக்கப்பட்டவை. 
Nginx மறுதலை பதிலியாக(reverse proxy) பயன்படுத்தப்படுகிறது மற்றும் PM2 உற்பத்தி செயல்முறை நிர்வாகியாக(production process manager) பயன்படுத்தப்படுகிறது. 

**முன்நிபந்தனைகள்**  
சரியான பதிப்பில் (version) Node.js, Nginx & PM2 ஐ நிறுவவும் (Install).  
இரண்டு NuxtJs செயலியை (apps) (example1 & example2) நிறுவவும்.  
மற்றும் இரண்டு செயற்களங்களுடன் (Domain) (`example1.com` &` example2.com`) ஒரு பொது IPயும் (xxx.xx.xxx.xx) (IP - Internet Protocol - 
இணைய நெறிமுறை) தேவைப்படுகின்றன. 

## Nginx சேவையக தொகுப்பு தொகுதிகள் (server blocks)

**இரண்டு சேவையக தொகுதி கோப்புகளை (files) உருவாக்கவும்**

```linux
# எந்த உறையிலிருந்தும்(folder), 
Nginx சேவையக தொகுதி கோப்புகளின் இருப்பிடத்திற்குச் செல்லவும்
$ cd /etc/nginx/sites-available/

# சேவையக தொகுப்பு கோப்புகளை 
உருவாக்கி default கோப்பை நீக்கவும் 
$ ls > example1.com
$ ls > example2.com
$ rm default
```

**சேவையக தொகுப்பு  கோப்புகளைத் திருத்துதல்**  
Nginx சேவையக தொகுதி அமைப்புகளில் சமீபத்திய மாற்றங்களுக்கு <https://nuxtjs.org/faq/nginx-proxy/> ஐப் படிக்கவும்.
`http://127.0.0.1:3000` வலை வாசலில் (port) `example1.com` இயங்கும்   & `http://127.0.0.1:4000` வலை வாசலில் (port) `example2.com` இயங்கும்.

```linux
# nano editorஇல் கோப்பைத் திறக்கவும்
$sudo nano example1.com
# கோப்புக்குள் கீழே உள்ள வடிவமைப்புகளை உள்ளிடவும்
map $sent_http_content_type $expires {
"text/html"                 epoch;
"text/html; charset=utf-8"  epoch;
default                     off;
}
server {
listen          80;# the port nginx is listening on
server_name     example1.com www.example1.com;
# setup your domain here
gzip            on;
gzip_types      text/plain application/xml 
                text/css application/javascript;
gzip_min_length 1000;
location / {
 expires $expires;
 proxy_redirect          off;
 proxy_set_header Host       $host;
 proxy_set_header X-Real-IP  $remote_addr;
 proxy_set_header X-Forwarded-For    
                    $proxy_add_x_forwarded_for;
 proxy_set_header X-Forwarded-Proto  $scheme;
 proxy_read_timeout          1m;
 proxy_connect_timeout       1m;
 proxy_pass http://127.0.0.1:3000; 
    #set the address of the Node.js instance here
}
}
# கோப்பை சேமித்து மூடவும்
# இதே போன்று example2.com கோப்பை திறந்து 
தேவையான வடிவமைப்புகளை சேர்த்து மூடவும்.
# Server_name & proxy_pass ஐ முறையே 
"example2.com www.example2.com" & "http://127.0.0.1:4000" உடன் 
மாற்றுவதை உறுதிப்படுத்தவும்.

# sites-available கோப்புறையிலிருந்து sites-enabled 
கோப்புறைக்கு சேவையக தொகுதிகளுக்கான குறியீட்டு இணைப்புகளை 
உருவாக்கவும்
$ sudo ln -s /etc/nginx/sites-available/example1.com 
             /etc/nginx/sites-enabled/
$ sudo ln -s /etc/nginx/sites-available/example2.com 
             /etc/nginx/sites-enabled/

# sites-enabled கோப்புறையிலிருந்து default கோப்பை நீக்கு
$ sudo rm /etc/nginx/sites-enabled/default
```
**Nginx சேவையகத்தைத் தொடங்கவும்**
```linux
# தொடங்க மற்றும் நிறுத்த nginx
$ sudo service nginx start
$ sudo service nginx stop

# ஏதேனும் பிழைகள் இருந்தால் nginx ஐ சோதிக்க
$ sudo nginx -t

# Nginx ஐ மறுதொடக்கம் செய்ய
$ sudo systemctl restart nginx

```
**PM2 வடிவமைப்புகள்**  
கீழேயுள்ள கோப்புறை இடத்தில் இரண்டு nuxt செயலிகள் நிறுவப்பட்டதாகக் கருதப்படுகிறது  
/home/user/examle1/  
/home/user/example2/  

```linux
# PM2 ecosystem.config.js கோப்பை உருவாக்கவும். 
"PM2 init" கட்டளை ecosystem.config.js கோப்பை உருவாக்குகிறது
$ cd /home/user/
$ sudo PM2 init

# nano எடிட்டரில் ecosystem.config.js கோப்பைத் திருத்தவும்
$ sudo nano ecosystem.config.js
# கீழே உள்ள அமைப்புகளை உள்ளிடவும்
module.exports = {
apps : [
 {	name: 'example1',
    port: 3000,
	exec_mode:'cluster',
	script: "./node_modules/nuxt/bin/nuxt.js",
	cwd:'./example1/',
	args: 'start',
},
{	name: 'example2',
    port: 4000,
    exec_mode:'cluster',
    script: "./node_modules/nuxt/bin/nuxt.js",
    cwd:'./example2/',
    args: 'start',
}
]
}
# கோப்பை சேமித்து மூடவும்
```
**செயலிகளை தொடங்கவும்**

கீழேயுள்ள கட்டளை example1 & example2 செயலிகளைத் தொடங்க உதவும். வெற்றிகரமாக உள்ளமைத்துள்ள செயலிகளை, நீங்கள் உலாவியில் `http://example1.com` &` http://example2.com` என சோதிக்கலாம்.
```linux
$ PM2 start
```

மேலே உள்ள கட்டுரைக்கான குறிப்பு மூலம்:    
https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04  
https://nuxtjs.org/faq/nginx-proxy/


<style>


</style>