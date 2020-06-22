<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <PublicPostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PublicPostItem from "./PublicPostItem";
export default {
  components: {
      PublicPostItem
  },
  computed: {
    ...mapState("posts", ["posts"])
  },
  mounted() {
    this.loadposts();
  },
  methods: {
    ...mapActions("posts", ["loadposts"])
  }
};
</script>

<style>
</style>