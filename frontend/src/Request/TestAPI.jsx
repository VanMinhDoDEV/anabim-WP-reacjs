import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestAPI() {
  const [data, setData] = useState(null);


  //http://localhost/anabim/server/wp-json/custom/v1/course-price/

  useEffect(() => {
    const ourUsername = "key_37767e28b64e7068d2f44e692a97f3aa";
    const ourPassword = "secret_1797703cca9a2444a3b8e74c1a1e199fbaed7ab13dd64627510041923c73a108";
    const urlAPI = "http://localhost/anabim/server/wp-json/tutor/v1/courses";

    
    axios({
      method: 'get',
      url: urlAPI,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${ourUsername}:${ourPassword}`), // Now using btoa for base64 encoding
      },
    }).then(response => {
      console.log(response.data);
     
      

      


      
      // let posts = response.data.data.posts;

      // // Sử dụng 'map()' để duyệt qua từng 'post' trong mảng 'posts'
      // let courseDurations = posts.map(post => post.additional_info.course_duration);

      // // In ra mảng 'courseDurations'
      // console.log(courseDurations);







      setData(response.data);
    }).catch(error => {
      console.error(error);
    });

  }, []); // thêm dependency array để chỉ chạy một lần sau khi component mounted

  return (
    <div>{data ? (
      <div>
         {/* Render dữ liệu tại đây */}
         <h2 className='center'>GET dữ liệu thành công!</h2>
        
      </div>
   ) : (
      <p>Đang tải...</p>
   )}</div>
  );
}

export default TestAPI;