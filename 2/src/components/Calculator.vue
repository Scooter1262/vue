<template>
  <div class="calc">
{{  message }}

<div>
<input type="text"  placeholder="operand1"  v-model.number="operand1"/>
<input type="text"  placeholder="operand2"   v-model.number="operand2"/>
<div>
= {{ result }}
</div>
<div v-if="error">
    {{error}}
</div>
<!-- <div class="keyboard">
<button @click="calculate('+')">+</button> внизу заменет этот див(не забыть обьявить массив)
<button @click="calculate('-')">-</button>
<button @click="calculate('*')">*</button>
<button @click="calculate('/')">/</button>  -->
<div class="keyboard">
    {{operation}}
    <button v-for="operation in operations" 
                      :key="operation"
                      @click="calculate(operation)"
                      :title="operation"
                      > 
                      {{operation}} 
    </button>
</div>

<label> 
    <input type="checkbox" v-model="virtual" />Отобразить виртуальную клавиатуру
</label>
<br>


  <div class="virtual" v-if="virtual">
<button v-for="number in numbers" :key="number" @click="enterNum(number)"  >{{ number }} </button>
<button @click="dell">del </button>
  <br/>
<label>
    <input type="radio"  value="operand1" v-model="operand">operand1</label>

<label>
    <input type="radio"  value="operand2" v-model="operand">operand2</label>

  </div>  
 </div>     
</div> 
   
</template> 
    <!-- <button v-for="operation in myCollection" 
                      :key="operation"
                      @click="calculate(operation)"
                      :title="operation" 
                      
                      > 
                      {{operation}} 
    </button> -->


 

<!-- <button @click="result = Math.pow(operand1, operand2)">POV</button>
<button @click="result = Math.trunc(operand1 / operand2 | 0)">CEIL</button> -->


 
<script>
export default {
 name: "Calculator",
 data:()=>({
     message:"Calculator",
     operand1: '',
     operand2: '',
     result: 0,
      virtual:false,
      error: '',
      operations: ['+','-','*','/'],
     numbers: [0,1,2,3,4,5,6,7,8,9],
      operand:''
       
 }),    


   methods: {
dell(){
    this[this.operand]= +String(this[this.operand]).slice(0,-1)
},

 enterNum(number){
           this[this.operand] = +(this[this.operand] += String(number))
       },
calculate(operation){
    this.error = ''// обновляем свич чтоб ошибка убиралась
    switch(operation){
        case '+':
            this.div1()
            break;
        case '-':
            this.div2()
            break;
        case '*':
            this.div3()
            break;
        case '/':
            this.div4()
            break;

}
},
    //  doThan(text, event){
    //  console.log(text, event);

    // },

    div1 (){
        this.result = this.operand1 + this.operand2;
        },
    div2 (){
        this.result = this.operand1 - this.operand2;
        },
    div3 (){
        this.result = this.operand1 * this.operand2;
        },
    div4 (){
        const {operand1, operand2}= this
        if(operand2 === 0){
            this.error = "на 0 делить нельзя";

            }else{
        this.result = operand1 / operand2;
        }
        },
   
   
    // onfocus(){
    // console.log('onfocus');
    // },

    // onKeyUp(){
    // console.log('onKeyUp');
    // }<div id="application">
  
}
 };
</script>

