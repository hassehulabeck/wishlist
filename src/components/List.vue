<template>
  <div>
    <h1>Hela önskelistan</h1>
    <ul>
      <li v-for="wish in wishes" :key="wish.id">
        <router-link :to="{ name: 'edit', params: {wish: wish} }">{{ wish.name }}</router-link>
        <pre>   <a @click="remove(wish)">x</a></pre>
      </li>
    </ul>
  </div>
</template>

<script>
import {fb, db} from '../firebase-config'

export default {
  name: 'List',
  data() {
    return {
      wish: '',
      message: ''
    }
  },
  created () {
    this.$bindAsArray('wishes', db.ref('wishes/' + fb.auth().currentUser.uid))
  },
  firebase: {
    wishes: db.ref('wishes'),
    allWishes: db.ref('allWishes')
  },
  methods: {
    remove(wish) {
      this.$firebaseRefs.wishes.child(wish['.key']).remove()
      this.$firebaseRefs.allWishes.child(wish['.key']).remove()
    },
    edit(wish) {
      this.$router.replace('edit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  width: 33%;
  margin: 1em auto;
  background-color: wheat;
  padding: 3px;
  border-radius: 6px;
}
li {
  list-style-type: none;
  padding: 3px;
  background-color: orange;
  color: white;
  font-weight: 600;
  margin: 3px;
  border-radius: 6px;
}
a {
  color: white;
  text-shadow: 1px 1px 2px gray;
  cursor: pointer;
}
pre {
  display: inline;
}
</style>
