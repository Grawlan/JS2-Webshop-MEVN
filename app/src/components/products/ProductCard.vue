<template>
  <div class="col">
    <div class="card h-100 p-3">
      <img :src="product.image" alt="..." class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <router-link :to="{ name: 'ProductDetails', params: { id: product._id }}" type="button" class="btn btn-primary">Show Product</router-link>
           <button class="btn btn-primary" @click="addProductToCart({ product, quantity })" >Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {
      quantity: 1
    }
  }, 
  methods: {
    ...mapActions(['addProductToCart'])
  }
}
</script>

<style>

</style>