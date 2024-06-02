import { useState, useEffect } from 'react';
import axios from 'axios';

function useCoursesAPI() {
  const [dataWPCourses, setDataWPCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const urlAPIWP = "http://localhost/anabim/server/wp-json/wp/v2/courses";

      setIsLoading(true);
      try {
        const responseWP = await axios.get(urlAPIWP);

        setDataWPCourses(responseWP.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { dataWPCourses, isLoading, error };
}

export default useCoursesAPI;