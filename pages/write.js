import { useState } from 'react';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Switch from '@/components/Switch';
import Button from '@/components/Button';
import Link from 'next/link';

const Write = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [inquiry, setInquiry] = useState('');

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
          <div className='w-full mb-5'>
            <div className='flex items-start gap-x-8 mb-4'>
              <Input
                id={'text'}
                title={'이름'}
                className={
                  'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
                }
                type={'text'}
                required={'*필수'}
                requiredClassName={'text-[#EF4444]'}
                value={name}
                onGetValue={(value) => setName(value)}
                wrapperClassName={'flex flex-col max-w-[272px] w-full'}
                labelClassName={
                  'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
                }
              />
              <Input
                id={'password'}
                title={'비밀번호'}
                className={
                  'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
                }
                type={'password'}
                required={'*필수'}
                requiredClassName={'text-[#EF4444]'}
                value={password}
                description={'게시물을 삭제하거나 수정하는데 필요합니다'}
                onGetValue={(value) => setPassword(value)}
                wrapperClassName={'flex flex-col max-w-[272px] w-full'}
                labelClassName={
                  'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
                }
              />
            </div>
            <Input
              id={'email'}
              title={'이메일주소'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              type={'email'}
              value={email}
              onGetValue={(value) => setEmail(value)}
              wrapperClassName={'flex flex-col mb-4 max-w-[414px] w-full'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
              }
            />
            <Input
              id={'tel'}
              title={'전화번호'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              type={'tel'}
              value={number}
              onGetValue={(value) => setNumber(value)}
              wrapperClassName={'flex flex-col mb-4 max-w-[414px] w-full'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
              }
            />
            <Textarea
              id={'contact-textarea'}
              title={'문의내용'}
              row={20}
              cols={400}
              value={inquiry}
              onGetValue={(value) => setInquiry(value)}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
              }
              wrapperClassName={'flex flex-col mb-7'}
            />
          </div>
          <div className='flex justify-between'>
            <div>
              <p className='text-[15px] leading-[24px] text-[#4B5563]'>
                비공개 여부
              </p>
              <Switch label={'비공개 여부'} />
              <p className='mt-5 text-[#9CA3AF] tracking-[-0.09px] text-[14px] leading-[140%]'>
                다른사람이 나의 글을 열람할 수 없습니다
              </p>
            </div>
            <div className='flex items-start gap-x-2'>
              <Button
                className={
                  'flex items-center rounded-md bg-[white] shadow-[0px_1px_2px_1px_rgba(0,0,0,0.07)] border-solid border-[#D1D5DB] py-3 px-4 mx-auto inputButton'
                }
              >
                <p className='text-[15px] leading-[135%] tracking-[-0.18px] font-NanumGothicRegular text-[#4B5563]'>
                취소
                </p>
              </Button>
              <Link href={'/password'}
                className={
                  'flex items-center rounded-md bg-[#22C9EE] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] border-solid hover:border-[#22c9ee] py-3 px-4 mx-auto inputButton'
                }
              >
                <p className='text-[15px] leading-[135%] tracking-[-0.18px] font-NanumGothicRegular text-[#FFFFFF]'>
                등록
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Write;
