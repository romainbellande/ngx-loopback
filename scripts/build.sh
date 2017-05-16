#!/bin/bash
yarn global add @angular/cli
npm run dist
rm -rf angular
echo "build completed"
