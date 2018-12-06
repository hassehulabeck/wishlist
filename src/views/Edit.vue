<template>
  <div>
    <section v-if="message.length>0"> {{ message }} </section>
    <h2>Ändra en önskning</h2>
    <label for="">Önskning</label>
    <input
      type="text"
      name="name"
      v-model="wish.name">
    <button @click="editera(wish)">Editera</button>
  </div>
</template>

<script>
  import {fb, db} from '../firebase-config'

  export default {
    name: 'edit',
    data() {
      return {
        name: '',
        message: ''
      }
    },
    created () {
      this.$bindAsArray('wishes', db.ref('wishes/' + fb.auth().currentUser.uid))
    },
    computed: {
      wish() {
        return this.$route.params.wish
      }
    },
    firebase: {
      wishes: db.ref('wishes'),
      allWishes: db.ref('allWishes')
    },
    methods: {
      editera (wish) {
        this.$firebaseRefs.wishes.child(wish['.key']).child('name').set(wish.name)
        this.$firebaseRefs.allWishes.child(wish['.key']).child('name').set(wish.name)
        this.message = 'Ändringen genomförd'
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
