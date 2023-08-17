import { instance } from './Instance';

export const deleteContact = async (contactId, token) => {
  try {
    const response = await instance.delete(`contacts/${contactId}`, {
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
