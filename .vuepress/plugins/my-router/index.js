const routePfx = "/passages/";

module.exports = {
  // 文章路径增加前缀 和 评论标识
  extendPageData($page) {
    const { frontmatter, regularPath } = $page;

    if (
      !frontmatter ||
      JSON.stringify(frontmatter) === "{}" ||
      !frontmatter.permalink ||
      frontmatter.single === true
    ) {
      return;
    }

    if (/^\/?notes\//.test(regularPath)) {
      frontmatter.comment = false;
    } else {
      frontmatter.comment = true;
      frontmatter.commentid = frontmatter.permalink;
    }
    frontmatter.permalink = `${routePfx}${frontmatter.permalink}`;
  }
};
