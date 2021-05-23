<template>
  <div>

    <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
    
    <div v-if="shoppingCart.length < 1">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Your shopping cart is empty.
      </div>
      <div class="dropdown-divider"></div>
    </div>


    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Total: <span>{{ shoppingCartTotal }} SEK</span>
        </div>
        <small class="text-muted">inc. VAT</small>
      </div>
      <button v-if="loggedIn" @click.stop="sendOrder" class="btn btn-primary">Save Order</button>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal', 'loggedIn', 'getUserId'])
  },
  methods: {
    ...mapActions(['saveOrder', 'cleanCart']),
    sendOrder() {
      let order = {
        orderItems: this.shoppingCart,
        orderTotal: this.shoppingCartTotal,
        orderUserId: this.getUserId
      }
      this.saveOrder(order)
      setTimeout(this.cleanCart, 1000)
      
    }
  }
}
</script>

<style>

</style>