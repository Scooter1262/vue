<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My personal cost</div>
      </header>
      <div :class="[$style.content]">
        Total Value: {{ getFPV }}
        <payments-display :list="currentElemtnts" />
        <pagination :current="page" :n='n' :length="paymentsList.length" @paginate="onChangePage"/>
      </div>
      <div :class="[$style.content]">
        <add-payment-form @addNewPayment="addData" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import AddPaymentForm from './components/addPaymentForm.vue';
import Pagination from './components/pagination.vue';
import PaymentsDisplay from './components/paymentsDisplay.vue';

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      page:1,
      n: 5,
    } 
  },
  methods: {
    addData(newPayment) {
      this.addDataToStore(newPayment)
      this.paymentsList.push(newPayment);
    },
    ...mapMutations({
      loadData: "setPaymentListData",
      addDataToStore:"addDataToPaymentList "
    }),
    ...mapActions({
       fetchDataList: 'fetchData'
    }),
    onChangePage(p){
      this.page = p
     

    },
    // fetchData() {
    //   return [
    //     {
    //       date: "15.05.2021",
    //       categoru: "food",
    //       value: 130,
    //     },
    //     {
    //       date: "16.05.2021",
    //       categoru: "food",
    //       value: 190,
    //     },
    //     {
    //       date: "25.05.2021",
    //       categoru: "food",
    //       value: 160,
    //     },
    //   ];
    // },
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
    }),
    totalValue() {
      return 0;
    },
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElemtnts(){// обрезаем количество отображаемых элементов
      const {n, page} = this
      return this.paymentsList.slice(n *(page -1), n * (page -1)+n)
    }
  },

  created() {//момент создания
    //хук
    //this.paymentsList = this.fetchData()
    //this.$store.commit("setPaymentListData", this.fetchData()); // вызываем мутацию через коммит(любой вызов)
    // this.$store.dispatch('fetchData')
    this.fetchDataList()
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: block;
  height: 100%;
}
.title {
  font-size: 50px;
}
.content {
  padding-top: 50px;
}
</style>
