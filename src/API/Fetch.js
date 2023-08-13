import { instance } from "./Instance";

export const getContacts = async () => {
  try {
    const response = await instance.get('/contacts');
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}; 