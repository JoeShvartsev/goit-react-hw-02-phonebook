import { instance, setTokenToLocalStorage } from './Instance';

export const refresh = async (token)=> {
  try {
    console.log(token)
    const { data } = await instance.post('users/current/',{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    setTokenToLocalStorage(data.token)
    return data;
  } catch (error) {
    throw error;
  }
};
