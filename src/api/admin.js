const url = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const postSignin = async password => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  try {
    const raw = JSON.stringify({ password });

    const res = await fetch(url + '/api/admin/', {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow'
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
};

export {
  postSignin
}