import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {// тоже самое что и data
        paymentsList: [],// получили пустой обьект(хранилище)
        categories: []
    },
    mutations: {//любое изминение должно проходить через мутацию
        setPaymentListData(state, payload) {// 1q обьект текущего состояния,2. данные которые хотим загрузить в state
            //реактивность
            //state.paymentsList[0]=payload изминение(сохранение) загрузки по индексу 0
            //state.paymentsList=[...state.paymentsList]


            state.paymentsList = payload
        },
        addDataToPaymentList(state, payload){
            state.paymentsList.push(payload)
        },
        setCategoriesListData(state, payload){
           state.categories = payload // показываем куда ложим массив категорий
        }
    },
    getters: {//ВОзвращает что либо из state
        getPaymentsList: state => state.paymentsList,// передаем  state(paymentList)
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)// сумма всех value
        },
        getCategories: state=> state.categories// получаем категории

    },
    actions: {// бизнес логика помещается в actions
       fetchData({commit}){// fethData мутация, commit -деструктуризация(Store.commit(контекст нашего state))
          return new Promise((resolve)=>{// промис возвращает  
            setTimeout(()=>{//задержка отображения 2 секунды
                const items = [
                    { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                    { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                    { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
                    { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                    { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                    { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 },
                    { "id": 7, "date": "20.03.2020", "category": "Food", "value": 169 },
                    { "id": 8, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                    { "id": 9, "date": "22.03.2020", "category": "Sport", "value": 450 },
                    { "id": 10, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                    { "id": 11, "date": "24.03.2020", "category": "Education", "value": 1500 },
                    { "id": 12, "date": "25.03.2020", "category": "Food", "value": 200 }
                ]
                // for(let i=0; i < 20; i++){// логика обработки
                //         items.push({
                //             date: "05.08.2021",
                //             category: "Sport",
                //             value: i,
                //             id: i+1
                //         })
                // }
                resolve(items)
            },2000

            )

          })
          .then(res=> commit('setPaymentListData' , res))// вызов мутации и добавление её
       },

       fetchCategoryList({commit}){// fethData мутация, commit -деструктуризация(Store.commit(контекст нашего state))
        return new Promise((resolve)=>{// промис возвращает  
          setTimeout(()=>{//задержка отображения 2 секунды
              const categories = ['sport','food','internet', 'book']
             
              resolve(categories)
          },2000

          )

        })
        .then(res=> commit('setCategoriesListData' , res))// вызов мутации и добавление её
     }



    }


})