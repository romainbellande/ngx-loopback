#!/bin/bash
yarn global add @angular/cli
npm run dist
# rm deploy_key.enc
# rm google-chrome-stable_current_amd64.deb
rm .gitignore
mv .travis-gitignore .gitignore
echo "build completed"
