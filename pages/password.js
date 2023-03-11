import Link from 'next/link';
import { useState } from 'react';
import Input from '@/components/Input/Input';

const Password = () => {
  const [password, setPassword] = useState('');
  return (
    <main className='pt-20'>
      <section className='bg-[#0E7490]'>
        <div className='max-w-xl mx-auto py-[130px]'>
          <h2 className='text-[60px] leading-[100%] tracking-[-1.34px] font-PoppinsBold text-center text-[#fff]'>
            Q&A
          </h2>
        </div>
      </section>
      <section>
        <div className='max-w-[1109px] w-full mx-auto py-[112px]'>
          <h2 className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#6B7280] text-center mb-1'>
            Q&A
          </h2>
          <p className='text-[36px] leading-[110%] tracking-[-0.79px] text-[#1F2937] text-center mb-5'>
            궁금하신 점이 있으시면 문의해주세요
          </p>
          <p className='max-w-[816px] w-full mx-auto text-[20px] leading-[160%] tracking-[-0.33px] text-[#4B5563] text-center mb-[90px]'>
            고객님의 소중한 의견에 항상 귀 기울이고 있습니다. VIXPAY 솔루션에
            궁금하신 점이나 의견을 남겨주시면 최대한 신속하고 자세히 답변해
            드리겠습니다.
          </p>
          <p className='max-w-[816px] w-full mx-auto text-[15px] leading-[24px] text-[#4B5563] text-center mb-[66px]'>
            선택하신 게시물은 비밀글 입니다.
          </p>
          <div className='mx-auto max-w-[400px] w-full flex items-center justify-between'>
            <Input
              id={'password'}
              title={'비밀번호'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              type={'password'}
              value={password}
              description={'게시물 작성시 입력하신 비밀번호를 입력하십시오.'}
              onGetValue={(value) => setPassword(value)}
              wrapperClassName={'flex flex-col max-w-[300px] w-full'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
              }
            />
            <Link
              href={'/read'}
              className={
                'flex items-center rounded-md bg-[#22C9EE] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] border-solid hover:border-[#22c9ee] py-3 px-4 mx-auto inputButton'
              }
            >
              <p className='text-[15px] leading-[135%] tracking-[-0.18px] font-NanumGothicRegular text-[#FFFFFF]'>
              확인
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Password;
