import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full fixed bottom-0'>
            <div className="logo font-bold text-white text-xl">
                <span className='text-green-500'> &lt;</span>

                <span>Pass</span><span className='text-green-500'>Vault/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Divy Patel @ All Rights Reserved</div>
        </div>
    )
}

export default Footer