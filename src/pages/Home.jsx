import React from 'react';

function Home() {
    return (
        <div>
            <h1 className='text-6xl'>Welcome</h1>
            {import.meta.env.VITE_GITHUB_URL}
        </div>
    );
}

export default Home;
