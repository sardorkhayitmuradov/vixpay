import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Menu from '../public/assets/images/menu.svg';
import Logo from '../public/assets/images/logo.svg';
import Close from '../public/assets/images/menu-close.svg';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='py-5 fixed left-0 top-0 bg-white w-full z-10'>
      <div className='max-w-xl mx-auto flex items-center justify-between max-[450px]:px-6'>
        <Link href={'/'}>
          <Image src={Logo} alt='site-logo' width={138} height={38} />
        </Link>
        <Image
          onClick={() => setIsOpen(true)}
          src={Menu}
          height={24}
          width={24}
          alt='menu'
          className='hidden max-[450px]:inline-block'
        />
        <nav className='max-w-[1000px] w-full max-[450px]:hidden'>
          <ul className='flex items-center justify-between w-full'>
            <li>
              <Link
                href='/'
                className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${
                  router.pathname == '/'
                    ? 'bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]'
                    : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/community'
                className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${
                  router.pathname == '/community'
                    ? 'bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]'
                    : ''
                }`}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href='/serviceproduct'
                className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${
                  router.pathname == '/serviceproduct'
                    ? 'bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]'
                    : ''
                }`}
              >
                Service&Product
              </Link>
            </li>
            <li>
              <Link
                href={`/` + '#contact'}
                className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${
                  router.pathname == '/contact'
                    ? 'bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]'
                    : ''
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href={`https://docs.finenex.net/`}
                target='_blank'
                className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${
                  router.pathname == '/resource'
                    ? 'bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]'
                    : ''
                }`}
              >
                Resource
              </Link>
            </li>
            <li>
              <Link
                href='https://vixco-scan.finenex.net/'
                target='_blank'
                className={`py-2 text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${
                  router.pathname == '/scan'
                    ? 'bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]'
                    : ''
                }`}
              >
                VIXCOScan
              </Link>
            </li>
            {/* <li>
              <Link href={`/write`} className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/write" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
            Write
              </Link>
            </li>
            <li>
              <Link href={`/password`} className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/password" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
            Password
              </Link>
            </li>
            <li>
              <Link href={`/read`} className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/read" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
            Read
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
        <>
        <div className={`absolute top-0 left-0 w-full h-screen max-[450px]:block hidden bg-[#d9d9d9cc] z-[1] ${isOpen ? 'max-[450px]:block' : "max-[450px]:hidden"}`}></div>
        <div className={`bg-[#fff] absolute hidden duration-300 max-[450px]:inline-block max-[450px]:w-[60%] top-0 z-10 max-[450px]:h-screen ${isOpen ? "translate-x-2/3" : "translate-x-full right-0"}`}>
          <div className='flex flex-col items-center pt-7 px-6 w-full'>
          <Image
            onClick={() => setIsOpen(false)}
            src={Close}
            alt='close'
            width={24}
            height={24}
            className='max-[450px]:inline-block hidden max-[450px]:self-end'
          />
          <ul className='flex items-start flex-col px-5 py-10'>
            <li className='mb-3' onClick={() => setIsOpen(false)}>
              <Link
                href={'/'}
                className={`text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[15px] leading-[135%] tracking-[-0.26px] ${
                  router.pathname == '/'
                    ? 'rounded-[8px] px-5 bg-[#CFF8FE]'
                    : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li className='mb-3' onClick={() => setIsOpen(false)}>
              <Link
                href={'/community'}
                className={`text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[15px] leading-[135%] tracking-[-0.26px] ${
                  router.pathname == '/community'
                    ? 'rounded-[8px] px-5 bg-[#CFF8FE]'
                    : ''
                }`}
              >
                Community
              </Link>
            </li>
            <li className='mb-3' onClick={() => setIsOpen(false)}>
              <Link
                href={'/serviceproduct'}
                className={`text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[15px] leading-[135%] tracking-[-0.26px] ${
                  router.pathname == '/serviceproduct'
                    ? 'rounded-[8px] px-5 bg-[#CFF8FE]'
                    : ''
                }`}
              >
                Service&Product
              </Link>
            </li>
            <li className='mb-3' onClick={() => setIsOpen(false)}>
              <Link
                href={`/` + '#contact'}
                className={`text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[15px] leading-[135%] tracking-[-0.26px] ${
                  router.pathname == '/contact'
                    ? 'rounded-[8px] px-5 bg-[#CFF8FE]'
                    : ''
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li className='mb-3' onClick={() => setIsOpen(false)}>
              <Link
                href={'http://www.yollet.net/doc/block-api-reference.html'}
                className={`text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[15px] leading-[135%] tracking-[-0.26px] ${
                  router.pathname == '/resource'
                    ? 'rounded-[8px] px-5 bg-[#CFF8FE]'
                    : ''
                }`}
              >
                Resource
              </Link>
            </li>
            <li className='mb-3' onClick={() => setIsOpen(false)}>
              <Link
                href={'https://vixco-scan.finenex.net/'}
                className={`text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[15px] leading-[135%] tracking-[-0.26px] ${
                  router.pathname == '/scan'
                    ? 'rounded-[8px] px-5 bg-[#CFF8FE]'
                    : ''
                }`}
              >
                VIXCOScan
              </Link>
            </li>
          </ul>
          </div>
        </div>
        </>
    </header>
  );
};

export default Header;
