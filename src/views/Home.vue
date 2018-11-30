<template>
  <div class="home">
    <List />
    <Inputter />
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import Inputter from '@/components/Inputter'
import List from '@/components/List'

export default {
  name: 'home',
  components: {
    Inputter,
    List
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
