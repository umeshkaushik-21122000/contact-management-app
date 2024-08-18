import  { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hook";
import {
  deleteContact,
  editContact,
  selectContact,
  toggleActive,
} from "store/contacts/contactSlice";
import ContactEditForm from "./ContactEditForm";
import ContactCard from "./ContactCard";


  const wrapperStyle = "grid grid-cols-3 gap-4 p-4";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContact);

  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editedFname, setEditedFname] = useState("");
  const [editedLname, setEditedLname] = useState("");

  const handleDelete = (id: string) => dispatch(deleteContact(id));
  const handleToggleActive = (id: string) => dispatch(toggleActive(id));

  const handleEdit = (id: string) => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      setEditingContactId(id);
      setEditedFname(contact.fName);
      setEditedLname(contact.lName);
    }
  };

  const handleSaveEdit = () => {
    if (editingContactId) {
      dispatch(
        editContact({
          id: editingContactId,
          fName: editedFname,
          lName: editedLname,
          isActive: true,
        })
      );
      setEditingContactId(null);
      setEditedFname("");
      setEditedLname("");
    }
  };

  return (
    <div className={wrapperStyle}>
      {contacts.map((contact) => (
        <div key={contact.id}>
          {editingContactId === contact.id ? (
            <ContactEditForm
              editedFname={editedFname}
              editedLname={editedLname}
              setEditedFname={setEditedFname}
              setEditedLname={setEditedLname}
              onSave={handleSaveEdit}
            />
          ) : (
            <ContactCard
              contact={contact}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleActive={handleToggleActive}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;

