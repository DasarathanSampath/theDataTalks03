---
date: 19 Apr 2020
desc: Nginx server blocks with PM2 configuration for NuxtJs application (Two NuxtJs applications running on single public IP)
imgDesc: 'Image is a screen shot of logos'
name: 'nginx-pm2-nuxtjs'
noMainImage: True
title: "Nginx with PM2 for NuxtJs"
altLang: false
---

The configurations & settings mentioned in this article were tested on Ubuntu operating system with
Node.js server. Nginx is used as a reverse proxy & PM2 is used as a production process manager.

**Prerequisites**  
Install Node.js, Nginx & PM2 with the proper version.  
Install two NuxtJs applications example1 & example2.  
And we have two domains `example1.com` & `example2.com` with one public IP xxx.xx.xxx.xx.

## Nginx server blocks

**Create two server block files**

<div class="codeBlocks">

```linux
# From any folder, go to 
Nginx server block files location
$ cd /etc/nginx/sites-available/

# Create server block files & delete default file
$ ls > example1.com
$ ls > example2.com
$ rm default

```
</div>

**Edit server block files**  
Read <https://nuxtjs.org/faq/nginx-proxy/> for the latest changes on Nginx server block settings.
`example1.com` will run on port   `http://127.0.0.1:3000` & `example2.com` will run on port `http://127.0.0.1:4000`.

<div class="codeBlocks">

```linux        

# Open the file in the nano editor
$sudo nano example1.com
# Enter the below configurations inside the file
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
# Save & close the file
# Similary open example2.com file, 
enter the above configurations, 
save & close the file.
# Be sure to changes server_name & proxy_pass with 
"example2.com www.example2.com" 
& "http://127.0.0.1:4000" respectively

# Create symbolic links for server blocks from 
sites-available folder to sites-enabled folder
$ sudo ln -s /etc/nginx/sites-available/example1.com 
             /etc/nginx/sites-enabled/
$ sudo ln -s /etc/nginx/sites-available/example2.com 
             /etc/nginx/sites-enabled/

# Delete default file from sites-enabled folder
$ sudo rm /etc/nginx/sites-enabled/default

```        
</div>

**Start Nginx server**

<div class="codeBlocks">

```linux
# To start & stop nginx
$ sudo service nginx start
$ sudo service nginx stop

# To test nginx for any errors
$ sudo nginx -t

# To restart nginx
$ sudo systemctl restart nginx

```
</div>

**PM2 configuarions**  
Assumed two nuxt application installed in the below folder location
/home/user/exapmle1/
/home/user/example2/

<div class="codeBlocks">

```linux
# Create PM2 ecosystem.config.js file. 
#"PM2 init" command creates ecosystem.config.js file
$ cd /home/user/
$ sudo PM2 init

#Edit ecosystem.config.js file in nano editor
$ sudo nano ecosystem.config.js
# Enter the below settings
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
# Save & close the file
```
</div>

**Start applications**

The below command will start example1 & example2 applications. 
You have successfully configured and you can test
as `http://example1.com` & `http://example2.com` in the browser.

<div class="codeBlocks">

```linux
$ PM2 start
```
</div>

Reference for the above article:  
https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04  
https://nuxtjs.org/faq/nginx-proxy/


<style>


</style>