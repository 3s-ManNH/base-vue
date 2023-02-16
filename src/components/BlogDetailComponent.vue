<template>
  <div class="blog-detail">
    <h1>Blog Detail</h1>
    <img :src="blogDetail.image" alt="" width="500" height="500" />
    <div class="detail-content">
      <h3 class="title">{{ blogDetail.title }}</h3>
      <p class="content">{{ blogDetail.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "blog-detail",
  data() {
    return {};
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getBlogDetail", id);
  },
  computed: mapState(["blogDetail"]),
};
</script>

<style>
.blog-detail {
  margin-top: 20px;
}
</style>