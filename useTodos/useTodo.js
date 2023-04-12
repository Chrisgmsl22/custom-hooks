import { useReducer, useEffect } from 'react';
import { todoReducer } from './../08-useReducerVol2/todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra de la mente',
        done: false,
    },
    {
        id: new Date().getTime() + 1,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    },
];

const init = () => {
    // Recuperamos todo el objeto JSON y lo parseamos
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos ? storedTodos : initialState;
};

export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    //todosCount, pendingTodosCount
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    useEffect(() => {
        console.log(todos);
        // Trabajamos con el localStorage para persistir la informacion
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDeleteTodo = (id) => {
        // Esta es la accion que le quiero mandar al reducer
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        };
        // Para mandar la accion usamos dispatch
        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        };
        dispatch(action);
    };

    const handleNewTodo = (todo) => {
        // Esta es la accion que le quiero mandar al reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };
        // Para mandar la accion usamos dispatch
        dispatch(action);
    };

    

    return { 
        todos, 
        handleNewTodo, 
        handleToggleTodo, 
        todosCount, 
        pendingTodosCount,
        handleDeleteTodo
    };
};
