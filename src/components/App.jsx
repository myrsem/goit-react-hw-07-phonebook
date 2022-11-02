import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/ContactFilter/ContactFilter';
import Phonebook from 'components/Phonebook/Phonebook';
import { useGetContactsQuery } from 'redux/contactAPI';

const App = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length > 0 && <Filter />}
      {isLoading && <p>Loading...</p>}
      {contacts?.length === 0 && !isLoading && (
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Contact list is empty
        </p>
      )}
      <ContactList />
    </Phonebook>
  );
};

export default App;
