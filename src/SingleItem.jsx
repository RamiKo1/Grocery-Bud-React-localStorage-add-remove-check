import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  //   const [isChecked, setIsChecker] = useState(item.completed)
  return (
    <div className="single-item">
      <input
        type="checkbox"
        // value={isChecked}
        checked={item.completed}
        onChange={() => {
          editItem(item.id)
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          removeItem(item.id)
        }}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem

// In SingleItem, set up a state variable called isChecked with a default
// value of the item's completed property.
//  Render a checkbox and add inline
//   styles to add or remove the text-decoration: line-through
//   property based on the isChecked value.
//    Set up functionality to toggle the isChecked state
//     variable when the checkbox is clicked.
