const routePfx = '/passages/'

module.exports = {
  // 文章路径增加前缀 和 评论标识
  extendPageData($page) {
    const { frontmatter } = $page

    if (
      !frontmatter 
      || JSON.stringify(frontmatter) === '{}'
      || !frontmatter.permalink 
      || frontmatter.single === true
    ) {
      return
    }

    // Comment.vue中根据comment(s)字段判断是否渲染评论
    frontmatter.commentid = frontmatter.permalink 
    frontmatter.permalink = `${routePfx}${frontmatter.permalink}`
  }
}