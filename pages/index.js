import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Input from '@/components/Input/Input';
import Image from 'next/image';
import Button from '@/components/Button';
import AppStore from '../public/assets/images/app-store.svg';
import PlayMarket from '../public/assets/images/google-play.svg';
import CryptoCurrency from '../public/assets/images/cryptocurrency-ecosystem.png';
import VixpayPayment from '../public/assets/images/vixpay-system.png';
import tabs from '../constants/tabs';
import TabNavItem from '@/components/Tabs/TabNavItem/TabNavItem';
import TabAccordion from '@/components/Tabs/TabAccordion/TabAccordion';
import Location from '../public/assets/images/location.svg';
import Tel from '../public/assets/images/tel.svg';
import Textarea from '@/components/Textarea/Textarea';
import Download from '../public/assets/images/download.svg';
import { companyClients } from '@/constants/companyClients';
import Select from '@/components/Select';
import Link from 'next/link';
import { useTina } from "tinacms/dist/react";
import { getLangTina } from '@/functions/get_lang_tina';
import CustomFormattedMessage from '@/components/CustomFormattedMessage/CustomFormattedMessage';
import CustomFormattedImage from '@/components/CustomFormattedImage/CustomFormattedImage';

export default function Home(props) {
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

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.homepage_texts_fetch

  useEffect(() => {
    paginateFilteredTab(page);
  }, [page]);
  // console.log(pageData)

  return (
    <main className='pt-20'>
      <section className='max-[450px]:pb-[54px]'>
        <div className="max-w-xl mx-auto pt-[156px] pb-[194px] max-[450px]:pt-10 max-[450px]:pb-[100px] max-[450px]:text-center w-full bg-[url('../public/assets/images/hero-bg.png')] max-[450px]:bg-[url('../public/assets/images/hero-mobile-bg.svg')] bg-no-repeat bg-[top_right_-24px] max-[450px]:bg-bottom">
          <h1 className='text-[52px] font-PoppinsRegular leading-[136%] mb-[60px] tracking-[-1.34px] text-[#111827] max-[450px]:px-6 max-w-[650px] w-full max-[450px]:text-[30px] max-[450px]:leading-[136%] max-[450px]:tracking-[-0.64px] max-[450px]:mb-10'>
            {pageData.hero_title}
          </h1>
          <p className='text-[24px] mb-[30px] font-PoppinsRegular leading-[135%] tracking-[-0.18px] uppercase max-[450px]:mb-10 max-[450px]:px-6'>
          {pageData.hero_subtitle}
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
              {pageData.app_store}
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
              {pageData.play_market}
              </p>
            </Button>
          </div>
        </div>
      </section>
      <section className='pt-[138px] pb-[122px] about-section max-[450px]:py-14'>
        <div className='max-w-xl mx-auto max-[450px]:px-6'>
          <h2 className='text-[36px] leading-[110%] font-PoppinsBold tracking-[-0.79px] text-white text-center mb-7 max-[450px]:text-[24px] max-[450px]:leading-[150%]'>
            {pageData.about_vixpay}
          </h2>
          <p className='text-center max-w-[994px] w-full mx-auto text-[18px] mb-6 leading-[158%] tracking-[-0.26px] font-NanumGothicRegular text-white max-[450px]:text-[15px] max-[450px]:leading-[24px]'>
            {pageData.about_vixpay_text}
          </p>
          <p className='text-center max-w-[994px] w-full mx-auto text-[18px] leading-[158%] tracking-[-0.26px] font-NanumGothicRegular text-white max-[450px]:text-[15px] max-[450px]:leading-[24px]'>
            {pageData.about_vixpay_subtext}
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
                  {pageData.vixpay_blockchain}
                </span>
                <h3 className='text-[36px] mb-7 max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:max-w-[300px] max-[450px]:w-full max-[450px]:mx-auto leading-[110%] tracking-[-0.79px] text-[#1F2937] font-PoppinsBold'>
                {pageData.vixpay_blockchain_text}
                </h3>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:text-center'>
                  {pageData.vixpay_blockchain_subtext}
                </p>
                <Link href={`/serviceproduct` + "#vixpay" }
                  className={
                    'border border-solid border-[#22C9EE] app rounded-[6px] py-4 px-6 shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] max-[450px]:py-[10px] max-[450px]:px-4 inline-block'
                  }
                >
                  <p className='text-[19px] max-[450px]:text-[14px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.09px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
                    {pageData.learn}
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
                  {pageData.vixpay_payment_system}
                </span>
                <h3 className='text-[36px] mb-7 leading-[110%] tracking-[-0.79px] text-[#1F2937] font-NotoSansKoreanMedium max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] max-[450px]:max-w-[300px] max-[400px]:max-w-[250px] max-[450px]:mx-auto max-[450px]:text-center'>
                  {pageData.vixpay_payment_system_title}
                </h3>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:text-center'>
                  {pageData.vixpay_payment_system_text}
                </p>
                <p className='text-[18px] mb-11 leading-[158%] tracking-[-0.26px] text-[#4B5563] font-PoppinsRegular max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:text-center'>
                  {pageData.vixpay_payment_system_subtext}
                </p>
                <Link href={`/serviceproduct` + "#vixpaypayment"}
                  className={
                    'border border-solid border-[#22C9EE] app rounded-[6px] py-4 px-6 shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] max-[450px]:py-[10px] max-[450px]:px-4 inline-block'
                  }
                >
                  <p className='text-[19px] max-[450px]:text-[14px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.09px] leading-[20px] font-RubikSemibold tracking-[-0.3px] text-[#4B5563]'>
                    {pageData.learn}
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
              {pageData.clients}
            </p>
            <h2 className='font-PoppinsBold max-[450px]:text-[24px] max-[450px]:leading-[150%] max-[450px]:tracking-[-0.47px] mb-5 text-[36px] leading-[110%] text-[#1F2937] tracking-[-0.79px] max-[450px]:mb-[14px]'>
              {pageData.clients_text}
            </h2>
            <p className='font-NotoSansKoreanRegular mb-5 text-[18px] leading-[158%] text-[#4B5563] tracking-[-0.26px] max-[450px]:text-[15px] max-[450px]:leading-[24px] max-[450px]:mb-0'>
              {pageData.clients_subtext}
            </p>
          </div>
          <ul className='flex items-center flex-wrap justify-between gap-y-[90px] max-[450px]:gap-y-10'>
            {pageData.clients_items.length > 0 &&
              pageData.clients_items.map((client, index) => (
                <li
                  key={index}
                  className='max-w-[610px] w-full flex items-center justify-between max-[450px]:flex-col'
                >
                  <Image
                    src={client.icon}
                    width={150}
                    height={150}
                    className='max-[450px]:hidden'
                    alt='company-logo'
                  />
                  <Image
                    src={client.iconMobile}
                    width={200}
                    height={150}
                    className='max-[450px]:inline-block hidden'
                    alt='company-logo'
                  />
                  <div className='max-w-[400px] w-full'>
                    <h3 className='text-[24px] max-[450px]:text-center leading-[150%] font-NotoSansKoreanMedium text-[#06B6D4] mb-3'>
                      {client.title}
                    </h3>
                    <p className='text-[15px] leading-[24px] text-[#1F2937] font-NotoSansKoreanRegular mb-3'>
                      {client.description}
                    </p>
                    <p className='text-[16px] leading-[24px] font-PoppinsSemibold'>
                      {client.link}
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
              {pageData.service}
            </p>
            <h2 className='font-PoppinsBold mb-5 text-[36px] max-[450px]:text-[24px] max-[450px]:mb-7 leading-[110%] text-[#1F2937] tracking-[-0.79px]'>
              {pageData.service_text}
            </h2>
            <p className='font-NotoSansKoreanRegular text-[18px] leading-[150%] text-[#4B5563] tracking-[-0.26px] max-w-[824px] w-full mx-auto max-[450px]:text-[15px] max-[450px]:leading-[160%]'>
              {pageData.service_subtext}
            </p>
          </div>
          <ul className='flex items-center justify-between flex-wrap max-w-[800px] w-full mx-auto gap-y-20 max-[450px]:gap-y-12'>
            {pageData.service_items.length > 0 && pageData.service_items.map((service,index) => (
              <li key={index} className='flex flex-col items-center justify-between max-w-[320px] w-full text-center cursor-pointer hover:scale-105 duration-300'>
              <p className='text-[24px] max-[450px]:text-[18px] max-[450px]:leading-[135%] max-[450px]:tracking-[-0.26px] leading-[150%] font-PoppinsMedium text-[#06B6D4] mb-6'>
                {service.title}
              </p>
              <Image
                src={service.icon}
                width={326}
                height={200}
                className='serviceImage mb-6 max-[450px]:mb-5'
                alt='service'
              />
              <p className='text-[15px] leading-[24px] text-[#1F2937] font-NanumGothicBold'>
                {service.description}
              </p>
            </li>
            ))}
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
  const pageResponse = await getLangTina(context.locale);
  
  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  };
}
