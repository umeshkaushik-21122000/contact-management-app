


const ContactEditForm = ({
    editedFname,
    editedLname,
    setEditedFname,
    setEditedLname,
    onSave,
  }: any) => {
    const inputStyle = "px-2 m-2 rounded border";
    const saveButtonStyle =
      "bg-black hover:bg-aliceblue hover:text-black w-full text-white p-2 rounded-md";
    return(
        <div className="flex border flex-col rounded p-6 shadow-xl max-w-screen-sm">
          <label htmlFor="fName">
            First Name:
            <input
              id="fName"
              type="text"
              className={inputStyle}
              placeholder="Enter your first name"
              value={editedFname}
              onChange={(e) => setEditedFname(e.target.value)}
            />
          </label>
      
          <label htmlFor="lName">
            Last Name:
            <input
              id="lName"
              type="text"
              className={inputStyle}
              placeholder="Enter your last name"
              value={editedLname}
              onChange={(e) => setEditedLname(e.target.value)}
            />
          </label>
          <button className={saveButtonStyle} onClick={onSave}>
            Save
          </button>
        </div>
      );
  }

  export default ContactEditForm;