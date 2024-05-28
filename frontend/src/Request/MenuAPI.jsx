import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetMenus() {
  const [mainNavData, setmainNavData] = useState([]);
  const [footerNavOneData, setfooterNavOneData] = useState([]);
  const [footerNavTwoData, setfooterNavTwoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
        setIsLoading(true);
        try {
            const responseMain = await axios.get("http://localhost/anabim/server/wp-json/wp/v2/menu/main_nav/");
            const responseOne = await axios.get("http://localhost/anabim/server/wp-json/wp/v2/menu/footer_nav_1/");
            const responseTwo = await axios.get("http://localhost/anabim/server/wp-json/wp/v2/menu/footer_nav_2/");
            
            setmainNavData(responseMain.data);
            setfooterNavOneData(responseOne.data);
            setfooterNavTwoData(responseTwo.data);
        } catch (error) {
            console.error(error);
        } 
        setIsLoading(false);
    };
    
    fetchMenuData();
  }, []);

  return { mainNavData, footerNavOneData, footerNavTwoData, isLoading };
}

export default useGetMenus;