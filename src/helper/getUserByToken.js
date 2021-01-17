import jwtDecode from 'jwt-decode';

const getUserByToken = token => {
  try {
    const user = jwtDecode(token);
    return JSON.parse(user.data);
  } catch (error) {
    return { account: null };
  }
};

export default getUserByToken;