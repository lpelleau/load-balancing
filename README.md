# Load Balancing test application
## Synopsis
This project is based on educational purpose to demonstrate load balancing.

## Motivation
This project is simple enough and easy to setup to enable a novice to practice several Nginx configurations and see the application's comportement change.
Make sure you have a system with **4 CPU cores** at least! Otherwise your computer could freeze the time to process all of your requests.

## Installation
1. Download project
  * git clone https://github.com/lpelleau/load-balancing.git
  * cd load-balancing
2. Install and launch the project
  * npm install
  * node app.js 0 // bind to port 3000
  * node app.js 1 // bind to port 3001
  * node app.js 2 // bind to port 3002
3. Configure Nginx
  * sudo cp load-balancing3.ngx /etc/nginx/sites-available/
  * sudo ln -s /etc/nginx/sites-available/load-balancing3.ngx /etc/nginx/sites-enabled/load-balancing
4. Reload Nginx configuration
  * sudo service nginx reload

## Usage
Go to http://localhost/ with your favorite browser.  
Send small requests to see servers changes.  
Send big requests to see CPU charge distribued with `htop`.  

## API Reference
This project use:
* [Nginx](http://nginx.org/en/docs/)
* [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Expressjs](http://expressjs.com/)
* [Jade](http://jade-lang.com/)
* [Materiazecss](http://materializecss.com/)

## Contributors
If this project interessed you, feel free to contact me at loicpelleau@yahoo.fr!

## License
This projectis under MIT license.
