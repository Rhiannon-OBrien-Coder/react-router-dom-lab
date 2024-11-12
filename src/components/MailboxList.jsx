import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
      <>
        <h2>Mailboxes</h2>
        <ul>
          {props.mailboxes.map((thisMailbox) => (
            <li key={thisMailbox._id}>
            <Link to={`/mailboxes/${thisMailbox._id}`}>{thisMailbox._id}</Link>
          </li>
          ))}
        </ul>
      </>
    )
  }
  
  export default MailboxList