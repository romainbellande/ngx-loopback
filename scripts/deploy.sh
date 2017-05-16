#!/bin/bash
git add .
git commit -m "Deployment"
git status
eval "$(ssh-agent -s)" #start the ssh agent
git remote add deploy ssh://deploy@46.101.53.213:/var/www/ngx-loopback
git push deploy HEAD:master --force
echo "deployment completed"
