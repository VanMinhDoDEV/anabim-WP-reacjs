import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetPosts() {
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const urlAPI = "http://localhost/anabim/server/wp-json/wp/v2/posts/";

    const urlAPI = `${process.env.REACT_APP_API_ROOT_WP}/posts/`;


    setIsLoading(true);
    axios({
      method: 'get',
      url: urlAPI,
    })
      .then(response => {
        setPostsData(response.data);
        console.log();
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });

  }, []);

  return { postsData, isLoading };
}

export default useGetPosts;