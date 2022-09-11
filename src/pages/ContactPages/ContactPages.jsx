import { Title, WrapList } from './ContactPages.styled';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

import { Loader } from '../../components/Loader/loader';
import 'react-toastify/dist/ReactToastify.css';

import { useFetchContactsQuery } from 'redux/contactsApi';

export const ContactPages = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const contactList = contacts && <ContactList contacts={contacts} />;
  return (
    <>
      <ContactForm />
      <WrapList>
        <Title>Contacts</Title>
        <Filter />
        {isFetching === true ? <Loader /> : contactList}
      </WrapList>
    </>
  );
};
