<template>
  <div>
    <section v-if="message.length>0"> {{ message }} </section>
    <h2>Lägg till en önskning</h2>
    <label for="">Önskning</label>
    <input type="text" name="name" v-model="name">
    <button @click="storeData">Lägg till önskning på listan</button>
  </div>
</template>

<script>
import {fb, db} from '../firebase-config'

export default {
  name: 'Inputter',
  data() {
    return {
      name: '',
      message: ''
    }
  },
  computed: {
    user() {
      return fb.auth().currentUser;
    }
  },
  created () {
    this.$bindAsObject('wishes', db.ref('wishes/' + this.user.uid))
    this.$bindAsObject('wishroot', db.ref('/'))
  },
  firebase: {
    wishes: db.ref('wishes')
  },
  methods: {
    storeData() {
      var name = this.name
      this.$firebaseRefs.wishes.push({
        name: name
      },(error) => {
        if (error) {
          console.log(error)
        }
        else {
          // Lägg till önskningen i "allWishes", så att tomten kan se.
          this.$firebaseRefs.wishroot.child('allWishes').push({
            name: name,
            user: this.user.uid
          })
        }
      })
      this.message = "Your wish is now added to the list";
      this.name = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label, input, button {
  display: block;
  text-align: left;
  margin-bottom: 1em;
}
label {
  margin-bottom: 0;
}
div {
  width: 33%;
  margin: 0 auto;
}
section {
  min-height: 2em;
}
</style>
