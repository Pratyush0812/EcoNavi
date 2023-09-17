import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-4xl font-bold text-[#536E96]'>Leading brands trust <span className='text-[#20B486]'>EcoNavi</span></h1>
            
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                <div >
                     <img src={companyLogo1} />
                </div>
                <div>
                <img src={companyLogo2} />
                </div>
                <div>
                <img src={companyLogo3} />
                </div>
                <div>
                <img src={companyLogo4} />
                </div>
                  
                 
                 
                  
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies