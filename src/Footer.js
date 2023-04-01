import React from 'react'


const Footer = () => {
  return (
    <div className='Footer bg-red-600'> 
        
        <div  className=' bg-gray-600 h-2/3 text-white'>
            <div className=' flex flex-row  h-2/3 w-4/5 justify-around bg-red-400 ml-auto mr-auto mb-2 mt-2'>
                <div className=' flex flex-col w-1/4'>
                    <ul>
                        <li className=' text-xl mb-5'>ABOUT</li>
                        <li className=' text-left text-sm'>Recycle WordPress Theme was designed to promote environmental quality, recycling and corporate sustainability. It is suitable for any green business, waste management company, environmental-friendly industry, organization or project.</li>
                    </ul>
                   
                    
                    </div>

                <div>
                    <h1 className=' mb-5 text-xl'>MENU</h1>
                    <ul> 
                        <li className='mb-1'>link1</li>
                        <li className='mb-1'>link2</li>    
                        <li className='mb-1'>link3</li>
                        <li className='mb-1'>link4</li>
                        <li className='mb-1'>link5</li>
                    </ul>    
                </div>
                <div className='text-xl flex flex-col'>
                    <div className='mb-5 text-left'>CONTACT INFO</div>
                <div className='flex bg-orange-500 flex-row  items justify-left align-baseline text-left'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
</svg>

<div className=' text-sm'> 9999999999</div>
                </div>

                <div className='flex flex-row items-center justify-evenly align-baseline'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
</svg>


<div className=' text-sm'>demo@demo.com</div>
                </div>


                </div>
      
                

            </div>
        </div>
    </div>
  )
}

export default Footer