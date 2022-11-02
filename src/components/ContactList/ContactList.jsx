import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactAPI';
import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(state => state.filter);

  const getFiltredContacts = () => {
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  const filtredContacts = getFiltredContacts();

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {contacts && (
        <List>
          {filtredContacts.map(contact => (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;