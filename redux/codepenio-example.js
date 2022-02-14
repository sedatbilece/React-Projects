const  {createStore}=Redux;// CreateStore reduxtan oluşturuluyor

const initialState={//stateimiz ve içindeki değişkenler
  todos:[],
  posts:[]
}

  function reducer(state=initialState,action){//reducer fonksiyonumuz hangi typeda ne olacağı işlemleri için
  
     switch(action.tyype){
         case:'ADD_TODO':{
           todos: [...state.todos,action.payload]
         }
       default:{
         return state;
       }
     }//SWİTCH END
  }

const store= createStore( reducer  );// createstore ile store oluşturuluyor bağlayıcı reducer veriliyor

store.subscribe(()=>{//redux storeda değişiklik olduğunda subscribe fonk çağrılır 
  
  console.log( "state yenilendi" , store.getState() );//storea ulaşır ve yazdırır
})

const todoAction={type:"ADD_TODO",payload:"learn redux"};// bir action oluşturduk

store.dispatch(todoAction)
