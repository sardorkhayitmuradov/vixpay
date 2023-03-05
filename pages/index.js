import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Input from '@/components/Input/Input';
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
import YoshoPos from '../public/assets/images/yoshopPos.png';
import VixpayNetwork from '../public/assets/images/vixpay-network.png';
import VixpayPay from '../public/assets/images/vixpay-payment.png';
import tabs from '../constants/tabs';
import TabNavItem from '@/components/Tabs/TabNavItem/TabNavItem';
import TabAccordion from '@/components/Tabs/TabAccordion/TabAccordion';
import Location from '../public/assets/icons/location.svg';
import Tel from '../public/assets/icons/tel.svg';
import Textarea from '@/components/Textarea/Textarea';
import Download from '../public/assets/icons/download.svg';

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const [filteredTab, setFilteredTab] = useState(tabs.at(0).questions);
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [inquiry, setInquiry] = useState('');

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTab.length / itemsPerPage);

  const paginateFilteredTab = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tab = filteredTab.slice(startIndex, endIndex);
    setFilteredTab(tab);
  };

  const t = useTranslations('Index');
  const router = useRouter();

  // const filterTab = () => {
  //   tabs.map((tab) => {
  //     if (tab.id === activeTab) {
  //       setFilteredTab((prev)=> [...prev, tab])
  //     }
  //   })
  // };
  useEffect(() => {
    paginateFilteredTab(page);
  }, [page]);
  console.log(paginateFilteredTab);
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
                'mr-[18px] flex items-center rounded-2xl border-[3px] border-solid border-[#67E8F9] app py-[15px] px-[60px]'
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
                'flex items-center rounded-2xl border-[3px] border-solid app border-[#67E8F9] app py-[15px] px-[60px]'
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
                <Button
                  className={
                    'border border-solid border-[#22C9EE] app rounded-[6px] py-[16px] px-[24px] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)]'
                  }
                >
                  <p className='text-[19px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
                    Learn more
                  </p>
                </Button>
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
                <Button
                  className={
                    'border border-solid border-[#22C9EE] app rounded-[6px] py-[16px] px-[24px] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)]'
                  }
                >
                  <p className='text-[19px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
                    Learn more
                  </p>
                </Button>
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
          <ul className='flex items-center flex-wrap justify-between gap-y-[90px]'>
            <li className='max-w-[610px] w-full flex items-center justify-between'>
              <Image
                src={KumhoTire}
                width={150}
                height={150}
                className=''
                alt='company-logo'
              />
              <div className='max-w-[400px] w-full'>
                <h3 className='text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                  금호타이어㈜
                </h3>
                <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                  동사는 2003년 금호산업 타이어산업부의 자산부채 현물출자 및
                  영업양수도를 통해 설립되었음. 한국, 중국, 미국, 베트남에
                  위치한 8개 타이어 생산공장을 토대로 글로벌 생산체계를
                  구축하고, 전세계 판매 네트워크를 갖춘 타이어 제조, 판매
                  기업임.
                </p>
                <p className='text-[16px] leading-[24px] font-PoppinsSemibold'>
                  kumhotire.com
                </p>
              </div>
            </li>
            <li className='max-w-[610px] w-full flex items-center justify-between'>
              <Image
                src={FoodService}
                width={150}
                height={150}
                className=''
                alt='company-logo'
              />
              <div className='max-w-[400px] w-full'>
                <h3 className='text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                  (사)한국외식업중앙회
                </h3>
                <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                  국민영양과 보건향상 및 식품위생수준 향상에 기여하고,
                  일반음식점 영업자 회원간의 화합과 복리 및 권익 증진을
                  통한식문화 향상 도모. (업권 및 권익보호, 음식문화 개선,
                  식품위생 수준 향상)
                </p>
                <p className='text-[16px] leading-[24px] font-PoppinsSemibold'>
                  foodservice.co.kr
                </p>
              </div>
            </li>
            <li className='max-w-[610px] w-full flex items-center justify-between'>
              <Image
                src={Roun}
                width={150}
                height={150}
                className=''
                alt='company-logo'
              />
              <div className='max-w-[400px] w-full'>
                <h3 className='text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                  ㈜로운아뜨리움
                </h3>
                <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                  로운아뜨리움은 대한민국예술인센터 안에 위치하여 다양한
                  예술적인 공간을 통해 삶을 풍요롭게 하고 현대인의
                  라이프스타일에 의미았는 변화를 추구합니다. 웨딩, 공연, 갤러리
                  모든 것을 할 수 있는 목동의 복합 문화공간입니다.
                </p>
                <p className='text-[16px] leading-[24px] font-PoppinsSemibold'>
                  rounatrium.com
                </p>
              </div>
            </li>
            <li className='max-w-[610px] w-full flex items-center justify-between'>
              <Image
                src={Hawtai}
                width={150}
                height={150}
                className=''
                alt='company-logo'
              />
              <div className='max-w-[400px] w-full'>
                <h3 className='text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                  화타이코리아㈜
                </h3>
                <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                  화타이자동차(华泰汽车, HAWTAI MOTOR)는 베이징에 본사를 둔
                  스포츠유틸리티차(SUV), 세단, 왜건, 전기자동차를 생산하는 중국
                  자동차 제조업체입니다.
                </p>
              </div>
            </li>
            <li className='max-w-[610px] w-full flex items-center justify-between'>
              <Image
                src={ArdenHill}
                width={150}
                height={150}
                className=''
                alt='company-logo'
              />
              <div className='max-w-[400px] w-full'>
                <h3 className='text-[24px] leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                  아덴힐리조트&골프㈜
                </h3>
                <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                  자연과 통하는 곳 평온하고 아득한 언덕위의 신비로운 공간
                  선택받은 분들을 위한 리조트 & 골프
                </p>
                <p className='text-[16px] leading-[24px] font-PoppinsSemibold'>
                  ardenhill.co.kr
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[112px] pb-[149px]'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center mb-20'>
            <p className='font-PoppinsMedium mb-1 text-[18px] leading-[135%] text-[#6B7280] tracking-[-0.26px]'>
              Service
            </p>
            <h2 className='font-PoppinsBold mb-5 text-[36px] leading-[110%] text-[#1F2937] tracking-[-0.79px]'>
              VIXPAY Solutions
            </h2>
            <p className='font-NotoSansKoreanRegular text-[18px] leading-[150%] text-[#4B5563] tracking-[-0.26px] max-w-[824px] w-full mx-auto'>
              VIXPAY 솔루션을 이용해 사업자, 상점, 소비자를 통합하는 서비스를
              제공할 수 있습니다. VIXPAY 솔루션은 온라인과 오프라인을 통합하고
              다양한 사용자를 연결하는 독창적인 비즈니스 아이디어를 실현할 수
              있도록 제공합니다.
            </p>
          </div>
          <ul className='flex items-center justify-between flex-wrap max-w-[800px] w-full mx-auto gap-y-20'>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                Yoshop POS
              </p>
              <Image
                src={YoshoPos}
                width={326}
                height={200}
                className='serviceImage mb-6'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                매장에서 사용 가능한 스마트 POS 시스템
              </p>
            </li>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                Yoshop POS
              </p>
              <Image
                src={YoshoPos}
                width={326}
                height={200}
                className='serviceImage mb-6'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                매장에서 사용 가능한 스마트 POS 시스템
              </p>
            </li>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                VIXPAY Payment
              </p>
              <Image
                src={VixpayPay}
                width={326}
                height={200}
                className='serviceImage mb-6'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                신용카드, 현금, 쿠폰, 암호화폐 등모 든 결제수단을 지원할 수 있는
                PG 서비스
              </p>
            </li>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                VIXPAY Network
              </p>
              <Image
                src={VixpayNetwork}
                width={326}
                height={200}
                className='serviceImage mb-6'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                하이퍼레져 기반의 암호화폐 Eco system
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[112px] pb-[149px]'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center mb-20'>
            <p className='font-PoppinsMedium mb-1 text-[18px] leading-[135%] text-[#9CA3AF] tracking-[-0.26px]'>
              FAQ
            </p>
            <h2 className='font-PoppinsBold mb-5 text-[36px] leading-[110%] text-[#374151] tracking-[-0.79px]'>
              Frequently asked questions
            </h2>
            <p className='font-NotoSansKoreanRegular text-[18px] leading-[150%] text-[#4B5563] tracking-[-0.26px] max-w-[824px] w-full mx-auto'>
              자주하시는 질문과 궁금해 하시는 질문들을 정리했습니다.
            </p>
          </div>
          <ul className='flex items-center justify-between max-w-[405px] w-full mx-auto mb-10'>
            {tabs.length > 0 &&
              tabs.map((tab) => {
                return (
                  <TabNavItem
                    activeTab={activeTab}
                    key={tab.id}
                    id={tab.id}
                    setActiveTab={(id) => {
                      setActiveTab(id),
                        setFilteredTab(tab.questions.slice(0, 5));
                    }}
                  >
                    {tab.title}
                  </TabNavItem>
                );
              })}
          </ul>
          <ul className='max-w-[920px] w-full mx-auto'>
            {filteredTab?.map((q) => {
              return (
                <TabAccordion key={q.id} title={q.title}>
                  {q.description}
                </TabAccordion>
              );
            })}

            <ul className='mx-auto flex items-center justify-between'>
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button className='page-link' onClick={() => setPage(page - 1)}>
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${i + 1 === page ? 'active' : ''}`}
                >
                  <button className='page-link' onClick={() => setPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${page === totalPages ? 'disabled' : ''}`}
              >
                <button className='page-link' onClick={() => setPage(page + 1)}>
                  Next
                </button>
              </li>
            </ul>
          </ul>
        </div>
      </section>
      <section className='py-[166px] bg-[#EEF8FF]'>
        <div className='max-w-xl mx-auto flex items-end justify-between'>
          <div className='max-w-[630px] w-full'>
            <p className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#71717A] font-PoppinsMedium mb-3'>
              Contact Us
            </p>
            <h2 className='text-[36px] leading-[110%] tracking-[-0.79px] text-[#71717A] font-PoppinsBold mb-7'>
              Get started with VIXPAY
            </h2>
            <p className='text-[18px] leading-[158%] tracking-[-0.26px] text-[#71717A] font-PoppinsMedium mb-14'>
              VIXPAY은 e-commerce를 운영하시는 분들에게 꼭 필요한 서비스를
              만듭니다. 좋은 경험을 심하는 것만으로도 부족한 하루, 어제보다 더
              풍요로운 오늘이 될 수있도록 문제를 찾아 해결합니다
            </p>

            <div className='max-w-[504px] w-full bg-[#0E7490] contact-wrapper rounded-xl p-6 border border-solid border-white opacity-70 mb-5'>
              <div className='flex items-center mb-[18px]'>
                <Image
                  src={Location}
                  width={24}
                  height={24}
                  alt='location'
                  className='mr-3'
                />
                <p className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#fff] font-PoppinsMedium'>
                  Location
                </p>
              </div>
              <p className='text-[15px] leading-[135%] tracking-[-0.18px] text-[#fff] font-PoppinsMedium'>
                서울특별시 금천구 가산디지털2로 53,
                1901~1902호(가산동,한라시그마밸리)(주)나우앤페이
              </p>
            </div>
            <div className='max-w-[504px] w-full bg-[#0E7490] contact-wrapper rounded-xl p-6 border border-solid border-white opacity-70'>
              <div className='flex items-center mb-[18px]'>
                <Image
                  src={Tel}
                  width={24}
                  height={24}
                  alt='tel'
                  className='mr-3'
                />
                <p className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#fff] font-PoppinsMedium'>
                  Tel
                </p>
              </div>
              <p className='text-[15px] leading-[135%] tracking-[-0.18px] text-[#fff] font-PoppinsMedium'>
                (+82) 02 3285 0555
              </p>
            </div>
          </div>
          <div className='max-w-[511px] w-full bg-[#FFFFFF] rounded-[20px] inputCard py-12 px-[55px]'>
            <Input
              id={'email'}
              title={'이메일'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              type={'email'}
              value={email}
              onGetValue={(value) => setEmail(value)}
              wrapperClassName={'flex flex-col mb-4'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
              }
            />
            <Input
              id={'email'}
              title={'이름'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              type={'email'}
              value={name}
              onGetValue={(value) => setName(value)}
              wrapperClassName={'flex flex-col mb-4'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
              }
            />
            <Textarea
              id={'contact-textarea'}
              title={'문의내용'}
              row={5}
              cols={400}
              value={inquiry}
              onGetValue={(value) => setInquiry(value)}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular mb-1'
              }
              wrapperClassName={'flex flex-col mb-7'}
            />
            <Button
              className={
                'flex items-center rounded-md bg-[#22C9EE] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] border-solid hover:border-[#22c9ee] py-3 px-4 mx-auto inputButton'
              }
            >
              <p className='text-[15px] leading-[135%] tracking-[-0.18px] font-NanumGothicRegular text-[#FFFFFF]'>
                메시지 보내기
              </p>
            </Button>
          </div>
        </div>
      </section>
      <section className="pt-[112px] pb-[104px] bg-[url('../public/assets/images/company-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className='max-w-xl mx-auto text-center'>
          <p className='text-[18px] leading-[135%] text-[#fff] tracking-[-0.26px] font-PoppinsMedium mb-1'>
            Company Profile
          </p>
          <h3 className='text-[36px] leading-[110%] text-[#fff] tracking-[-0.79px] font-PoppinsBold mb-5'>
            Company Profile
          </h3>
          <p className='text-[20px] leading-[160%] text-[#fff] tracking-[-0.33px] font-NanumGothicRegular mb-14'>
            더 자세한 정보는 소개자료를 참고해주세요.
          </p>
          <Button
            className={
              'flex items-center rounded-md border bg-[#fff] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] border-solid border-[#D1D5DB] hover:border-[#22c9ee] py-[16px] px-[24px] mx-auto'
            }
          >
            <Image
              src={Download}
              width={20}
              height={20}
              className='mr-[10px]'
              alt='Download'
            />
            <p className='text-[19px] leading-[20px] tracking-[-0.3px] font-RubikMedium text-[#22C9EE]'>
              Download Document
            </p>
          </Button>
        </div>
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
