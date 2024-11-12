import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  _id: 0,
  boxSize: "Small",
  boxholder: "",
}

const MailboxForm = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">Box Size:</label>
        <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        <label htmlFor="boxholder">Owner:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default MailboxForm