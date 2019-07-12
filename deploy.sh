#!/usr/bin/env sh

# throw error
set -e

if [[ -z "$CODING_TOKEN"  || -z "$GITHUB_TOKEN" ]]; then
  exit 0
fi

# build static
npm run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f "https://godbmw:$CODING_TOKEN@git.dev.tencent.com/godbmw/godbmw.coding.me.git" master:master

git push -f "https://godbmw:$GITHUB_TOKEN@github.com/dongyuanxin/blog.git" master:gh-pages

cd -

rm -rf .vuepress/dist