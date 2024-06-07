import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetClient() {
  const [clientData, setClientData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const urlAPI = "http://localhost/anabim/server/wp-json/wp/v2/client";
    const urlAPI =  `${process.env.REACT_APP_API_ROOT_WP}/client`;


    setIsLoading(true);
    axios({
      method: 'get',
      url: urlAPI,
    })
      .then(response => {
        setClientData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });

  }, []);

  return { clientData, isLoading };
}

export default useGetClient;