<template>
  <div>
      
      <button v-on:click="isHidden = !isHidden">ADD NEW COST+</button>
    
<br> 
<div v-if="!isHidden">
      <input type="text" v-model="date" placeholder="date"/>
      <br>
      <input type="text" v-model="category" placeholder="category"/>
      <br>
      <input type="text" v-model="value" placeholder="value"/>
      <button @click="onSave">Save</button>
      </div>
    
  </div>
 
</template>

<script>
export default {
name: "AddPaymentForm",
data:()=> {
    return {
      isHidden: true,
        value: "",
        category: "",
        date: "",
          
    };
},

computed: {
getCurrentDate () {
  const today = new Date();
  const d = today.getDate()
  const m = today.getMonth() +1
  const y = today.getFullYear()
  return `${d}.${m}.${y}`


}
},
methods: {
   
 onSave(){
   const { value ,  category } = this
   const data = {
       
        date: this.date || this.getCurrentDate,
        category,
        value
      }
console.log("emit:addNewPayment",data)
this.$emit('addNewPayment', data) 
     }    
  },
};
</script>

<style>

</style>