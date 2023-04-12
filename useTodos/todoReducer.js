export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            //Retornamos un nuevo state(nuevo arreglo)
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })

        default:
            return initialState; //Siemore se regresa el initialState
    }
}


/**
 * Filter regresa un nuevo arreglo
 * 
 * Dentro del switch, tenemos que regresar siempre un estado, SIEMPRE
 */