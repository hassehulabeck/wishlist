<template>
  <div>
    <h1>Alla önskningar</h1>
    <ul>
      <li v-for="wish in allWishes" :key="wish.id">
        {{ wish.name }}
        <pre>   <a @click="remove(wish)">x</a></pre>
      </li>
    </ul>
  </div>
</template>

<script>
import {fb, db} from '../firebase-config'

export default {
  name: 'Everywish',
  data() {
    return {
      wish: '',
      message: ''
    }
  },
  created () {
    this.$bindAsArray('allWishes', db.ref('allWishes'))
  },
  firebase: {
    allWishes: db.ref('allWishes')
  },
  methods: {
    remove(wish) {
      this.$firebaseRefs.allWishes.child(wish['.key']).remove()
      // Fixa så att santa tar bort även i users önskelista?
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
