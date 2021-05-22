<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">

      <div class="d-flex align-items-center">
        <img :src="item.product.image" alt="" class="img-fluid image-width">
        <div>
          <div><strong>{{ item.product.name }}</strong></div>
          <div><small>{{ item.quantity }} x {{ item.product.price }} SEK</small></div>
        </div>
      </div>

      <div>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button class="btn btn-dark" @click.stop="subtractProductFromCart(item)">-</button>
          <button class="btn btn-dark" @click.stop="addProductToCart(item)">+</button>
        </div>
        <button class="btn btn-danger btn-sm" @click.stop="removeProductFromCart(item)"><i class="fas fa-trash"></i></button>
      </div>
    </div>

    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  data() {
    return {
      quantity: 1
    }
  }, 
  methods: {
    ...mapActions(['addProductToCart', 'subtractProductFromCart', 'removeProductFromCart'])
  }
}
</script>

<style>
.image-width {
  width: 90px;
}
</style>