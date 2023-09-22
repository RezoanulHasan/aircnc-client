import {  Wave } from 'react-animated-text';
const Search = () => {
 
return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer bg-white'>
 
      <div className='flex flex-row items-center  gap-3'>
        <div className='p-3 font-bold  text-xl text-rose-500 flex ' >
            
        <Wave    text="Welcome, T'o AirCNC_ " effect="stretch" effectChange={2} />
        </div>
      </div>
   
  </div>
)
}

export default Search;
