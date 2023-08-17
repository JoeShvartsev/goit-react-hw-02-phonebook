import { instance } from './Instance';

export const updateContacts = async (newContactData, token) => {
  try {
    const response = await instance.post('contacts', newContactData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
