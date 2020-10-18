<template>
    <main class="page">
        <slot name="top" />

        <Content class="theme-default-content" />
        <div style="display: none;">
            来自:
            <a
                :href="
                    `https://xin-tan.com/${this.$frontmatter.permalink || '/'}`
                "
                target="_blank"
                >{{ this.$title }}</a
            ><br />
            作者：<a href="https://xin-tan.com" target="_blank">心谭</a><br />
            Star仓库：<a href="https://github.com/dongyuanxin/blog">github</a>
        </div>
        <PageEdit />

        <PageNav v-bind="{ sidebarItems }" />

        <RightSidebar />

        <slot name="bottom" />
    </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import RightSidebar from "./RightSidebar";

export default {
    components: { PageEdit, PageNav, RightSidebar },
    props: ["sidebarItems"]
};
</script>

<style lang="stylus">
$wrapper {
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  @media (max-width: $MQNarrow) {
    padding: 2rem;
  }

  @media (max-width: $MQMobileNarrow) {
    padding: 1.5rem;
  }
}

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>