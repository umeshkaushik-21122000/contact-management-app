
const ContactCard = ({ contact, onEdit, onDelete, onToggleActive }: any) =>{
    const buttonStyle =
  "bg-black rounded-md hover:bg-white hover:text-black border border-gray-500 p-2 px-3 text-white";
const cardStyle = "p-4 bg-white rounded border col-span-1";
    return (
        <div className={cardStyle}>
          <h4 className="text-lg font-semibold capitalize">{`${contact.fName} ${contact.lName}`}</h4>
          <p className="uppercase">{contact.isActive ? "Active" : "Inactive"}</p>
          <div className="flex gap-2 mt-4">
            <button className={buttonStyle} onClick={() => onEdit(contact.id)}>
              Edit
            </button>
            <button className={buttonStyle} onClick={() => onDelete(contact.id)}>
              Delete
            </button>
            <button className={buttonStyle} onClick={() => onToggleActive(contact.id)}>
              Toggle Active
            </button>
          </div>
        </div>
      );
}
  

  export default ContactCard;