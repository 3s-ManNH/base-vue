<template>
  <div class="blog-detail">
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'BlogDetailView',
  components: {
    LoginComponent
  }
}
</script>
