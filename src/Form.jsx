import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error('please provide value')
      console.log('input is Empty')
      return
    }
    addItem(newItemName)

    //Clear Input
    setNewItemName('')
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            name="input"
            id="input"
            value={newItemName}
            onChange={(e) => {
              setNewItemName(e.target.value)
            }}
          />

          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form
