sudo nano /etc/nginx/sites-available/1backend.saumiccraft.com
server {
    listen 80;
    server_name 1backend.saumiccraft.com;

    location / {
        proxy_pass http://localhost:5009;  # Assuming your Node.js app is running on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_log /var/log/nginx/1backend.saumiccraft.com.error.log;
    access_log /var/log/nginx/1backend.saumiccraft.com.access.log;
}

sudo ln -s /etc/nginx/sites-available/1backend.saumiccraft.com /etc/nginx/sites-enabled/


sudo nano /etc/nginx/sites-available/1.saumiccraft.com

sudo nano /etc/nginx/sites-available/1.saumiccraft.com

server {
    listen 80;
    server_name 1.saumiccraft.com;
    root /var/www/html/homewebsite/client/build; # Replace with the path to your build directory
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_log /var/log/nginx/1.saumiccraft.com.error.log;
    access_log /var/log/nginx/1.saumiccraft.com.access.log;
}


sudo ln -s /etc/nginx/sites-available/1.saumiccraft.com /etc/nginx/sites-enabled/