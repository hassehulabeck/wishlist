<template>
  <div class="home">
    <Everywish/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import Everywish from '@/components/Everywish'

export default {
  name: 'santa',
  components: {
    Everywish
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
