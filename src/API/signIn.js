import { instance, setTokenToLocalStorage } from './Instance';

export const signIn = async body => {
  try {
    const { data } = await instance.post('users/login', body);
    setTokenToLocalStorage(data.token)
    return data;
  } catch (error) {
    throw error;
  }
};
