<template>
  <div>
    <section v-if="message.length>0"> {{ message }} </section>
    <h2>Lägg till en produkt</h2>
    <label for="">Produkt</label>
    <input type="text" name="productName" v-model="productName">
    <label for="">Pris</label>
    <input type="number" name="price" v-model="price">
    <label for="">Färg</label>
    <input type="text" name="color" v-model="color">
    <button @click="storeData">Lägg till produkt</button>
  </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
  name: 'Inputter',
  data() {
    return {
      productName: '',
      price: 0,
      color: '',
      message: ''
    }
  },
  firebase: {
    products: db.ref('products/food')
  },
  methods: {
    storeData() {
      this.$firebaseRefs.products.push({
        productName: this.productName,
        price: this.price,
        color: this.color
      })
      this.message = "Gick bra att pusha data";
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
