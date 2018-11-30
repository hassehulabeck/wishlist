<template>
  <div>
    <section v-if="message.length>0"> {{ message }} </section>
    <h2>Ändra en produkt</h2>
    <label for="">Produkt</label>
    <input
      type="text"
      name="name"
      v-model="product.name">
    <label for="">Pris</label>
    <input
      type="number"
      name="price"
      v-model="product.price">
    <label for="">Färg</label>
    <input
      type="text"
      name="color"
      v-model="product.color">
    <button @click="editera(product)">Editera</button>
  </div>
</template>

<script>
  import {db} from '../firebase-config'

  export default {
    name: 'edit',
    data() {
      return {
        name: '',
        price: 0,
        color: '',
        message: ''
      }
    },
    firebase: {
      products: db.ref('products')
    },
    computed: {
      product() {
        return this.$route.params.product
      }
    },
    methods: {
      editera (product) {
        this.$firebaseRefs.products.child(product['.key']).child('name').set(product.name)
        this.$firebaseRefs.products.child(product['.key']).child('price').set(product.price)
        this.$firebaseRefs.products.child(product['.key']).child('color').set(product.color)
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
