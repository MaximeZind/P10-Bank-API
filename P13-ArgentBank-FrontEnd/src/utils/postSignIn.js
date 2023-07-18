import axios from 'axios';

export default async function postSignIn(email, password) {
  console.log(email, password);
  axios.post('http://localhost:3001/api/v1/user/login', {
    'email': `${email}`,
    'password': `${password}`
  })
    .then(response => {
      if (response.status === 200) {
        console.log(response);
        console.log(response.data.body.token);
        return getUserProfile(response.data.body.token);
      }
    }
    )
    .catch(error => console.log(error))
}

async function getUserProfile(token) {
  axios
    .post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(function (response) {
      if(response.status === 200){
      console.log(response.data.body);
      return response.data.body;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
