import React, { useEffect, useState } from 'react';

const Github = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/RishabhRawat12345')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!userData) {
    return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Loading...
      </div>
    );
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div>
        Github Followers: {userData.followers}
      </div>
      <img src={userData.avatar_url} alt="GitHub avatar" width={300} />
    </div>
  );
}

export default Github;

