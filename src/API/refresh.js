import { instance, setTokenToLocalStorage } from './Instance';

export const refresh = async ()=> {
  try {
    const token = localStorage.getItem('token');
    console.log(token)
    const { data } = await instance.post('users/current',{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    console.log(data);
    setTokenToLocalStorage(data.token)
    return data;
  } catch (error) {
    throw error;
  }
};
