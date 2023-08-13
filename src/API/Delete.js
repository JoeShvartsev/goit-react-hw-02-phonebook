import { instance } from "./Instance";

export const deleteContact = async (contactId) => {
  try {
    const response = await instance.delete(`/contacts/${contactId}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};