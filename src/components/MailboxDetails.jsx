import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const thisMailbox = props.mailboxes.find((mail) => mail._id === Number(mailboxId))
    console.log('Mailbox Object:', thisMailbox)

    if (!thisMailbox) {
      return <h2>404 Error: Mailbox not found!</h2>
    } 
      return (
        <div>
          <h2>Mailbox {thisMailbox._id}</h2>
          <dl>
            <dt>Box Size:</dt>
            <dd>{thisMailbox.boxSize}</dd>
            <dt>Owner:</dt>
            <dd>{thisMailbox.boxholder}</dd>
          </dl>
        </div>
      )
    }
  
  export default MailboxDetails