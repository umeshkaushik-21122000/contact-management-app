// components/TextInput.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { addContact } from "store/contacts/contactSlice";
import { toggleState } from "store/modal/modalSlice"; 
import TextInput from "./TextInput";
import RadioGroup from "./RadioGroup";
import FormContainer from "./FormContainer";



const ContactForm = ({ onClose }:any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    isActive: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, isActive: value === "active" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fName && formData.lName) {
      dispatch(addContact({ id: Date.now().toString(), ...formData }));
      setFormData({ fName: "", lName: "", isActive: true });
      dispatch(toggleState(false));
      navigate("/contacts");
    }
    onClose();
  };
  const buttonStyle = "bg-black rounded-md hover:bg-white hover:text-black border border-gray-500 p-2 px-3 text-white";
  return ( 
    <FormContainer>
      <h2 className="self-center text-2xl">Add Contact</h2>
      <TextInput
        id="fName"
        name="First Name"
        placeholder="Enter your first name!"
        value={formData.fName}
        onChange={handleInputChange}
        maxLength={15}
      />
      <TextInput
        id="lName"
        name="Last Name"
        placeholder="Enter your last name!"
        value={formData.lName}
        onChange={handleInputChange}
        maxLength={15}
      />
      <RadioGroup
        value={formData.isActive}
        onChange={handleRadioChange}
      />
      <button
        type="submit"
        className={buttonStyle}
        onClick={handleSubmit}
      >
        Save Number
      </button>
    </FormContainer>
  );
};

export default ContactForm;
