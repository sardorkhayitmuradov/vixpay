import Link from "next/link";
import Image from "next/image";
import FooterLogo from '../public/assets/images/footer-logo.svg';
import Facebook from '../public/assets/images/facebook.svg';
import Instagram from '../public/assets/images/instagram.svg';
import Twitter from '../public/assets/images/twitter.svg';
import Github from '../public/assets/images/github.svg';
import Dribble from '../public/assets/images/dribble.svg';
import Copyright from '../public/assets/images/copyright.svg'

const Footer = () => {
  return (
    <footer className="py-[52px] max-[450px]:px-6 max-[450px]:py-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-4">
          <Link href="/" >
            <Image src={FooterLogo} alt="site-logo" width={115} height={29} />
          </Link>
        </div>
        <div className="flex items-center pb-[52px] max-[450px]:pb-8">
          <div className="max-w-[337px] w-full">
            <h4 className="mb-4 text-[#9CA3AF] max-[450px]:text-[15px] max-[450px]:leading-[135%] text-[18px] leading-[150%] font-PoppinsRegular max-[450px]:mb-6">Make radically better things</h4>
            <div className="flex items-center max-w-[240px] w-full justify-between">
              <Link href="/" className="cursor-pointer">
                <Image src={Facebook} alt="footer-icons" width={24} height={24} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image src={Instagram} alt="footer-icons" width={24} height={24} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image src={Twitter} alt="footer-icons" width={24} height={24} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image src={Github} alt="footer-icons" width={24} height={24} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image src={Dribble} alt="footer-icons" width={24} height={24} />
              </Link>
            </div>
          </div>
          <ul className="max-w-[812px] w-full flex items-center justify-between max-[450px]:hidden">
            <li>
              <Link href="/" className="text-[#9CA3AF] font-PoppinsRegular" >
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#9CA3AF] font-PoppinsRegular" >
              Community
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#9CA3AF] font-PoppinsRegular" >
              Service&Product
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#9CA3AF] font-PoppinsRegular" >
              Resources
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#9CA3AF] font-PoppinsRegular" >
              VIXCOScan
              </Link>
            </li>
          </ul>
        </div>

        <hr className="text-[#E5E7EB] mb-6" />
        <div className="text-center text-[#9CA3AF] font-PoppinsRegular flex items-center justify-center max-[450px]:w-[80%] max-[450px]:text-left">
          <Image src={Copyright} alt="site-logo" className="mr-3" width={14} height={14} />  
          <p>Copyright 2021 NownPay. All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;