import { instance, setTokenToLocalStorage } from './Instance';

export const signUp = async body => {
  try {
    const { data } = await instance.post('users/signup', body);
    setTokenToLocalStorage(data.token)
    return data;
  } catch (error) {
    throw error;
  }
};
