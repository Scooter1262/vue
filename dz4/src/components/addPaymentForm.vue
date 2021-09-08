<template>
  <div>
    <button v-on:click="isHidden = !isHidden">ADD NEW COST+</button>

    <br />
    <div v-if="!isHidden">
      <input type="text" v-model="date" placeholder="date" />
      <br />
      <select v-model="category" v-if="options">
        <option v-for="option in options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>

      <!--<input type="text" v-model="category" placeholder="category"/> -->
      <br />
      <input type="number" v-model.number="value" placeholder="value" />
      <button @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AddPaymentForm",
  data: () => {
    return {
      isHidden: true,
      value: "",
      category: "",
      date: "",
    };
  },

  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    ...mapActions(['fetchCategoryList']),
    
    onSave() {
      const { value, category } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      console.log("emit:addNewPayment", data);
      this.$emit("addNewPayment", data);
    }
  },
  created() {
    this.fetchCategoryList();
  }
};
</script>

<style>
</style>