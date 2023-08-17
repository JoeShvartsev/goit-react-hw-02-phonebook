import { instance } from './Instance';

export const signIn = async body => {
  try {
    const { data } = await instance.post('users/login', body);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
