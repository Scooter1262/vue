<template>
  <div class="pagination-wrapper">
      <div @click="onClick(current-1)"> up </div><!-- -1 или +1 отображение страницы -->
     <div class='page'  v-for="page in amount" :key="page" @click="onClick(page)" >
        {{page}}
     </div>
      <div @click="onClick(current+1)"> down </div>

  </div>
</template>

<script>
export default {
 name: "Pagination" ,
 props: {
     length: Number, // кол-во всех элементов
     n: {// количество отображаемых элементов
         type: Number,
         default: 5
     }, 
     current: Number // текущая страница
 },
 computed:{
     amount(){// получаем разбивку на страницы
         return Math.ceil(this.length / this.n) // делим длинну на колво отображаемых страниц
     }
 },
 methods: {
     onClick(pages){
         if(pages<1 || pages>this.amount){
             return
         }
this.$emit("paginate", pages)
     }
 },
}
</script>

<style scoped lang="scss">
.pagination-wrapper{
    display: flex;
    &>div{
            padding: 10px;
            &.active{
                color:aliceblue
            }
    }

}

</style>