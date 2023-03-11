import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='mx-auto max-w-[1200px] px-6 h-full flex items-center flex-col justify-center'>
        <h1 className='text-[20px] max-[450px]:text-[14px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.09px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563] mb-3'>Sorry, your request is not available at the moment</h1>
      <Link
        href={'/'}
        className='border border-solid border-[#22C9EE] app rounded-[6px] py-4 px-6 shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] max-[450px]:py-[10px] max-[450px]:px-4 inline-block'
      >
        <p className='text-[19px] max-[450px]:text-[14px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.09px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
          Back home
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
