import { useAppSelector, useAppDispatch } from "store/hook";
import { selectContact } from "store/contacts/contactSlice";
import { modalState, toggleState } from "store/modal/modalSlice";
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

const buttonStyle = "bg-black rounded-md hover:bg-white hover:text-black border border-gray-500 p-2 px-3 text-white";
const imageStyle = 'w-full h-auto';

const CreateContact = () => {
  const contacts = useAppSelector(selectContact);
  const showModal = useAppSelector(modalState);
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDialogElement>(null);

  const setShowModal = (isOpen: boolean) => {
    dispatch(toggleState(isOpen));
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  };

  useEffect(() => {
    if (showModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  return (
    <div className="flex flex-col items-center p-4 text-center gap-4">
      <button onClick={() => setShowModal(true)} className={buttonStyle}>
        Create Contact
      </button>
      <dialog ref={modalRef} className="border border-2 rounded shadow-xl">
        <ContactForm onClose={() => setShowModal(false)} />
      </dialog>
      {contacts.length === 0 && !showModal && (
        <>
          <img className={imageStyle} src='/noContact.svg' alt="no contact found" />
          <p>No Contact found. Please add contact from create contact button</p>
        </>
      )}
    </div>
  );
};

export default CreateContact;
