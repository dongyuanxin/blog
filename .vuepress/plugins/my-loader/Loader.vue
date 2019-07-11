<template>
  <div class="my-loader center" v-show="show">
    <div class="my-loader-circle"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        this.show = true
        next()
      } else {
        next()
      }
    })
    this.$router.afterEach((to, from) => {
      this.show = false
    })
  }
}
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-loader {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 600;
}

.my-loader-circle {
  z-index: 900;
  border: 3px solid#f6ffed;
  border-top: 3px solid #3eaf7c;
  border-radius: 50%;
  transform: rotate(0deg);
  width: 3.5em;
  height: 3.5em;
  animation: circle-rotate 1s linear infinite;
}

@keyframes circle-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
