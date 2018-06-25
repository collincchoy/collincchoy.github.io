#!/bin/sh

echo 'Building...'
ng build --prod --base-href "/collincchoy.github.io/"

echo 'Deploying...'
ngh --dir dist/collin-app --branch master
