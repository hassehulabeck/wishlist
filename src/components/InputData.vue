<template>
  <div>
    <h1>Add a person</h1>
    <label>Namn</label>
      <input v-model="name" type="text" name="name" value="">
    <label>Age</label>
      <input v-model="age" type="text" name="age" value="">
    <label>City</label>
      <input v-model="city" type="text" name="city" value="">
    <button @click="storeData">Register this data</button>
  </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
  name: 'InputData',
  data() {
    return {
      name: '',
      age: 0,
      city: ''
    }
  },
  methods: {
    storeData() {
      db.ref('users/').push({
        name: this.name,
        age: this.age,
        city: this.city
      })
      console.log ("Gick bra att pusha data")
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
</style>
