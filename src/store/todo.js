import { createModel } from "@rematch/core";

export const TodoModel = createModel()({
    state: {
        count: 0,
        todoList: []
    },
    reducers: {
        setCount: (state, payload) => ({
            ...state,
            count: payload,
        }),
        setNewTodo: (state, payload) => {
           state.todoList.push(payload)
           return {
            ...state,
           }
        },
        setArchiveTodoItem: (state, payload) => {
            const newTodoList = state.todoList.map(todo => todo.id === payload.id ? {...todo, archive: payload.archiveValue } : todo)
            return {
                ...state,
                todoList : newTodoList
            }
        },
        setIsDoneTodoItem: (state, payload) => {
            const doneTodoList = state.todoList.map(todo => todo.id === payload.id ? {...todo, complete: payload.completeValue } : todo)
            return {
                ...state,
                todoList : doneTodoList
            }
        },
        filteredTodo: (state,payload) => ({
            ...state,
            todoList: state.todoList.filter(todo => todo.archive === payload)
        }),
        deleteButton: (state,payload) => ({
            ...state,
            todoList: state.todoList.filter(item => item.id !== payload)
        }),
 },
 effects: (dispatch) => ({
    addNewTodo(newTodo, rootState) {
        dispatch.TodoModel.setCount(rootState.TodoModel.count + 1)
        dispatch.TodoModel.setNewTodo({...newTodo, id: rootState.TodoModel.count})
    }
 })
});

