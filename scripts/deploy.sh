#!/bin/bash
git add .
git commit -m "deployment"
git status
eval "$(ssh-agent -s)" #start the ssh agent
slc deploy --service=ngx-loopback http://46.101.55.92:8701
echo "deployment completed"
