<template>
  <div>
      <input type="text" :v-model="date" placeholder="date"/>
      <input type="text" :v-model="value" placeholder="value"/>
      <input type="text" :v-model="category" placeholder="category"/>
      
      <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
name: "AddPaymentForm",
data() {
    return {
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
       value,
       category
      }
console.log("emit:addNewPayment",data)
this.$emit('addNewPayment', data)// наш компонент генерирует событие с именем адд.... 
     }    
  },
};
</script>

<style>

</style>