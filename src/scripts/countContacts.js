// import { PATH_DB } from '../constants/contacts.js';
import getAllContacts from './getAllContacts.js';

export const countContacts = async () => {
  const data = await getAllContacts();
  return data.length;
};

console.log(await countContacts());
