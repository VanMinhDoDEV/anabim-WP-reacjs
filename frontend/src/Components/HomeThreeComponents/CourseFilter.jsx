import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseFilter = () => {
  const [categoryNames, setCategoryNames] = useState([]);
  const [activeData, setActiveData] = useState(0);
  
  const handleListItemClick = (item) => {
    setActiveData(item);
    // You can also add console.log here for debugging
    console.log(`Item click: ${item}`);
    console.log(`activeData: ${activeData}`);
  };

  useEffect(() => {
    axios.get("http://localhost/anabim/server/wp-json/wp/v2/course-category")
      .then((response) => {
        const names = response.data.map(category => category.name);
        setCategoryNames(names);
      })
      .catch((error) => {
        console.error("There was an error retrieving the data", error);
      });
  }, []);

  return (
    <ul className="filter-list flex xl:space-x-[39px] space-x-4 " style={{ textTransform: 'capitalize' }}>
        {['all', ...categoryNames].map((item, index) => (
            <React.Fragment key={index}>
                {item === "all" ? (
                    <li
                        className={activeData === 0 ? "active filter" : "filter"}
                        onClick={() => handleListItemClick(0)}
                    >
                        {item}
                    </li>
                ) : (
                    <li
                        className={activeData === item ? "filter active" : "filter"}
                        onClick={() => handleListItemClick(item)}
                    >
                        {item}
                    </li>
                )}
            </React.Fragment>
        ))}
    </ul>
  );
}

export default CourseFilter;