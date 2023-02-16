<template>
  <div class="blog">
    <BlogComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogComponent from '@/components/BlogComponent.vue'

export default {
  name: 'BlogView',
  components: {
    BlogComponent
  }
}
</script>
