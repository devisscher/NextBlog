# MongoDB Notes

NODE_ENV=production
PORT=3002
DB_HOST=LOCALHOST
DB_USER=api
DB_PASS=password


mongoexport -d api -c quotes -u api -p password -o quotes.json --authenticationDatabase admin

scp root@159.203.8.154:/home/api.tdevisscher.ca/quotes.json /Users/tev/Desktop/test