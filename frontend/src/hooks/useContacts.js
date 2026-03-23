import { useState } from "react";

export default function useContacts() {

  const [contacts, setContacts] = useState([
    {
      id: "1",
      name: "Main Wallet",
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      chain: "Ethereum"
    },
    {
      id: "2",
      name: "Exchange Deposit",
      address: "0x1234567890123456789012345678901234567890",
      chain: "Polygon"
    }
  ]);

  const addContact = (contact) => {

    const newContact = {
      id: Date.now().toString(),
      ...contact
    };

    setContacts((prev) => [...prev, newContact]);
  };

  const removeContact = (id) => {

    setContacts((prev) =>
      prev.filter((c) => c.id !== id)
    );

  };

  const updateContact = (id, updatedContact) => {

    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, ...updatedContact } : c
      )
    );

  };

  return {
    contacts,
    addContact,
    removeContact,
    updateContact
  };
}