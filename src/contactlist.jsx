import React, { useEffect, useState } from "react";

function ContactList({ onSelectContact }) {
  const [contacts, setContacts] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} onClick={() => onSelectContact(contact)}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;