import React, { useState, useEffect } from 'react';

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/api/team_members');
        const fetchResult = await response.json();
        setMembers(fetchResult);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className='min-h-screen'>
        <h1 className='font-xl semibold'>Meet Our Team</h1>

        <div className='flex gap-6 px-4'>
          {members.map(member =>
            <div key={member.id} className='md:w-1/4 text-center'>
              <img src={member.picture} alt='Team member photo'
              className=''/>
              <h2 className='pt-2'>{member.name}</h2>
              <p>{member.title}</p>
            </div>
          )}
        </div>

    </div>
  );
};

export default Team;
