import axios from 'axios';

export default async function postSignIn(email, password) {
  const dataResponse = await axios.post('http://localhost:3001/api/v1/user/login', {
    'email': `${email}`,
    'password': `${password}`
  });
  if (dataResponse.status === 200) {
    return await getUserProfile(dataResponse.data.body.token);
  }
}

async function getUserProfile(token) {
    const dataResponse = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    if (dataResponse.status === 200) {
      return dataResponse.data.body;
    }
}
