import "./App.css";
import { useState } from 'react';
import ContactList from "./components/ContactList";




export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <ContactList />
    </>
  );
}
