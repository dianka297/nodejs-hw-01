import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

export const removeLastContact = async () => {
    const data = await getAllContacts();
  data.pop();
  await updateContacts(data);
};

removeLastContact();
