#!/bin/bash
git add .
git commit -m "deployment"
git status
eval "$(ssh-agent -s)" #start the ssh agent
slc build --commit --onto deploy --install
slc deploy --service=ngx-loopback http://46.101.55.92:32768
echo "deployment completed"
