cd /home/ubuntu/self/blog

# download noetes 
rm -rf notes
git clone git@github.com:dongyuanxin/notes.git

# build vuepress
npm run build

# move static files
cp -dpr .vuepress/dist/* /home/ubuntu/data/blog-static/
cd -
