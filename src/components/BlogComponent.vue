<template>
  <div class="comp-blog">
    <input
      class="search-input"
      type="search"
      v-model="search"
      placeholder="Input title for search"
    />
    <div v-for="item in filteredList" :key="item.id">
      <div class="blogs" @click="handleDetail(item.id)">
        <img :src="item.image" alt="" width="150" height="150" />
        <div class="text-content">
          <h3 class="title">{{ item.title }}</h3>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "comp-blog",
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.$store.dispatch("getListBlog");
    this.$store.dispatch("getLogin");
  },
  computed: {
    ...mapState(["listBlog"]),
    filteredList() {
      return this.listBlog.filter((blog) => {
        return blog.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    handleDetail(id) {
      this.$router.push({ name: "blog-detail", params: { id: id } });
    },
  },
};
</script>

<style>
.comp-blog {
  width: 50%;
  margin: 0 auto;
}

.blogs {
  display: flex;
  padding: 10px 10px;
  gap: 10px;
}

.blogs:hover {
  color: blue;
  background-color: aquamarine;
  cursor: pointer;
}

.search-input {
  width: 400px;
  height: 40px;
  margin: 20px;
}

.text-content {
  text-align: left;
}
</style>