#!/bin/bash

# print outputs and exit on first failure
set -xe

eval "$(ssh-agent -s)" #start the ssh agent
chmod 600 .travis/deploy_key.pem # this key should have push access
ssh-add .travis/deploy_key.pem
git remote add deploy ssh://root@46.101.53.213/var/www/ngx-loopback
git push deploy HEAD:master
# if [ $TRAVIS_BRANCH == "master" ] ; then

#     # setup ssh agent, git config and remote
#     mkdir _site
#     # generate client dist
#     npm run dist --prefix angular
#     # move folders and files
#     mv client _site/
#     mv server _site/
#     mv node_modules _site/
#     mv package.json _site/
#     cd _site
#     # init git
#     git init
#     git remote add origin "ssh://root@46.101.53.213/var/www/ngx-loopback"
#     git config user.name "Travis CI"
#     git config user.email "travis@berelindis.com"

#     # commit compressed files and push it to remote
#     git add .
#     git status # debug
#     git commit -m "Deploy compressed files"
#     git push -f deploy HEAD:master

# elif [ $TRAVIS_BRANCH == "staging" ] ; then

#     # setup ssh agent, git config and remote
#     eval "$(ssh-agent -s)"
#     ssh-add ~/.ssh/travis_rsa
#     git remote add deploy "travis@webhost.planecq.xyz:/var/www/planecq.xyz"
#     git config user.name "Travis CI"
#     git config user.email "travis@planecq.com"

#     # commit compressed files and push it to remote
#     rm -f .gitignore
#     cp .travis/deployignore .gitignore
#     git add .
#     git status # debug
#     git commit -m "Deploy compressed files"
#     git push -f deploy HEAD:master

# else

#     echo "No deploy script for branch '$TRAVIS_BRANCH'"

# fi
