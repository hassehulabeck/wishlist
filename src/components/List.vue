<template>
  <div>
    <h1>Alla produkter</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.productName }} ({{ product.price }}:-)
      </li>
    </ul>
    </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
  name: 'List',
  data() {
    return {
      product: '',
      price: 0,
      color: '',
      message: ''
    }
  },
  firebase: {
    products: db.ref('products/food')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  width: 33%;
  margin: 1em auto;
  background-color: wheat;
  padding: 1em;
}
li {
  list-style-type: none;
  padding: 3px;
  background-color: orange;
  color: red;
  margin: 3px;
}
</style>
