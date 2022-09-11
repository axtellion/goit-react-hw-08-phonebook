import { Formik, ErrorMessage } from 'formik';
import {
  Title,
  Text,
  Btn,
  FormContact,
  FormInput,
  ErrorForm,
  Wrap,
} from './ContactForm.styled';
import * as yup from 'yup';
import { Box } from 'components/Box';
import { BiPlus } from 'react-icons/bi';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { toast } from 'react-toastify';
const values = { name: '', number: '' };

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const handleSubmit = (values, { resetForm }) => {
    let errorName = '';
    if (contacts) {
      errorName = contacts.find(contact => contact.name === values.name);
    }
    if (errorName) {
      toast.error('This contact is already added');
      return;
    }
    addContact(values);
    resetForm();
  };

  return (
    <Box
      as="section"
      mb="40px"
      mx="auto"
      width="600px"
      border="1px solid"
      py="30px"
      borderRadius="10px"
      bg="white"
      borderColor="#DCDCDC"
    >
      <Title>Added Form</Title>
      <Formik
        initialValues={values}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContact>
          <Wrap>
            <label>
              <Text>Name</Text>
              <FormInput type="text" name="name" />
              <ErrorMessage name="name" component={ErrorForm} />
            </label>
            <label>
              <Text>Number</Text>
              <FormInput type="tel" name="number" />
              <ErrorMessage name="number" component={ErrorForm} />
            </label>
          </Wrap>

          <Btn type="submit">
            <BiPlus />
            <span>Add contact</span>
          </Btn>
        </FormContact>
      </Formik>
    </Box>
  );
};
