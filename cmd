
sudo nano /etc/nginx/sites-available/1.saumiccraft.com

server {
    listen 80;
    server_name 1.saumiccraft.com; #  Replace it with your own domain 

    root /var/www/html/projects/react/build; # Replace with the path to your build directory
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_log /var/log/nginx/1.saumiccraft.com.error.log;
    access_log /var/log/nginx/1.saumiccraft.com.access.log;
}







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




sudo nano /etc/nginx/sites-available/one.saumiccraft.com

server {
    listen 80;
    server_name one.saumiccraft.com; #  Replace it with your own domain 

    root /var/www/html/homepagetester/client/build; # Replace with the path to your build directory
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_log /var/log/nginx/one.saumiccraft.com.error.log;
    access_log /var/log/nginx/one.saumiccraft.com.access.log;
}

sudo ln -s /etc/nginx/sites-available/one.saumiccraft.com /etc/nginx/sites-enabled/


sudo nano /etc/nginx/sites-available/onebackend.saumiccraft.com
server {
    listen 80;
    server_name onebackend.saumiccraft.com;

    location / {
        proxy_pass http://localhost:5008;  # Assuming your Node.js app is running on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_log /var/log/nginx/onebackend.saumiccraft.com.error.log;
    access_log /var/log/nginx/onebackend.saumiccraft.com.access.log;
}

sudo ln -s /etc/nginx/sites-available/onebackend.saumiccraft.com /etc/nginx/sites-enabled/

sudo certbot --nginx -d one.saumiccraft.com -d onebackend.saumiccraft.com