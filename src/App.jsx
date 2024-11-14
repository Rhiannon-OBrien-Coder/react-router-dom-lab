import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import './App.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<h2>Post Office</h2>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm mailboxes={mailboxes} addMailbox={addMailbox} />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      <Route path="*" element={<h2>404 Error: Page not found!</h2>} />
    </Routes> 
  </>
  )
}

export default App