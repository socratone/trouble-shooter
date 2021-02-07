const axios = require('axios');
const url = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const postSignin = async password => {
  try {
    const res = await axios.post(url + '/api/admin/', { password });
    const result = res.data;
    return result;
  } catch (ex) {
    if (
      ex.response && 
      ex.response.status === 400 ||
      ex.response.status === 500
    ) {
      return { error: ex.response.data.error };
    }
    return { error: { message: '알 수 없는 에러가 발생했습니다.' } }
  }
};

export {
  postSignin
}