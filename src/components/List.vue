<template>
  <div>
    <h1>Alla produkter</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'edit', params: {product: product} }">{{ product.name }}</router-link>  ({{ product.price }}:-)
        <a @click="remove(product)">x</a>
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
    products: db.ref('products')
  },
  methods: {
    remove(product) {
      this.$firebaseRefs.products.child(product['.key']).remove()
    },
    edit(product) {
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
</style>
