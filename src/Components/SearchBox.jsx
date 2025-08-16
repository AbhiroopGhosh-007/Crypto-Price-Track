import React from "react";

function SearchBox({ search, setSearch }) {
  return (
    <div className='flex justify p-4 '>
      <input 
        type="text"
        placeholder="Search crypto..."
        value={search}
        onChange={(e) => setSearch(e.target.value) 
        }
        className='border rounded p-2 w-1/2 dark:bg-gray-800 dark:text-white'
      />
    </div>
  );
}

export default SearchBox;
