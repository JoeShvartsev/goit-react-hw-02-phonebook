import { instance } from "./Instance";

export const updateContacts = async (newContactData) => {
  try {
    const response = await instance.post('/contacts', newContactData);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};