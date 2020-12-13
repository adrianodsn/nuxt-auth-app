<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Users</h2>
      <hr />
      <div v-for="(user, index) in users" :key="user.id">
        <div>
          <strong>{{
            user.name + (user.email == loggedInUser.email ? " (me)" : "")
          }}</strong>
        </div>
        <small>{{ user.email }}</small>
        <hr v-if="index != users.length - 1" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

  middleware: 'auth',

  data() {
    return {
      users: []
    };
  },
  
  async asyncData({ $axios }) {
    const {data} = await $axios.get('users');
    return { users : data.data }
  },

  computed: {
    ...mapGetters(['loggedInUser']),
  }
}
</script>
