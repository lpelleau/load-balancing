# Load Balancing test application
## Recomendations
* 4 cores processor (down to 3 if config changed)
* 256Mb ram


* Node.js
* Nginx
* npm

## Installation
* git clone https://github.com/lpelleau/load-balancing.git
* cd load-balancing
* sudo cp load-balancing.ngx /etc/nginx/sites-available/
* sudo ln -s /etc/nginx/sites-available/load-balancing /etc/nginx/sites-enabled/load-balancing
* sudo service nginx reload
* npm install
* nodejs app.js 0 // bind to port 3000
* nodejs app.js 1 // bind to port 3001
* nodejs app.js 2 // bind to port 3002

## Usage
Go to http://localhost/ with your favorite browser.  
Send small requests to see servers changes.  
Send big requests to see CPU charge distribued with `htop`.  

