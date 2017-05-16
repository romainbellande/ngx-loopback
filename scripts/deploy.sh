#!/bin/bash
git add .
git commit -m "Deployment"
eval "$(ssh-agent -s)" #start the ssh agent
chmod 600 .travis/deploy_key.pem # this key should have push access
ssh-add .travis/deploy_key.pem
git remote add deploy ssh://deploy@46.101.53.213:/var/www/ngx-loopback
git push deploy master
