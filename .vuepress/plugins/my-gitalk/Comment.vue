<template>
  <div class="comment-empty"></div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const commentID = 'vuepress-comment'

export default {
  mounted () {
    renderComment(this.$frontmatter)
    this.$router.afterEach((to, from) => {
      if (to && from && to.path === from.path) {
        return
      }

      if (!needComment(this.$frontmatter)) {
        return false
      }

      renderComment(this.$frontmatter)
    })
  },
}

function needComment (frontmatter) {
  const contentDOM = document.querySelector('.page .content')
  if (!contentDOM) {
    return false
  }

  if (frontmatter 
    && (
      frontmatter.comment === false 
      || frontmatter.comments === false
    )
  ) {
    return false
  }

  return true
}

function renderComment (frontmatter = {}) {
  const parentDOM = document.querySelector('main.page')
  if (!parentDOM) {
    setTimeout(() => renderComment(frontmatter), 100)
    return 
  }

  const commentContainerDOM = document.createElement('div')
  commentContainerDOM.id = commentID
  parentDOM.appendChild(commentContainerDOM)
  
  const gittalk = new Gitalk({
    clientID: '6558fdf298fa596c5d8c',
    clientSecret: '483e8b55319cb5e69760db9b2c02c4b66db56568',
    repo: 'blog',
    owner: 'dongyuanxin',
    admin: ['dongyuanxin'],
    id: frontmatter.commentid || frontmatter.permalink,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false,  // Facebook-like distraction free mode
    labels: ['Gitalk', 'Comment'],
    title: `「评论」${frontmatter.title}`
  })

  gittalk.render(commentID)
}
</script>

