import { useDispatch } from 'react-redux';
import '../App.scss'
import { Checkbox, CheckboxCheckedFilled } from '@carbon/icons-react';

const TodoCard = ({ todoList }) => {

    const dispatch = useDispatch()

    const handleArchive = (key) => {
        dispatch.TodoModel.setArchiveTodoItem({id: key, archiveValue: true})
    } 

    const handleDone = (key) => {
        dispatch.TodoModel.setIsDoneTodoItem({id: key, completeValue: true})
      }

    const handleDelete = (key) => {
        dispatch.TodoModel.deleteButton(key)
      }

    return (
        <>
            <ul>
                {
                    todoList.map(todo =>
                        <li
                            style={{ borderBottom: "solid 0.2px #8d8d8d", padding: "0.5rem 0.5rem", backgroundColor: '#f4f4f4', marginTop: '1rem', display: 'flex', display: todo.archive ? 'none' :'flex',justifyContent: 'space-between'}}
                            key={todo.id}
                        >
                            <p
                                style={{ display: 'flex', alignItems: 'center',textDecoration: todo.complete ? 'line-through' : 'none'  }}
                            ><Checkbox style={{marginTop: '0.15rem', marginRight: '0.5rem' ,display: todo.complete ? 'none' :'block' }} />
                            <CheckboxCheckedFilled style={{marginTop: '0.15rem' ,marginRight: '0.5rem' ,display: todo.complete ? 'block' : 'none' }} />
                                {todo.text} 
                            </p>
                            <span>
                                <button
                                    className="list--btn--hover"
                                    onClick={() => { handleArchive(todo.id) }}
                                >
                                    Archive
                                </button>
                                <button
                                    className="list--btn--hover"
                                    onClick={() => { handleDelete(todo.id) }}
                                >
                                    Remove
                                </button>
                                <button 
                                    className="list--btn--hover"
                                    onClick={() => handleDone(todo.id)}
                                >
                                    Done
                                </button>
                            </span>
                        </li>
                        )
                }
            </ul>
        </>
    )
}

export default TodoCard