import { Loader } from 'components/Loader/Loader';
import { useDeleteContactMutation } from 'redux/contactAPI';
import {
    Name,
    DeleteBtn,
  } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <Name>
        {contact.name}: {contact.phone}
      </Name>
      <DeleteBtn
        onClick={() => {
          deleteContact(contact.id);
        }}
        disabled={isDeleting}
      >
        {isDeleting ? <Loader size={14} /> : 'Delete'}
      </DeleteBtn>
    </>
  );
}

export default ContactItem;
