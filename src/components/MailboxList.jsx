import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
      <div>
        <h2>Mailboxes</h2>
        <ul>
          {props.mailboxes.map((thisMailbox) => (
            <li key={thisMailbox._id} className='mail-box'>
            <Link to={`/mailboxes/${thisMailbox._id}`}>Box: {thisMailbox._id}</Link>
          </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default MailboxList