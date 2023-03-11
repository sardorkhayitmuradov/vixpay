import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/icons/logo.svg';
import { useRouter } from "next/router";
import Menu from '../public/assets/icons/menu.svg'

const Header = () => {
  const router = useRouter()
  return (
    <header className="py-5">
      <div className="max-w-xl mx-auto flex items-center justify-between max-[450px]:px-6">
        <Link href={'/'} >
          <Image src={Logo} alt="site-logo" width={138} height={38} />
        </Link>
        <Image src={Menu} height={24} width={24} alt="menu" className="hidden max-[450px]:inline-block" />
        <nav className="max-w-[1100px] w-full max-[450px]:hidden">
          <ul className="flex items-center justify-between w-full">
            <li>
              <Link href="/" className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/community" className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/community" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
               Community 
              </Link>
            </li>
            <li>
              <Link href="/serviceproduct" className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/serviceproduct" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
              Service&Product
              </Link>
            </li>
            <li>
              <Link href={`/` + '#contact'} className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/contact" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
              Contact Us
              </Link>
            </li>
            <li>
              <Link href={`http://www.yollet.net/doc/block-api-reference.html`} target="_blank" className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/resource" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
              Resource
              </Link>
            </li>
            <li>
              <Link href="https://yollet-scan.vercel.app/" target="_blank" className={`py-2 text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/scan" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
              VIXCOScan
              </Link>
            </li>
            <li>
              <Link href={`/` + "#services"} className={`py-2 text-[#4B5563] hover:text-[#22C9EE] font-PoppinsBold text-[18px] leading-[135%] tracking-[-0.26px] px-3 ${router.pathname == "/services" ? "bg-[#CFF8FE] hover:text-[#4b5563] rounded-[8px]": ""}`}>
              Partners Service
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
    </header>
  );
};

export default Header;