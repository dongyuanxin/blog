#!/usr/bin/env sh

# throw error
set -e

# build static
npm run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# publish at $1, at branch $2
git push -f "$1" master:"$2"

cd -

rm -rf .vuepress/dist