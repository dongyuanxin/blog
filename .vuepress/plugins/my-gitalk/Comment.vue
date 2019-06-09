<template>
  <div class="comment-empty"></div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const commentID = 'vuepress-comment'
let timer = null

export default {
  mounted () {
    timer = setTimeout(() => {
      needComment(this.$frontmatter) && renderComment(this.$frontmatter)
    }, 1000)

    this.$router.afterEach((to, from) => {
      if (to && from && to.path === from.path) {
        return
      }

      needComment(this.$frontmatter) && renderComment(this.$frontmatter)
    })
  }
}

function needComment (frontmatter) {
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

function renderComment (frontmatter) {
  clearTimeout(timer)

  const parentDOM = document.querySelector('main.page')
  if (!parentDOM) {
    timer = setTimeout(() => renderComment(frontmatter), 200)
    return 
  }

  const last = document.querySelector(`#${commentID}`)
  if (last) {
    last.remove()
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
    title: `「评论」${frontmatter.title}`,
    body: `${frontmatter.title}：${window.location.origin}${window.location.pathname}`
  })

  gittalk.render(commentID)
}
</script>

