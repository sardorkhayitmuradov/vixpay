import Image from 'next/image';
import vixcoApp from '../public/assets/images/vixco_app.png';
import Button from '@/components/Button';
import User from '../public/assets/images/user.jpg';
import star from '../public/assets/icons/star.svg';
import KumhotireClient from '../public/assets/icons/kumhotire-client.svg';
import RounClient from '../public/assets/icons/roun-client.svg';
import ArdenClient from '../public/assets/icons/arden-hill-client.svg';
import HawtaiClient from '../public/assets/icons/hawtai-client.svg';
import FoodServiceClient from '../public/assets/icons/foodservice-client.svg';
import { clients } from '@/constants/clients';
import { clientsLogo } from '@/constants/clientsLogo';

const Community = () => {
  console.log(clients);
  return (
    <main className='pt-20'>
      <section className='bg-[#0E7490] max-[450px]:py-0'>
        <div className='max-w-xl mx-auto py-[130px] max-[450px]:px-6 max-[450px]:py-[76px]'>
          <h2 className='text-[60px] leading-[100%] tracking-[-1.34px] font-PoppinsBold text-center text-[#fff] max-[450px]:text-[30px] max-[450px]:leading-[130%] max-[450px]:tracking-[-0.64px]'>
            Our Community
          </h2>
        </div>
      </section>
      <section className='pt-[112px] pb-[235px] max-[450px]:py-14'>
        <div className='mx-auto max-w-xl'>
          <p className='text-[18px] leading-[135%] tracking-[-0.26px] font-PoppinsMedium text-center text-[#6B7280] mb-1 max-[450px]:text-[15px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.18px] max-[450px]:mb-3 max-[450px]:px-6'>
            Our Community
          </p>
          <p className='text-[36px] leading-[110%] tracking-[-0.79px] font-PoppinsBold text-center text-[#1F2937] mb-[70px] max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:mb-8 max-[450px]:px-6'>
            VIXCO Community
          </p>
          <div className='max-w-[1109px] w-full mx-auto'>
            <div className='flex items-center justify-between mb-20 max-[450px]:flex-col max-[450px]:gap-y-8 max-[450px]:mb-14 max-[450px]:px-6'>
              <Image src={vixcoApp} width={430} height={256} />
              <div className='max-w-[600px] w-full max-[450px]:text-center'>
                <p className='mb-3 text-[20px] leading-[145%] tracking-[-0.33px] font-NanumGothicRegular text-[#4B5563] max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:mb-5'>
                  VIXCO는 블록체인 서비스와 오프라인 POS, 무인 대출기를 결합하여
                  가맹점과 소비자를 연결하는 특화된 서비스를 제공하기 위한
                  프로젝트로 블록체인의 투명성을 기반으로 결제 Data와 실제 정산
                  Data 사이의 불일치 문제점을 원천적으로 해결하고 소비자를
                  대상으로 금융 서비스를 실생활에서 이용할 수 있는 플랫폼을
                  제공하는 동시에 빠른 송금 지원과 거래 수수료를 낮춤으로써
                  온-오프라인 지불 결제 시장을 선도하려는 목적으로
                  구축되었습니다.
                </p>
                <Button
                  className={
                    'shadow-[0_0px_1px_2px_rgba(0,0,0,0.7] bg-[#22C9EE] rounded-md px-4 py-3 text-[15px] leading-[135%] tracking-[-0.18px] font-PoppinsBold text-[#fff] hover:text-[#22C9EE] hover:bg-white hover:shadow-[0px_0px_1px_2px_rgba(34,201,238,1)] duration-300 max-[450px]:text-[15px] max-[450px]:leading-[135%] max-[450px]:py-4 max-[450px]:px-5'
                  }
                >
                  Download VIXPAY App
                </Button>
              </div>
            </div>
            <div className='flex flex-col max-[450px]:px-6 mb-[46px] max-[450px]:mb-[70px]'>
              <h5 className='mb-10 text-[24px] leading-[150%] tracking-[-0.47px] font-PoppinsBold text-[#1F2937] max-[450px]:text-[20px] max-[450px]:leading-[150%] max-[450px]:text-left max-[450px]:mb-3'>
                Success stories
              </h5>
              <ul className='flex items-stretch justify-between flex-wrap gap-y-10 mb-[30px] max-[450px]:gap-y-5'>
                {clients.length > 0 &&
                  clients.map((client) => {
                    return (
                      <li
                        key={client.id}
                        className='max-w-[345px] cursor-pointer flex flex-col justify-between hover:scale-105 duration-300 w-full shadow-[0_0px_1px_2px_rgba(0,0,0,0.07)] pt-[22px] pb-3 px-7 rounded-[10px] border-[0.5px] border-solid border-[#19B9EB]'
                      >
                        <div className='flex items-center mb-5'>
                          <Image
                            src={client.image}
                            className='rounded-full mr-3'
                            width={40}
                            height={40}
                          />
                          <p className='text-[24px] leading-[150%] tracking-[-0.47px] font-PoppinsBold text-[#1F2937]'>
                            {client.name}
                          </p>
                        </div>
                        <p className='mb-[30px] h-full text-[16px] leading-[150%] tracking-[-0.47px] font-PoppinsRegular text-[#1F2937]'>
                          {client.description}
                        </p>
                        <div className='flex items-center gap-1 mb-2'>
                          <Image src={star} width={24} height={24} />
                          <Image src={star} width={24} height={24} />
                          <Image src={star} width={24} height={24} />
                          <Image src={star} width={24} height={24} />
                          <Image src={star} width={24} height={24} />
                        </div>
                        <p className='text-[14px] leading-[129%] tracking-[129%] font-semibold text-[#62ABEF]'>
                          {client.address}
                        </p>
                      </li>
                    );
                  })}
              </ul>
              <p className='text-[16px] leading-[150%] tracking-[-0.47px] text-[#0E7490] font-PoppinsRegular  border-b border-solid inline-block mx-auto cursor-pointer max-[450px]:text-center max-[450px]:mx-auto'>
                more
              </p>
            </div>
            <div className='overflow-hidden w-full'>
              <p className='mb-[36px] text-[24px] leading-[140%] font-PoppinsBold text-[#111827] max-[450px]:text-[20px] max-[450px]:leading-[140%] max-[450px]:mb-8 max-[450px]:px-6'>
                Our Clients
              </p>
              <div className='flex items-center gap-x-[40px] max-[450px]:w-full max-[450px]:overflow-x-auto max-[450px]:scroll-smooth w-full max-[450px]:flex-wrap max-[450px]:gap-y-4 max-[450px]:px-6'>
                {clientsLogo.length > 0 &&
                  clientsLogo.map((logo) => (
                    <div key={logo.id} className='bg-[#F6F6F6] max-[450px]:max-w-[103px] max-[450px]:w-full flex items-center justify-center w-[103px] h-[103px] rounded-full max-[450px]:'>
                      <Image
                        src={logo.image}
                        width='80'
                        height='80'
                        className='bg-[#f6f6f6]'
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Community;
