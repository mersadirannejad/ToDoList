import { Link } from 'react-router-dom'
import '../App.scss'
import { useDispatch, useSelector } from "react-redux"


const Archives = () => {

    const dispatch = useDispatch()
    const archive = useSelector(store => store.TodoModel.todoList.filter(todo => todo.archive === true))


    const handleArchive = (key) => {
        dispatch.TodoModel.setArchiveTodoItem({ id: key, archiveValue: false })
    }

    const handleDelete = (key) => {
        dispatch.TodoModel.deleteButton(key)
    }

    return (
        <div className="center--container">
            <span>
                <h1 style={{ textAlign: 'center' }}>Archive</h1>
                <ul >
                    {
                        archive.map(archive =>
                            <li style={{ borderBottom: "solid 0.2px #8d8d8d", padding: "0.5rem 0.5rem", backgroundColor: '#f4f4f4', display: archive.archive ? 'flex' : 'none', flexDirection: 'row', marginTop: '1rem', gap: '1rem', justifyContent: 'space-between' }} key={archive.id}>
                                <p style={{ display: 'flex', alignItems: 'center' }}>{archive.text}</p>
                                <span>
                                    <button
                                        className="list--btn--hover"
                                        onClick={() => { handleDelete(archive.id) }}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="list--btn--hover"
                                        onClick={() => { handleArchive(archive.id) }}
                                    >
                                        Unrchive
                                    </button>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </span>
            <span className='footer'>
            <Link className='footer list--btn--hover' to={'/'}>Home</Link>
                <Link className='footer list--btn--hover' to={'/Done'}>Done</Link>
            </span>
        </div>
    )
}

export default Archives 