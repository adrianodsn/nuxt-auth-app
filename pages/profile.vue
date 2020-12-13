<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <hr />
      <div class="content">
        <div>
          <strong>{{ loggedInUser.name }}</strong>
          <!-- {{ $auth.user.name }} -->
        </div>
        <small>{{ loggedInUser.email }}</small>
        <!-- {{ $auth.user.email }} -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: 'auth',

  computed: {
    ...mapGetters(['loggedInUser']),
  },
};
</script>
