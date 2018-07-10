#!/bin/sh

echo 'Building...'
ng build --prod --base-href "/"

echo 'Deploying...'
ngh --dir dist/collin-app --branch master
