import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetUserData() {
  const [instructorData, setinstructorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ourUsername = "key_37767e28b64e7068d2f44e692a97f3aa";
    const ourPassword = "secret_1797703cca9a2444a3b8e74c1a1e199fbaed7ab13dd64627510041923c73a108";
    const urlAPI = "http://localhost/anabim/server/wp-json/wp/v2/users/";

    setIsLoading(true);
    axios({
      method: 'get',
      url: urlAPI,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${ourUsername}:${ourPassword}`),      
      },
    })
      .then(response => {
        setinstructorData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });

  }, []);

  return { instructorData, isLoading };
}

export default useGetUserData;