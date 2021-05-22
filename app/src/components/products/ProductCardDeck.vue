<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <ProductCard v-for="product in products" :key="product._id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard'
export default {
  name: 'ProductCardDeck',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>