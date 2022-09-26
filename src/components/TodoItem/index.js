// Write your code here
import './index.css'

const TodoItemList = props => {
  const {listItem, onDeleteList} = props
  const {title, id} = listItem

  const onDelete = () => {
    onDeleteList(id)
  }

  return (
    <li className="listContainer">
      <p className="title">{title}</p>
      <button onClick={onDelete} type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItemList
