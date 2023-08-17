import { instance } from './Instance';

export const signUp = async body => {
  try {
    const { data } = await instance.post('users/signup', body);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
