#!/bin/bash
eval "$(ssh-agent -s)" #start the ssh agent
rm .gitignore
mv .travis-gitignore .gitignore
git rm -rf angular
git rm deploy_key.enc
git rm -rf scripts
git add .
git clean -xdf
slc build --commit --onto deploy --install
slc deploy --service=ngx-loopback http://46.101.55.92:8701
echo "deployment completed"
