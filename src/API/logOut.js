import { instance } from './Instance';

export const logOut = async token => {
  try {
    const {data} = await instance.post('users/logout',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data; 
  } catch (error) {
    throw error;
  }
};

