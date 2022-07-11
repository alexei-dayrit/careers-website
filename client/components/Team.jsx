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
    <div className='min-h-screen text-center py-16' id='team'>
      <h1 className='text-4xl font-semibold mb-6'>Meet Our Team</h1>

      <div className='flex flex-wrap justify-center gap-y-10 px-4'>
        {members.map(member =>
          <div key={member.id} className='flex flex-col items-center w-full md:w-[30%]'>
            <img src={member.picture} alt='Team member photo'
              className='h-64 w-64 md:h-52 md:w-52 rounded-full border-gray-100 shadow-sm object-cover' />
            <h2 className='text-lg font-medium pt-2'>{member.name}</h2>
            <p className='italic'>{member.title}</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Team;
