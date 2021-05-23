<template>
  <div class="container mt-5">
    <h1 class="d-flex justify-content-center">Order history</h1>
    <!-- <button class="btn btn-primary">List orders</button>
    <button class="btn btn-primary">Log Out</button> -->
    <div class="mx-0">
    <Order-card v-for="order in orders" :key="order._id" :order="order" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import OrderCard from '../components/orders/OrderCard'
export default {
  components: {
    OrderCard
  },
  data() {
    return {
      listorderspressed: false
    }
  },
  computed: {
    ...mapGetters (['getUserId', 'orders'])
  },
  methods: {
    ...mapActions (['getOrders']),
   
  },
  created() {
    console.log(this.getUserId)
    this.getOrders(this.getUserId)
  }
}
</script>

<style>

</style>