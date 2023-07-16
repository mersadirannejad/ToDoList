import '../App.scss'
import AddInput from '../components/AddInput'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import SubmitButton from '../components/SubmitButton'
import TodoCard from '../components/TodoCard'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState()
  const todoList = useSelector(store => store.TodoModel.todoList)
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const handleInput = (value) => {
    setInput(value.toLowerCase())
  }

  const handleSubmit = () => {
    if (input.length > 0){
    dispatch.TodoModel.addNewTodo({
      text: input,
      complete: false,
      archive: false
    })}
    setInput('')
    inputRef.current.value = "";
  }

  return (
    <div className="center--container">
      <span>
        <Header />
        <SearchInput handleSearch={handleSearch} />
        <AddInput setValue={handleInput} ref={inputRef} />
        <SubmitButton handleSubmit={handleSubmit} />
        <TodoCard
          todoList={searchValue.length > 0 ? todoList.filter(todo => todo.text.includes(searchValue)) : todoList }
          handleSearch={handleSearch} />
      </span>
      <span className='footer'>
        <Link className='footer list--btn--hover' to={'/Archives'}>Archives</Link>
        <Link className='footer list--btn--hover' to={'/Done'}>Done</Link>
      </span>
    </div>
  ) 
  }

export default Home

