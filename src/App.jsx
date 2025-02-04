import React, { useState } from "react";
import ContactList from "./ContactList";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div>
      <h2>My Fave Contacts</h2>
      {selectedContact ? (
        <div>
          <h2>Selected Contact</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          <button onClick={() => setSelectedContact(null)}>Back to List</button>
        </div>
      ) : (
        <ContactList onSelectContact={setSelectedContact} />
      )}
    </div>
  );
}

export default App;