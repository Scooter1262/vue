<template>
  <div class="calc">
{{  message }}

<div>
<input type="text"  placeholder="operand1"  v-model.number="operand1"/>
<input type="text"  placeholder="operand2"   v-model.number="operand2"/>
<div>
= {{ result }}
</div>
<div class="keyboard">
<button @click="div1">+</button>
<button @click="div2">-</button>
<button @click="div3">*</button>
<button @click="div4">/</button> 
<button @click="result = Math.pow(operand1, operand2)">POV</button>
<button @click="result = Math.trunc(operand1 / operand2 | 0)">CEIL</button>
</div>
  </div>  
  </div>  
</template>
 
<script>
export default {
 name: "Calculator",
 data:()=>({
     message:"Calculator",
     operand1: 0,
     operand2: 0,
     result: 0
}),
    methods: {
     doThan(text, event){
     console.log(text, event);

    },

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
        this.result = this.operand1 / this.operand2;
        },
   
   
    onfocus(){
    console.log('onfocus');
    },

    onKeyUp(){
    console.log('onKeyUp');
    }
}
 };
</script>