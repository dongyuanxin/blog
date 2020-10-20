# download noetes
rm -rf notes
git clone git@github.com:dongyuanxin/notes.git

# build vuepress
npm run build

# upload files
scp -r .vuepress/dist/* ubuntu@101.32.188.38:~/data/blog-static/
