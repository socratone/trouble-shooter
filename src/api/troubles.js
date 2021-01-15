const url = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const getTroublesItems = async () => {
  try {
    const res = await fetch(url + '/api/troubles');
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const getTroublesItem = async id => {
  try {
    const res = await fetch(url + '/api/troubles/' + id);
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const postTroublesItem = async item => {
  const headers = new Headers();
  // const token = localStorage.getItem('token')
  // headers.append('x-auth-token', token);
  headers.append('Content-Type', 'application/json');
  const page = JSON.stringify(item.page)
  console.log('page:', page)

  try {
    const raw = JSON.stringify({ 
      title: item.title,
      category: item.category, 
      page
    });

    const res = await fetch(url + '/api/troubles/', {
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

const putTroublesItem = async (item, id) => {
  const headers = new Headers();
  // const token = localStorage.getItem('token')
  // headers.append('x-auth-token', token);
  headers.append('Content-Type', 'application/json');
  const page = JSON.stringify(item.page)
  console.log('page:', page)

  try {
    const raw = JSON.stringify({ 
      title: item.title,
      category: item.category, 
      page
    });

    const res = await fetch(url + '/api/troubles/' + id, {
      method: 'PUT',
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
  getTroublesItems,
  getTroublesItem,
  postTroublesItem,
  putTroublesItem,
};
