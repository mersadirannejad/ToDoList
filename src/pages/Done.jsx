import { Link } from 'react-router-dom'
import '../App.scss'
import { useDispatch, useSelector } from "react-redux"


const Done = () => {

    const dispatch = useDispatch()
    const done = useSelector(store => store.TodoModel.todoList.filter(todo => todo.complete === true))


    const handleUnDone = (key) => {
        dispatch.TodoModel.setIsDoneTodoItem({ id: key, compeleteValue: false })
    }


    const handleDelete = (key) => {
        dispatch.TodoModel.deleteButton(key)
    }

    return (
        <div className="center--container">
            <span>
                <h1 style={{ textAlign: 'center' }}>Done</h1>
                <ul >
                    {
                        done.map(done =>
                            <li style={{
                                borderBottom: "solid 0.2px #8d8d8d", padding: "0.5rem 0.5rem",
                                backgroundColor: '#f4f4f4', display: 'flex', flexDirection: 'row',
                                marginTop: '1rem', gap: '1rem', justifyContent: 'space-between'
                            }}
                                key={done.id}>
                                <p style={{ display: 'flex', alignItems: 'center' }}>{done.text}</p>
                                <span>
                                    <button
                                        className="list--btn--hover"
                                        onClick={() => { handleDelete(done.id) }}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="list--btn--hover"
                                        onClick={() => { handleUnDone(done.id) }}
                                    >
                                        Undone
                                    </button>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </span>
            <span className='footer'>
                <Link className='footer list--btn--hover' to={'/'}>Home</Link>
                <Link className='footer list--btn--hover' to={'/Archives'}>Archives</Link>
            </span>
        </div>
    )
}

export default Done