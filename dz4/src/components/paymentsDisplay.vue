<template>
<div lass="list">
  <div class="item" v-for="(item, index) in list" :key="index">
      {{ item.id }} - {{ item }}
  </div>


  </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props:{
        list:{
            type: Array, 
            default:()=>[],

        }
    }

}
</script>

<style>

</style>