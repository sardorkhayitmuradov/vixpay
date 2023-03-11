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
import { companyClients } from '@/constants/companyClients';
import Select from '@/components/Select';
import Link from 'next/link';

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
  return (
    <main>
      <section className='max-[450px]:pb-[54px]'>
        <div className="max-w-xl mx-auto pt-[156px] pb-[194px] max-[450px]:pt-10 max-[450px]:pb-[100px] max-[450px]:text-center w-full bg-[url('../public/assets/images/hero-bg.png')] max-[450px]:bg-[url('../public/assets/icons/hero-mobile-bg.svg')] bg-no-repeat bg-[top_right_-24px] max-[450px]:bg-bottom">
          <h2 className='text-[52px] font-PoppinsRegular leading-[136%] mb-[60px] tracking-[-1.34px] text-[#111827] max-[450px]:px-6 max-w-[650px] w-full max-[450px]:text-[30px] max-[450px]:leading-[136%] max-[450px]:tracking-[-0.64px] max-[450px]:mb-10'>
            가맹점과 소비자를 간편하게연결하는 블록체인 솔루션
          </h2>
          <p className='text-[24px] mb-[30px] font-PoppinsRegular leading-[135%] tracking-[-0.18px] uppercase max-[450px]:mb-10 max-[450px]:px-6'>
            Download VIXPAY App for your business
          </p>
          <div className='flex items-center max-[450px]:flex-col max-[450px]:px-6 max-[450px]:mx-auto'>
            <Button
              className={
                'mr-[18px] max-[450px]:mr-0  flex items-center rounded-2xl border-[3px] border-solid border-[#67E8F9] app py-[15px] px-[60px] max-[450px]:mb-[34px] max-[450px]:max-w-[260px] max-[450px]:w-full max-[450px]:bg-white'
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
                'flex items-center rounded-2xl border-[3px] border-solid app border-[#67E8F9] app py-[15px] px-[50px]  max-[450px]:max-w-[260px] max-[450px]:w-full max-[450px]:bg-white'
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
      <section className='pt-[138px] pb-[122px] about-section max-[450px]:py-14'>
        <div className='max-w-xl mx-auto max-[450px]:px-6'>
          <h2 className='text-[36px] leading-[110%] font-PoppinsBold tracking-[-0.79px] text-white text-center mb-7 max-[450px]:text-[24px] max-[450px]:leading-[150%]'>
            About VIXPAY
          </h2>
          <p className='text-center max-w-[994px] w-full mx-auto text-[18px] mb-6 leading-[158%] tracking-[-0.26px] font-NanumGothicRegular text-white max-[450px]:text-[15px] max-[450px]:leading-[24px]'>
            VIXPAY은 가맹점과 소비자를 연결해 주는 블록체인 플랫폼으로 <br />{' '}
            복잡한 가입이나 충전 절차 없이 전국의 가맹점에서 간편하게 사용가능한
            동시에 빅스페이의 리워드와 결제 기능을 지원합니다. 특히 소비자와
            가맹점의 편의에 집중하여 QR코드를 제시하고 비밀번호만 입력하는
            것으로 간편하게 사용할 수 있습니다.
          </p>
          <p className='text-center max-w-[994px] w-full mx-auto text-[18px] leading-[158%] tracking-[-0.26px] font-NanumGothicRegular text-white max-[450px]:text-[15px] max-[450px]:leading-[24px]'>
            VIXPAY은 2021년 4월 시범서비스 시작으로 6월 부터 서비스 예정입니다.
          </p>
        </div>
      </section>
      <section id='resource'>
        <div className='max-w-xl mx-auto max-[450px]:px-6'>
          <ul>
            <li className='py-[104px] flex items-center justify-between max-[450px]:flex-col-reverse max-[450px]:pt-14 max-[450px]:pb-3 max-[450px]:gap-y-5'>
              <Image
                src={CryptoCurrency}
                width={640}
                height={420}
                className=''
                alt='im'
              />
              <div className='max-w-[575px] w-full text-right max-[450px]:text-center'>
                <span className='text-[18px] mb-3 leading-[135%] tracking-[-0.26px] text-[#6B7280] font-PoppinsMedium max-[450px]:text-[15px]'>
                  VIXPAY Blockchain Network
                </span>
                <h3 className='text-[36px] mb-7 max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:max-w-[300px] max-[450px]:w-full max-[450px]:mx-auto leading-[110%] tracking-[-0.79px] text-[#1F2937] font-PoppinsBold'>
                  Cryptocurrency ecosystem for your business
                </h3>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:text-center'>
                  VIXPAY Blockchain Network는 참여자들로부터 생성된 결제
                  데이터가 저장되는 Hyperledger Fabric 기반의 Private 블록체인
                  입니다.이더리움의 ERC20 Token과 호환이 되는 자체 Token
                  플랫폼을 제공하고,토큰을 실생활에 사용할 수 있도록 Yollet
                  결제시스템과 연결되고참여자들은 VIXPAY에서 제공되는 Wallet,
                  API, 블록스캔 기능을 이용해 자유롭게 다양한 생태계를 구성할 수
                  있습니다.
                </p>
                <Link href={`/serviceproduct` + "#vixpay" }
                  className={
                    'border border-solid border-[#22C9EE] app rounded-[6px] py-4 px-6 shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] max-[450px]:py-[10px] max-[450px]:px-4 inline-block'
                  }
                >
                  <p className='text-[19px] max-[450px]:text-[14px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.09px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
                    Learn more
                  </p>
                </Link>
              </div>
            </li>
            <li className='py-[104px] flex items-center justify-between flex-row-reverse max-[450px]:flex-col-reverse max-[450px]:text-center max-[450px]:pt-14 max-[450px]:pb-3 max-[450px]:gap-y-5'>
              <Image
                src={VixpayPayment}
                width={640}
                height={420}
                className=''
                alt='im'
              />
              <div className='max-w-[574px] w-full'>
                <span className='text-[18px] mb-3 leading-[135%] tracking-[-0.26px] text-[#6B7280] font-PoppinsMedium max-[450px]:text-center max-[450px]:block max-[450px]:text-[15px] max-[450px]:leading-[135%]'>
                  VIXPAY Payment System
                </span>
                <h3 className='text-[36px] mb-7 leading-[110%] tracking-[-0.79px] text-[#1F2937] font-NotoSansKoreanMedium max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:max-w-[300px] max-[400px]:max-w-[250px] max-[450px]:mx-auto max-[450px]:text-center'>
                  블록체인 기반의 지불 / 결제 시스템
                </h3>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:text-center'>
                  VIXPAY Payment는 현금, 신용카드, 모바일 결제를 이르는 모든
                  결제 수단에 ERC20 기반의 Token 결제와 리워드를
                  제공합니다.탈중앙화 거래를 통해 빠른 결제 처리가 가능하고
                  블록체인 기술을 통해 결제 단위로 정산결과를 확인하여 데이터의
                  투명성 및 무결성을 원천적으로 보장하는 결제시스템 입니다.
                </p>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:text-center'>
                  {' '}
                  VIXPAY Payment는 EMV L1/L2, EMV, Contactless L1, VISA, MASTER,
                  AMEX, UNION Pay Brand 인증, PCI PTS 4.X 인증 등 글로벌 최고의
                  보안 수준을 제공합니다.
                </p>
                <Link href={`/serviceproduct` + "#vixpaypayment"}
                  className={
                    'border border-solid border-[#22C9EE] app rounded-[6px] py-4 px-6 shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] max-[450px]:py-[10px] max-[450px]:px-4 inline-block'
                  }
                >
                  <p className='text-[19px] max-[450px]:text-[14px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.09px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
                    Learn more
                  </p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[112px] pb-5 max-[450px]:px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center'>
            <p className='font-PoppinsMedium mb-1 text-[18px] max-[450px]:text-[15px] max-[450px]:tracking-[-0.18px] leading-[135%] text-[#6B7280] tracking-[-0.26px] max-[450px]:mb-3'>
              Clients
            </p>
            <h2 className='font-PoppinsBold max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] mb-5 text-[36px] leading-[110%] text-[#1F2937] tracking-[-0.79px] max-[450px]:mb-[14px]'>
              Our clients
            </h2>
            <p className='font-NotoSansKoreanRegular mb-5 text-[18px] leading-[158%] text-[#4B5563] tracking-[-0.26px] max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:mb-0'>
              최고의 파트너와 함께 합니다.
            </p>
          </div>
          <ul className='flex items-center flex-wrap justify-between gap-y-[90px] max-[450px]:gap-y-10'>
            {companyClients.length > 0 &&
              companyClients.map((client) => (
                <li
                  key={client.id}
                  className='max-w-[610px] w-full flex items-center justify-between max-[450px]:flex-col'
                >
                  <Image
                    src={client.imageDesktop}
                    width={150}
                    height={150}
                    className='max-[450px]:hidden'
                    alt='company-logo'
                  />
                  <Image
                    src={client.imageDesktop}
                    width={200}
                    height={150}
                    className='max-[450px]:inline-block hidden'
                    alt='company-logo'
                  />
                  <div className='max-w-[400px] w-full'>
                    <h3 className='text-[24px] max-[450px]:text-center leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                      {client.companyTitle}
                    </h3>
                    <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                      {client.companyInfo}
                    </p>
                    <p className='text-[16px] leading-[24px] font-PoppinsSemibold'>
                      {client.companyWebsite}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <section className='pt-[112px] pb-[149px] max-[450px]:px-6 max-[450px]:py-14' id='services'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center mb-20 max-[450px]:mb-10'>
            <p className='font-PoppinsMedium mb-1 max-[450px]:mb-3 text-[18px] max-[450px]:text-[15px] leading-[135%] text-[#6B7280] tracking-[-0.26px]'>
              Service
            </p>
            <h2 className='font-PoppinsBold mb-5 text-[36px] max-[450px]:text-[24px] max-[450px]:mb-7 leading-[110%] text-[#1F2937] tracking-[-0.79px]'>
              VIXPAY Solutions
            </h2>
            <p className='font-NotoSansKoreanRegular text-[18px] leading-[150%] text-[#4B5563] tracking-[-0.26px] max-w-[824px] w-full mx-auto max-[450px]:text-[15px] max-[450px]:leading-[160%]'>
              VIXPAY 솔루션을 이용해 사업자, 상점, 소비자를 통합하는 서비스를
              제공할 수 있습니다. VIXPAY 솔루션은 온라인과 오프라인을 통합하고
              다양한 사용자를 연결하는 독창적인 비즈니스 아이디어를 실현할 수
              있도록 제공합니다.
            </p>
          </div>
          <ul className='flex items-center justify-between flex-wrap max-w-[800px] w-full mx-auto gap-y-20 max-[450px]:gap-y-12'>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] max-[450px]:text-[18px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.26px] leading-[150%] max-[450px]:mb-5 font-PoppinsMedium text-[#06B6D4] mb-6'>
                Yoshop POS
              </p>
              <Image
                src={YoshoPos}
                width={326}
                height={200}
                className='serviceImage mb-6 max-[450px]:mb-5'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                매장에서 사용 가능한 스마트 POS 시스템
              </p>
            </li>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] max-[450px]:text-[18px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.26px] leading-[150%]  font-PoppinsMedium text-[#06B6D4] mb-6'>
                Yoshop POS
              </p>
              <Image
                src={YoshoPos}
                width={326}
                height={200}
                className='serviceImage mb-6 max-[450px]:mb-5'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                매장에서 사용 가능한 스마트 POS 시스템
              </p>
            </li>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] max-[450px]:text-[18px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.26px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                VIXPAY Payment
              </p>
              <Image
                src={VixpayPay}
                width={326}
                height={200}
                className='serviceImage mb-6 max-[450px]:mb-5'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                신용카드, 현금, 쿠폰, 암호화폐 등모 든 결제수단을 지원할 수 있는
                PG 서비스
              </p>
            </li>
            <li className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] max-[450px]:text-[18px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.26px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                VIXPAY Network
              </p>
              <Image
                src={VixpayNetwork}
                width={326}
                height={200}
                className='serviceImage mb-6 max-[450px]:mb-5'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                하이퍼레져 기반의 암호화폐 Eco system
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[112px] pb-[149px] max-[450px]:pt-14 max-[450px]:pb-[35px] max-[450px]:px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center mb-20'>
            <p className='font-PoppinsMedium mb-1 text-[18px] max-[450px]:text-[15px] max-[450px]:tracking-[-0.18px] leading-[135%] text-[#9CA3AF] tracking-[-0.26px]'>
              FAQ
            </p>
            <h2 className='font-PoppinsBold mb-5 text-[36px] max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.49px] leading-[110%] text-[#374151] tracking-[-0.79px]'>
              Frequently asked questions
            </h2>
            <p className='font-NotoSansKoreanRegular text-[18px] max-[450px]:text-[15px] max-[450px]:leading-[24px] leading-[150%] text-[#4B5563] tracking-[-0.26px] max-w-[824px] w-full mx-auto'>
              자주하시는 질문과 궁금해 하시는 질문들을 정리했습니다.
            </p>
          </div>
          <ul className='flex items-center justify-between max-w-[405px] w-full mx-auto mb-10 max-[450px]:hidden'>
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
          <Select
            // onGetValue={(e) => {
            //   setActiveTab(e.id), setFilteredTab(tab.questions.slice(0, 5));
            // }}
            selectClassName={"hidden max-[450px]:inline-block"}
          >
            {tabs.length > 0 &&
              tabs.map((tab) => {
                return (
                  // <TabNavItem
                  //   activeTab={activeTab}
                  //   key={tab.id}
                  //   id={tab.id}
                  //   setActiveTab={(id) => {
                  //     setActiveTab(id),
                  //       setFilteredTab(tab.questions.slice(0, 5));
                  //   }}
                  // >
                  //   {tab.title}
                  // </TabNavItem>
                  <option value={tab.title} key={tab.id} id={tab.id}>
                    {tab.title}
                  </option>
                );
              })}
          </Select>
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
      <section className='py-[166px] bg-[#EEF8FF] max-[450px]:py-14 max-[450px]:px-6' id='contact'>
        <div className='max-w-xl mx-auto flex items-end justify-between max-[450px]:flex-col max-[450px]:gap-y-9'>
          <div className='max-w-[630px] w-full'>
            <p className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#71717A] font-PoppinsMedium mb-3 max-[450px]:text-[15px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.18px] max-[450px]:text-center'>
              Contact Us
            </p>
            <h2 className='text-[36px] leading-[110%] tracking-[-0.79px] text-[#71717A] font-PoppinsBold mb-7 max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:mb-3 max-[450px]:text-center'>
              Get started with VIXPAY
            </h2>
            <p className='text-[18px] leading-[158%] tracking-[-0.26px] text-[#71717A] font-PoppinsMedium mb-14 max-[450px]:text-center max-[450px]:mb-8'>
              VIXPAY은 e-commerce를 운영하시는 분들에게 꼭 필요한 서비스를
              만듭니다. 좋은 경험을 심하는 것만으로도 부족한 하루, 어제보다 더
              풍요로운 오늘이 될 수있도록 문제를 찾아 해결합니다
            </p>

            <div className='max-w-[504px] w-full bg-[#0E7490] contact-wrapper rounded-xl p-6 border border-solid border-white opacity-70 mb-5 max-[450px]:mb-4'>
              <div className='flex items-center mb-[18px] max-[450px]:mb-3'>
                <Image
                  src={Location}
                  width={24}
                  height={24}
                  alt='location'
                  className='mr-3'
                />
                <p className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#fff] font-PoppinsMedium max-[450px]:text-[15px] max-[450px]:tracking-[-0.18px]'>
                  Location
                </p>
              </div>
              <p className='text-[15px] leading-[135%] max-[450px]:text-[14px] max-[450px]:leading-[140%] max-[450px]:tracking-[-0.09px] tracking-[-0.18px] text-[#fff] font-PoppinsMedium'>
                서울특별시 금천구 가산디지털2로 53,
                1901~1902호(가산동,한라시그마밸리)(주)나우앤페이
              </p>
            </div>
            <div className='max-w-[504px] w-full bg-[#0E7490] contact-wrapper rounded-xl p-6 border border-solid border-white opacity-70'>
              <div className='flex items-center mb-[18px] max-[450px]:mb-3'>
                <Image
                  src={Tel}
                  width={24}
                  height={24}
                  alt='tel'
                  className='mr-3'
                />
                <p className='text-[18px] leading-[135%] tracking-[-0.26px] text-[#fff] font-PoppinsMedium max-[450px]:text-[15px] max-[450px]:tracking-[-0.18px]'>
                  Tel
                </p>
              </div>
              <p className='text-[15px] leading-[135%] tracking-[-0.18px] text-[#fff] font-PoppinsMedium max-[450px]:text-[14px] max-[450px]:leading-[140%] max-[450px]:tracking-[-0.09px]'>
                (+82) 02 3285 0555
              </p>
            </div>
          </div>
          <div className='max-w-[511px] w-full bg-[#FFFFFF] rounded-[20px] inputCard py-12 px-[55px] max-[450px]:px-5 max-[450px]:py-8'>
            <Input
              id={'email'}
              title={'이메일'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              labelWrapperClassName={"mb-1"}
              type={'email'}
              value={email}
              onGetValue={(value) => setEmail(value)}
              wrapperClassName={'flex flex-col mb-4'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold'
              }
            />
            <Input
              id={'email'}
              title={'이름'}
              className={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicRegular p-[10px]'
              }
              labelWrapperClassName={"mb-1"}
              type={'email'}
              value={name}
              onGetValue={(value) => setName(value)}
              wrapperClassName={'flex flex-col mb-4'}
              labelClassName={
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold'
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
                'text-[15px] leading-[24px] text-[#4B5563] font-NanumGothicBold mb-1'
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
      <section className="pt-[112px] pb-[104px] bg-[url('../public/assets/images/company-bg.png')] bg-no-repeat bg-cover bg-center max-[450px]:px-6 max-[450px]:py-14">
        <div className='max-w-xl mx-auto text-center'>
          <p className='text-[18px] max-[450px]:text-[15px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.18px] max-[450px]:mb-3 leading-[135%] text-[#fff] tracking-[-0.26px] font-PoppinsMedium mb-1'>
            Company Profile
          </p>
          <h3 className='text-[36px] max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:mb-[14px] leading-[110%] text-[#fff] tracking-[-0.79px] font-PoppinsBold mb-5'>
            Company Introduction
          </h3>
          <p className='text-[20px] max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:mb-[26px] leading-[160%] text-[#fff] tracking-[-0.33px] font-NanumGothicRegular mb-14'>
            더 자세한 정보는 소개자료를 참고해주세요.
          </p>
          <Button
            className={
              'flex items-center rounded-md border bg-[#fff] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] border-solid border-[#D1D5DB] hover:border-[#22c9ee] py-4 px-6 max-[450px]:px-4 max-[450px]:py-3 mx-auto'
            }
          >
            <Image
              src={Download}
              width={20}
              height={20}
              className='mr-[10px] w-4 h-4'
              alt='Download'
            />
            <p className='text-[19px] max-[450px]:text-[13px] max-[450px]:leading-[130%] max-[450px]:tracking-[-0.04px] leading-[20px] tracking-[-0.3px] font-RubikMedium text-[#22C9EE]'>
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
