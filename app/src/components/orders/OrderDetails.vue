<template>
  <div>
      <h1>{{product.product.name}}</h1>
      <h2>{{product.product.price}} SEK</h2>
      <h2>{{product.quantity}} pcs</h2>
  </div>
</template>
 
<script>
export default {
props: ['product']
}
</script>
 
<style>
 
</style>