<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Users</h2>
      <div v-for="user in users" :key="user.id">{{ user.name }}</div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'auth',

  data() {
    return {
      users: []
    };
  },

  async asyncData({ $axios }) {
    const {data} = await $axios.get('/users');
    return { users : data }
  }
}
</script>
