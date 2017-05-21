#!/bin/bash
yarn global add @angular/cli
npm run dist
rm .gitignore
mv .travis-gitignore .gitignore
# git rm google-chrome-stable_current_amd64.deb
# git rm deploy_key.enc
# git rm -rf angular
echo "build completed"
