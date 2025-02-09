import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        if (!response.ok) throw new Error("Failed to fetch contact");

        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) {
    return null;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Username:</strong> {contact.username}</p>
    </div>
  );
}
