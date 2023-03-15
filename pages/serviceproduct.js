import Image from "next/image";
import Button from "@/components/Button";
import AppStore from '../public/assets/images/app-store.svg';
import PlayMarket from '../public/assets/images/google-play.svg';

const ServiceProduct = () => {
  return (
    <main className="pt-20">
      <section className='bg-[#0E7490]'>
        <div className='max-w-xl mx-auto py-[130px]'>
          <h2 className='text-[60px] leading-[100%] tracking-[-1.34px] font-PoppinsBold text-center text-[#fff]'>
            Service & Product
          </h2>
        </div>
      </section>
      <section className='pt-[112px] pb-[100px]'>
        <div className='mx-auto max-w-xl'>
          <p className='text-[18px] leading-[135%] tracking-[-0.26px] font-PoppinsMedium text-center text-[#6B7280] mb-1'>
            Solutions
          </p>
          <p className='text-[36px] leading-[110%] tracking-[-0.79px] font-PoppinsBold text-center text-[#1F2937] mb-[20px]'>
            Payment Solutions for Your Business
          </p>
          <p className='max-w-[816px] w-full mx-auto text-[20px] leading-[160%] font-PoppinsRegular text-[#4B5563] tracking-[-0.33px] text-center'>
            VIXPAY 솔루션을 이용해 사업자, 상점, 소비자를 통합하는 서비스를
            제공할 수 있 습니다. VIXPAY 솔루션은 온라인과 오프라인을 통합하고
            다양한 사용자를 연결하는 독창적인 비즈니스 아이디어를 실현할 수
            있도록 제공합니다.
          </p>
        </div>
      </section>
      <section id="vixpaypayment" className="bg-[url('../public/assets/images/vixpay-payment-service.svg')] bg-cover h-[360px] bg-no-repeat"></section>
      <section className='pt-[56px] pb-[102px]'>
        <div className='max-w-[1109px] w-full mx-auto'>
          <h3 className='text-[24px] leading-[150%] tracking-[-0.47px] text-[#111827] font-PoppinsBold mb-6'>
            VIXPAY Payment
          </h3>
          <ul className="flex items-start justify-between">
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
                - 신용카드 등 전통적인 결제수단부터, 간편 결제, 토큰 결제 등
                최신 결제 수단 등 다양한 결제수단을 지원합니다.
              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
                - 승인, 리워드, 정산 등 전체적인 결제 시스템에 고유한 비즈니스 규칙 적용하여 차별화된 서비스 제공할 수 있습니다.
              </p>
            </li>
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - Cloud 기반의 결제 시스템으로 독립적인 초기비용을 최소화 하여 구성할 수 있습니다.

              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - VIXPAY Network와 연동해 ERC20 스펙의 토큰을 이용한 지불/결제 서비스를 제공할 수 있습니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section id="vixpay" className="bg-[url('../public/assets/images/vixpay.svg')] bg-cover h-[360px] bg-no-repeat"></section>
      <section className='pt-[56px] pb-[102px]' id="vixpay">
        <div className='max-w-[1109px] w-full mx-auto'>
          <h3 className='text-[24px] leading-[150%] tracking-[-0.47px] text-[#111827] font-PoppinsBold mb-6'>
            VIXPAY
          </h3>
          <ul className="flex items-start justify-between">
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - HyperLedger Besu을 기반으로 결제 처리에 최적화 하여 개발한 블록체인 솔루션으로 빠른 처리 속도와 신뢰성를 확보하고 있습니다. 거래 승인은 프라이빗하게 처리되어 빠른 승인 속도를 확보하고, 거래내역을 모두 다 공유하여 신뢰성을 보장합니다
              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - 어려운 기술 지식에 대한 학습 없이 사용할 수 있는 전용 관리도구를 제공해 당신만의 독립적인 Eco System을 구성할 수 있습니다.
              </p>
            </li>
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - ERC20 기반의 토큰을 지원하여 이더리움 메인넷과 연동한 환경을 구성할 수 있습니다.
              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - BlockScanner, APIDocument를 사용하여 VIXPAY Network를 이용한 고유의 서
비스 개발이 가능합니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[url('../public/assets/images/vixpay-app.svg')] bg-cover h-[360px] bg-no-repeat"></section>
      <section className='pt-[56px] pb-[102px]'>
        <div className='max-w-[1109px] w-full mx-auto'>
          <h3 className='text-[24px] leading-[150%] tracking-[-0.47px] text-[#111827] font-PoppinsBold mb-6'>
            VIXPAY
          </h3>
          <ul className="flex items-start justify-between">
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - 안전하고 편리한 사용자용 Wallet으로 여러 개가 지갑 주소를 관리 할 수 있으며, VIXPAY Network에 등록된 다양한 토큰을 사용할 수 있습니다.
              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - VIXPAY Network, Yoshop POS와 함께 결제, Reward 기능을 구성할 수도 있어 당신의 블록체인 ECO시스템에 사용자와 상점을 연결한 서비스를 구성할 수 있습니다.
              </p>
            </li>
            <li className="max-w-[539px] w-full flex gap-4">
            <Button
              className={
                'flex items-center rounded-md border-[3px] border-solid border-[#D1D5DB] py-3 px-4 shadow-[1px_2px_2px_rgba(0,0,0,0.07)]'
              }
            >
              <p className='text-[18px] leading-[1px] font-PromptMedium text-[#7D7C7C] mr-1'>
                Google Play
              </p>
              <Image
                src={PlayMarket}
                width={24}
                height={24}
                className=''
                alt='app'
              />
            </Button>
            <Button
              className={
                'flex items-center rounded-md border-[3px] border-solid border-[#D1D5DB] py-3 px-4 shadow-[1px_2px_2px_rgba(0,0,0,0.07)]'
              }
            >
              <Image
                src={AppStore}
                width={24}
                height={24}
                className="mr-2"
                alt='app'
              />
              <p className='text-[18px] leading-[30px] font-PromptMedium text-[#7D7C7C]'>
                App Store
              </p>
            </Button>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[url('../public/assets/images/vixpay-devices.svg')] bg-cover h-[360px] bg-no-repeat"></section>
      <section className='pt-[56px] pb-[300px]'>
        <div className='max-w-[1109px] w-full mx-auto'>
          <h3 className='text-[24px] leading-[150%] tracking-[-0.47px] text-[#111827] font-PoppinsBold mb-6'>
          VIXPAY POS
          </h3>
          <ul className="flex items-start justify-between">
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - VIXPAY Payment와 연동된 Yoshop POS는 되어 당신의 사업영역을 쉽게 확대할 수 있습니다.
              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              -- Android 기반의 POS 솔루션으로 현금, 신용카드 외에 간편결제, VIXPAY App과 연동한 리워드와 결제 서비스가 연동되어 있습니다.
              </p>
            </li>
            <li className="max-w-[539px] w-full flex flex-col gap-4">
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - POS와 Cloud 시스템으로 통합된 백오피스 서비스를 이용해 상점을 더욱 효과적으로 관리할 수 있습니다.
              </p>
              <p className="text-[15px] leading-[24px] text-[#6B7280] font-NanumGothicRegular">
              - POS, TableOrder, 휴대용POS, KIOSK 등 상점의 판매 유형을 지원합니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ServiceProduct;
