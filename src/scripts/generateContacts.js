import { createFakeContact } from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
    const newContactList = Array(number).fill(0).map(createFakeContact);
    const contactList = await getAllContacts();
    contactList.push(...newContactList);
  
    await updateContacts(contactList);
};

generateContacts(5);
