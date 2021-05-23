<template>
  <div>
    <div class="card text bg-light border p-2">
      <h1>Order Id: {{ order._id }}</h1>
      <h2>{{ order.UserId }}</h2>
      <order-details v-for="(product, index) in order.orderItems" :key="index" :product="order.orderItems[index]"/>
      <p>Total: {{ order.orderTotal }} SEK</p>
    </div>
    <div class="pb-2"></div>
  </div>
</template>

<script>
import OrderDetails from './OrderDetails.vue'
export default {
  name: 'OrderCard',
  props: ['order'],
  components: {
    OrderDetails
  }

}
</script>

<style>

</style>