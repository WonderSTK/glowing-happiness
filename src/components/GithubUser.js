import React, { useEffect, useState } from 'react';

const GithubUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setUsers(data);
    };
    fetchData();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {currentUsers.map((user, index) => (
              <div key={index} style={{ backgroundColor: '#e2e8f0', padding: '20px', borderRadius: '8px' }}>
                <img src={user.avatar_url} alt={user.login} style={{ width: '128px', height: '128px', borderRadius: '50%' }} />
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{user.login}</h1>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>
              Prev
            </button>
            <button onClick={handleNextPage} disabled={indexOfLastUser >= users.length} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubUser;