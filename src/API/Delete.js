import { instance } from "./Instance";

export const deleteContact = async (contactId) => {
  try {
    const response = await instance.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};