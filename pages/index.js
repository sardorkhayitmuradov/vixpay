import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '@/components/Button';
import AppStore from '../public/assets/icons/app-store.svg';
import PlayMarket from '../public/assets/icons/google-play.svg';
import CryptoCurrency from '../public/assets/images/cryptocurrency-ecosystem.png';
import VixpayPayment from '../public/assets/images/vixpay-system.png';
import KumhoTire from '../public/assets/images/kumhotire-logo.png';
import FoodService from '../public/assets/images/foodservice-logo.png';
import Roun from '../public/assets/images/roun-logo.png';
import Hawtai from '../public/assets/images/hawtai-motor-logo.png';
import ArdenHill from '../public/assets/images/ardenhill-logo.png';



export default function Home() {
  const t = useTranslations('Index');
  const router = useRouter();
  return (
    <main>
      <section>
        <div className="max-w-xl mx-auto pt-[156px] pb-[194px] w-full bg-[url('../public/assets/images/hero-bg.png')] bg-no-repeat bg-[top_right_-24px]">
          <h2 className='text-[52px] font-PoppinsRegular leading-[136%] mb-[60px] tracking-[-1.34px] text-[#111827] max-w-[650px] w-full'>
            가맹점과 소비자를 간편하게연결하는 블록체인 솔루션
          </h2>
          <p className='text-[24px] mb-[30px] font-PoppinsRegular leading-[135%] tracking-[-0.18px] uppercase'>
            Download VIXPAY App for your business
          </p>
          <div className='flex items-center'>
            <Button
              className={
                'mr-[18px] flex items-center rounded-2xl border-[3px] border-solid border-[#67E8F9] py-[15px] px-[60px]'
              }
            >
              <Image
                src={AppStore}
                width={30}
                height={30}
                className='mr-[10px]'
                alt='app'
              />
              <p className='text-[18px] leading-[30px] font-PromptMedium'>
                App Store
              </p>
            </Button>
            <Button
              className={
                'flex items-center rounded-2xl border-[3px] border-solid border-[#67E8F9] py-[15px] px-[60px]'
              }
            >
              <Image
                src={PlayMarket}
                width={30}
                height={30}
                className='mr-[10px]'
                alt='app'
              />
              <p className='text-[18px] leading-[30px] font-PromptMedium'>
                Google play
              </p>
            </Button>
          </div>
        </div>
      </section>
      <section className='pt-[138px] pb-[122px] about-section'>
        <div className='max-w-xl mx-auto'>
          <h2 className='text-[36px] leading-[110%] font-PoppinsBold tracking-[-0.79px] text-white text-center mb-7'>
            About VIXPAY
          </h2>
          <p className='text-center max-w-[994px] w-full mx-auto text-[18px] mb-6 leading-[158%] tracking-[-0.26px] font-NanumGothicRegular text-white'>
            VIXPAY은 가맹점과 소비자를 연결해 주는 블록체인 플랫폼으로 <br />{' '}
            복잡한 가입이나 충전 절차 없이 전국의 가맹점에서 간편하게 사용가능한
            동시에 빅스페이의 리워드와 결제 기능을 지원합니다. 특히 소비자와
            가맹점의 편의에 집중하여 QR코드를 제시하고 비밀번호만 입력하는
            것으로 간편하게 사용할 수 있습니다.
          </p>
          <p className='text-center max-w-[994px] w-full mx-auto text-[18px] leading-[158%] tracking-[-0.26px] font-NanumGothicRegular text-white'>
            VIXPAY은 2021년 4월 시범서비스 시작으로 6월 부터 서비스 예정입니다.
          </p>
        </div>
      </section>
      <section>
        <div className='max-w-xl mx-auto'>
          <ul>
            <li className='py-[104px] flex items-center justify-between'>
              <Image
                src={CryptoCurrency}
                width={640}
                height={420}
                className=''
                alt='im'
              />
              <div className='max-w-[575px] w-full text-right'>
                <span className='text-[18px] mb-3 leading-[135%] tracking-[-0.26px] text-[#6B7280] font-PoppinsMedium'>
                  VIXPAY Blockchain Network
                </span>
                <h3 className='text-[36px] mb-7 leading-[110%] tracking-[-0.79px] text-[#1F2937] font-PoppinsBold'>
                  Cryptocurrency ecosystem for your business
                </h3>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular'>
                  VIXPAY Blockchain Network는 참여자들로부터 생성된 결제
                  데이터가 저장되는 Hyperledger Fabric 기반의 Private 블록체인
                  입니다.이더리움의 ERC20 Token과 호환이 되는 자체 Token
                  플랫폼을 제공하고,토큰을 실생활에 사용할 수 있도록 Yollet
                  결제시스템과 연결되고참여자들은 VIXPAY에서 제공되는 Wallet,
                  API, 블록스캔 기능을 이용해 자유롭게 다양한 생태계를 구성할 수
                  있습니다.
                </p>
              </div>
            </li>
            <li className='py-[104px] flex items-center justify-between flex-row-reverse'>
              <Image
                src={VixpayPayment}
                width={640}
                height={420}
                className=''
                alt='im'
              />
              <div className='max-w-[574px] w-full'>
                <span className='text-[18px] mb-3 leading-[135%] tracking-[-0.26px] text-[#6B7280] font-PoppinsMedium'>
                  VIXPAY Payment System
                </span>
                <h3 className='text-[36px] mb-7 leading-[110%] tracking-[-0.79px] text-[#1F2937] font-NotoSansKoreanMedium'>
                  블록체인 기반의 지불 / 결제 시스템
                </h3>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular'>
                  VIXPAY Payment는 현금, 신용카드, 모바일 결제를 이르는 모든
                  결제 수단에 ERC20 기반의 Token 결제와 리워드를
                  제공합니다.탈중앙화 거래를 통해 빠른 결제 처리가 가능하고
                  블록체인 기술을 통해 결제 단위로 정산결과를 확인하여 데이터의
                  투명성 및 무결성을 원천적으로 보장하는 결제시스템 입니다.
                </p>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular'>
                  {' '}
                  VIXPAY Payment는 EMV L1/L2, EMV, Contactless L1, VISA, MASTER,
                  AMEX, UNION Pay Brand 인증, PCI PTS 4.X 인증 등 글로벌 최고의
                  보안 수준을 제공합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[112px] pb-5'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center'>
            <p className='font-PoppinsMedium mb-1 text-[18px] leading-[135%] text-[#6B7280] tracking-[-0.26px]'>
              Clients
            </p>
            <h2 className='font-PoppinsBold mb-5 text-[36px] leading-[110%] text-[#1F2937] tracking-[-0.79px]'>
              Our clients
            </h2>
            <p className='font-NotoSansKoreanRegular mb-5 text-[18px] leading-[158%] text-[#4B5563] tracking-[-0.26px]'>
              최고의 파트너와 함께 합니다.
            </p>
          </div>
        <ul className="flex items-center flex-wrap justify-between gap-y-[90px]">
          <li className="max-w-[610px] w-full flex items-center justify-between">
            <Image
              src={KumhoTire}
              width={150}
              height={150}
              className=''
              alt='company-logo'
            />
            <div className="max-w-[400px] w-full">
              <h3 className="text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3">금호타이어㈜</h3>
              <p className="text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3">동사는 2003년 금호산업 타이어산업부의 자산부채 현물출자 및 영업양수도를 통해 설립되었음. 
한국, 중국, 미국, 베트남에 위치한 8개 타이어 생산공장을 토대로 글로벌 생산체계를 구축하고, 
전세계 판매 네트워크를 갖춘 타이어 제조, 판매 기업임.</p>
              <p className="text-[16px] leading-[24px] font-PoppinsSemibold">kumhotire.com</p>
            </div>
          </li>
          <li className="max-w-[610px] w-full flex items-center justify-between">
            <Image
              src={FoodService}
              width={150}
              height={150}
              className=''
              alt='company-logo'
            />
            <div className="max-w-[400px] w-full">
              <h3 className="text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3">(사)한국외식업중앙회</h3>
              <p className="text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3">국민영양과 보건향상 및 식품위생수준 향상에 기여하고, 일반음식점 영업자 회원간의 화합과 복리 및 권익 증진을 통한식문화 향상 도모.
(업권 및 권익보호, 음식문화 개선, 식품위생 수준 향상)</p>
              <p className="text-[16px] leading-[24px] font-PoppinsSemibold">foodservice.co.kr</p>
            </div>
          </li>
          <li className="max-w-[610px] w-full flex items-center justify-between">
            <Image
              src={Roun}
              width={150}
              height={150}
              className=''
              alt='company-logo'
            />
            <div className="max-w-[400px] w-full">
              <h3 className="text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3">㈜로운아뜨리움</h3>
              <p className="text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3">로운아뜨리움은 대한민국예술인센터 안에 위치하여 다양한 예술적인 공간을 통해 삶을 풍요롭게 하고
현대인의 라이프스타일에 의미았는 변화를 추구합니다.
웨딩, 공연,  갤러리 모든 것을 할 수 있는 목동의 복합 문화공간입니다.</p>
              <p className="text-[16px] leading-[24px] font-PoppinsSemibold">rounatrium.com</p>
            </div>
          </li>
          <li className="max-w-[610px] w-full flex items-center justify-between">
            <Image
              src={Hawtai}
              width={150}
              height={150}
              className=''
              alt='company-logo'
            />
            <div className="max-w-[400px] w-full">
              <h3 className="text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3">화타이코리아㈜</h3>
              <p className="text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3">화타이자동차(华泰汽车, HAWTAI MOTOR)는 베이징에 본사를 둔 스포츠유틸리티차(SUV), 세단, 
왜건, 전기자동차를 생산하는 중국 자동차 제조업체입니다.</p>
            </div>
          </li>
          <li className="max-w-[610px] w-full flex items-center justify-between">
            <Image
              src={ArdenHill}
              width={150}
              height={150}
              className=''
              alt='company-logo'
            />
            <div className="max-w-[400px] w-full">
              <h3 className="text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3">아덴힐리조트&골프㈜</h3>
              <p className="text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3">자연과 통하는 곳 평온하고 아득한 언덕위의 신비로운 공간 선택받은 분들을 위한 리조트 & 골프</p>
              <p className="text-[16px] leading-[24px] font-PoppinsSemibold">ardenhill.co.kr</p>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  };
}
