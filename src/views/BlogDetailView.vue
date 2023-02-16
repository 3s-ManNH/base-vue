<template>
  <div class="blog-detail">
    <BlogDetailComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogDetailComponent from '@/components/BlogDetailComponent.vue'

export default {
  name: 'BlogDetailView',
  components: {
    BlogDetailComponent
  }
}
</script>
