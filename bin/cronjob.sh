cd ~/self/blog 

# download noetes 
rm -rf notes
git clone git@github.com:dongyuanxin/notes.git

# build vuepress
npm run build

# move static files
cp -dpr .vuepress/dist/* ~/data/blog-static/
cd -