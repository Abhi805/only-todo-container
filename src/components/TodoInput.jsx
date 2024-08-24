

const TodoInput = () => {



  return (
   <>
    <div className="input-container font-serif justify-center flex">
      <input
    
        className="rounded-md w-64 h-8 text-center"
        type="text"
        placeholder="Type Your Todo Here"
     
        />
         <button
      
     className="bg-orange-600 font-semibold  hover:bg-slate-950 
     ml-2 rounded-md px-2 text-white "
  
     >
 
    
      Add
    </button>
   
    </div>
    <h2 className='m-2 ml-10 text-2xl'>Todos</h2>
    <hr />

    <div className='show-todo'>

          <ul className="list-none font-serif border-2 hover:border-gray-950
           border-slate-600 mt-4 ml-8 bg-neutral-300 rounded-md w-80 h-8 
           text-lg">
    <li className='ml-2 capitalize'>
  
    <span  className='float-right  mr-2 cursor-pointer hover:text-xl'>
      <i  className="fa-solid fa-trash-can icon-delete" ></i></span>
    </li>
  </ul>
     



  </div>
  <div className=' flex justify-center p-2'>
  <button  className='text-xl text-white hover:bg-slate-900
   rounded-md p-1'><span>Remove All</span></button>
  </div>

   </>
   
  )
}

export default TodoInput
