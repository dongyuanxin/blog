<template>
  <aside class="right-sidebar">
    <div class="right-sidebar-links">
      <div class="right-sidebar-header">关注公众号</div>
      <img src="https://static.godbmw.com/img/public/wechat-8cm.jpg" alt="公众号搜索：心谭博客" srcset />
    </div>

    <div class="right-sidebar-links">
      <div class="right-sidebar-header">
        最近更新
        <a href="/guide/" target="_blank">&gt;&gt;&gt;查看全部</a>
      </div>
      <div class="right-sidebar-item" v-for="(article, index) in relatedPosts" :key="index">
        <a target="_blank" :href="article.path" :title="article.title">{{article.title}}</a>
      </div>
    </div>

    <div class="right-sidebar-links">
      <div class="right-sidebar-header">
        想法
        <a href="/passages/2019-11-25-how-insist-on-learning/" target="_blank">&gt;&gt;&gt;查看全部</a>
      </div>
      <div
        class="right-sidebar-item"
        v-for="(diary, index) in relatedDiaries"
        :key="index"
        :title="diary.title"
      >
        <a target="_blank" :href="diary.path" :title="diary.title">{{diary.title}}</a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      postK: 8,
      diaryK: 5,
      diaryPathRe: /\/思考与成长\//,
      filterTitles: ["Home", "友情链接", "导航"]
    };
  },

  mounted() {},

  computed: {
    relatedPosts() {
      return this.getRecentTopK(this.$site.pages, this.postK);
    },

    relatedDiaries() {
      const diaries = this.$site.pages.filter(post =>
        this.diaryPathRe.test(decodeURIComponent(post.regularPath))
      );
      return this.getRecentTopK(diaries, this.diaryK);
    }
  },

  methods: {
    getRecentTopK(posts = [], k = 5) {
      return posts
        .filter(({ title }) => {
          return this.isValidStr(title) && !this.filterTitles.includes(title);
        })
        .map(post => {
          return {
            ...post,
            updateTimestamp: new Date(
              post.lastUpdated || post.frontmatter.date
            ).getTime()
          };
        })
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        .slice(0, k);
    },

    isValidStr(str) {
      return typeof str === "string" && str.trim().length;
    }
  }
};
</script>

<style lang="stylus">
// $sidebarWidth: 20rem
// define at: vuepress/packages/@vuepress/core/lib/client/style/config.styl
.right-sidebar {
  font-size: 16px;
  background-color: #fff;
  width: $sidebarWidth;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: $navbarHeight;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border-left: 1px solid $borderColor;
  overflow-y: auto;

  @media (max-width: $MQNarrow) {
    display: none;
  }

  a {
    color: $textColor;

    &:hover {
      color: $accentColor;
    }
  }

  &-links {
    margin: 1.5rem 0 1.5rem 1.5rem;
  }

  &-header {
    font-size: 17px;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: $accentColor;
    position: relative;
    border-bottom: 1px solid $borderColor;

    a {
      font-size: 13px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      float: right;
      right: 1.5rem;
      bottom: 0.6rem;
    }
  }

  &-item {
    font-size: 15px;
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
      font-weight: 400;
    }
  }
}
</style>