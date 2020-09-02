(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{378:function(n,r,e){"use strict";e.r(r),r.default="---\r\ndate: 19 Apr 2020\r\ndesc: Nuxt Js  செயலிக்கான PM2 மற்றும் Nginx சேவையக தொகுதி. (ஒற்றை பொது IP ல் இயங்கும் இரண்டு Nuxt Js செயலிகள்)\r\nimgDesc: 'படம் சின்னங்களின் திரை பிடிப்புகள்'\r\nname: 'nginx-pm2-nuxtjs'\r\nnoMainImage: True\r\ntitle: \" NuxtJs செயலிகள், Nginx உடன் PM2\"\r\naltLang: true\r\n---\r\n\r\nஇந்த கட்டுரையில் குறிப்பிடப்பட்டுள்ள வடிவமைப்புகள்(Configurations) மற்றும் செயற்பாடுகள்(settings) Ubuntu இயக்கதளத்தில்(Operating system) Node.js வழங்கியுடன்(Server) சோதிக்கப்பட்டவை. \r\nNginx மறுதலை பதிலியாக(reverse proxy) பயன்படுத்தப்படுகிறது மற்றும் PM2 உற்பத்தி செயல்முறை நிர்வாகியாக(production process manager) பயன்படுத்தப்படுகிறது. \r\n\r\n**முன்நிபந்தனைகள்**  \r\nசரியான பதிப்பில் (version) Node.js, Nginx & PM2 ஐ நிறுவவும் (Install).  \r\nஇரண்டு NuxtJs செயலியை (apps) (example1 & example2) நிறுவவும்.  \r\nமற்றும் இரண்டு செயற்களங்களுடன் (Domain) (`example1.com` &` example2.com`) ஒரு பொது IPயும் (xxx.xx.xxx.xx) (IP - Internet Protocol - \r\nஇணைய நெறிமுறை) தேவைப்படுகின்றன. \r\n\r\n## Nginx சேவையக தொகுப்பு தொகுதிகள் (server blocks)\r\n\r\n**இரண்டு சேவையக தொகுதி கோப்புகளை (files) உருவாக்கவும்**\r\n\r\n```linux\r\n# எந்த உறையிலிருந்தும்(folder), \r\nNginx சேவையக தொகுதி கோப்புகளின் இருப்பிடத்திற்குச் செல்லவும்\r\n$ cd /etc/nginx/sites-available/\r\n\r\n# சேவையக தொகுப்பு கோப்புகளை \r\nஉருவாக்கி default கோப்பை நீக்கவும் \r\n$ ls > example1.com\r\n$ ls > example2.com\r\n$ rm default\r\n```\r\n\r\n**சேவையக தொகுப்பு  கோப்புகளைத் திருத்துதல்**  \r\nNginx சேவையக தொகுதி அமைப்புகளில் சமீபத்திய மாற்றங்களுக்கு <https://nuxtjs.org/faq/nginx-proxy/> ஐப் படிக்கவும்.\r\n`http://127.0.0.1:3000` வலை வாசலில் (port) `example1.com` இயங்கும்   & `http://127.0.0.1:4000` வலை வாசலில் (port) `example2.com` இயங்கும்.\r\n\r\n```linux\r\n# nano editorஇல் கோப்பைத் திறக்கவும்\r\n$sudo nano example1.com\r\n# கோப்புக்குள் கீழே உள்ள வடிவமைப்புகளை உள்ளிடவும்\r\nmap $sent_http_content_type $expires {\r\n\"text/html\"                 epoch;\r\n\"text/html; charset=utf-8\"  epoch;\r\ndefault                     off;\r\n}\r\nserver {\r\nlisten          80;# the port nginx is listening on\r\nserver_name     example1.com www.example1.com;\r\n# setup your domain here\r\ngzip            on;\r\ngzip_types      text/plain application/xml \r\n                text/css application/javascript;\r\ngzip_min_length 1000;\r\nlocation / {\r\n expires $expires;\r\n proxy_redirect          off;\r\n proxy_set_header Host       $host;\r\n proxy_set_header X-Real-IP  $remote_addr;\r\n proxy_set_header X-Forwarded-For    \r\n                    $proxy_add_x_forwarded_for;\r\n proxy_set_header X-Forwarded-Proto  $scheme;\r\n proxy_read_timeout          1m;\r\n proxy_connect_timeout       1m;\r\n proxy_pass http://127.0.0.1:3000; \r\n    #set the address of the Node.js instance here\r\n}\r\n}\r\n# கோப்பை சேமித்து மூடவும்\r\n# இதே போன்று example2.com கோப்பை திறந்து \r\nதேவையான வடிவமைப்புகளை சேர்த்து மூடவும்.\r\n# Server_name & proxy_pass ஐ முறையே \r\n\"example2.com www.example2.com\" & \"http://127.0.0.1:4000\" உடன் \r\nமாற்றுவதை உறுதிப்படுத்தவும்.\r\n\r\n# sites-available கோப்புறையிலிருந்து sites-enabled \r\nகோப்புறைக்கு சேவையக தொகுதிகளுக்கான குறியீட்டு இணைப்புகளை \r\nஉருவாக்கவும்\r\n$ sudo ln -s /etc/nginx/sites-available/example1.com \r\n             /etc/nginx/sites-enabled/\r\n$ sudo ln -s /etc/nginx/sites-available/example2.com \r\n             /etc/nginx/sites-enabled/\r\n\r\n# sites-enabled கோப்புறையிலிருந்து default கோப்பை நீக்கு\r\n$ sudo rm /etc/nginx/sites-enabled/default\r\n```\r\n**Nginx சேவையகத்தைத் தொடங்கவும்**\r\n```linux\r\n# தொடங்க மற்றும் நிறுத்த nginx\r\n$ sudo service nginx start\r\n$ sudo service nginx stop\r\n\r\n# ஏதேனும் பிழைகள் இருந்தால் nginx ஐ சோதிக்க\r\n$ sudo nginx -t\r\n\r\n# Nginx ஐ மறுதொடக்கம் செய்ய\r\n$ sudo systemctl restart nginx\r\n\r\n```\r\n**PM2 வடிவமைப்புகள்**  \r\nகீழேயுள்ள கோப்புறை இடத்தில் இரண்டு nuxt செயலிகள் நிறுவப்பட்டதாகக் கருதப்படுகிறது  \r\n/home/user/examle1/  \r\n/home/user/example2/  \r\n\r\n```linux\r\n# PM2 ecosystem.config.js கோப்பை உருவாக்கவும். \r\n\"PM2 init\" கட்டளை ecosystem.config.js கோப்பை உருவாக்குகிறது\r\n$ cd /home/user/\r\n$ sudo PM2 init\r\n\r\n# nano எடிட்டரில் ecosystem.config.js கோப்பைத் திருத்தவும்\r\n$ sudo nano ecosystem.config.js\r\n# கீழே உள்ள அமைப்புகளை உள்ளிடவும்\r\nmodule.exports = {\r\napps : [\r\n {\tname: 'example1',\r\n    port: 3000,\r\n\texec_mode:'cluster',\r\n\tscript: \"./node_modules/nuxt/bin/nuxt.js\",\r\n\tcwd:'./example1/',\r\n\targs: 'start',\r\n},\r\n{\tname: 'example2',\r\n    port: 4000,\r\n    exec_mode:'cluster',\r\n    script: \"./node_modules/nuxt/bin/nuxt.js\",\r\n    cwd:'./example2/',\r\n    args: 'start',\r\n}\r\n]\r\n}\r\n# கோப்பை சேமித்து மூடவும்\r\n```\r\n**செயலிகளை தொடங்கவும்**\r\n\r\nகீழேயுள்ள கட்டளை example1 & example2 செயலிகளைத் தொடங்க உதவும். வெற்றிகரமாக உள்ளமைத்துள்ள செயலிகளை, நீங்கள் உலாவியில் `http://example1.com` &` http://example2.com` என சோதிக்கலாம்.\r\n```linux\r\n$ PM2 start\r\n```\r\n\r\nமேலே உள்ள கட்டுரைக்கான குறிப்பு மூலம்:    \r\nhttps://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04  \r\nhttps://nuxtjs.org/faq/nginx-proxy/\r\n\r\n\r\n<style>\r\n\r\n\r\n</style>"}}]);