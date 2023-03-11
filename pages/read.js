import Link from "next/link";
import Button from "@/components/Button";

const Read = () => {
  return (
    <main className="pt-20">
      <section className='bg-[#0E7490]'>
        <div className='max-w-xl mx-auto py-[130px]'>
          <h2 className='text-[60px] leading-[100%] tracking-[-1.34px] font-PoppinsBold text-center text-[#fff]'>
            Q&A
          </h2>
        </div>
      </section>
      <section>
        <div className='max-w-[1109px] w-full mx-auto py-[112px] flex flex-col'>
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
          <ul className="flex flex-col gap-y-3 mb-[62px]">
            <li className="flex items-center">
              <p className="w-[13%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">이름</p>
              <p className="w-[80%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">Writer Name</p>
            </li>
            <li className="flex items-center">
              <p className="w-[13%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">이메일주소</p>
              <p className="w-[80%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">heejung.lee@ibexlab.com</p>
            </li>
            <li className="flex items-center">
              <p className="w-[13%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">전화번호</p>
              <p className="w-[80%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">010-3254-8594</p>
            </li>
            <li className="flex items-center">
              <p className="w-[13%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">제목</p>
              <p className="w-[80%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563]">Aritcle title</p>
            </li>
            <li className="flex flex-col">
              <p className="w-[13%] text-[15px] leading-[24px] font-NanumGothicRegular text-[#4B5563] mb-1">문의 내용</p>
              {/* <p className="w-[80%]">Writer Name</p> */}
              <div className="rounded-md shadow-[0px_1px_10px_1px_rgba(0,0,0,0.07)] border-solid border-[#D1D5DB] p-[10px] pb-10 border-[2px] mb-3">
                <p className="font-PoppinsRegular text-[15px] leading-[135%] text-[#1F2937]">Content text....  This is read only</p>
              </div>
              <div className="rounded-md shadow-[0px_1px_10px_1px_rgba(0,0,0,0.07)] border-solid border-[#D1D5DB] p-[10px] pb-10 border-[2px] mb-3">
                <p className="font-PoppinsRegular text-[15px] leading-[135%] text-[#1F2937]">Comment ...   replied from admin  readonly</p>
              </div>
            </li>
          </ul>
          <div className='flex items-start gap-x-[18px] self-end'>
              <Button
                className={
                  'flex items-center rounded-md bg-[white] shadow-[0px_1px_2px_1px_rgba(0,0,0,0.07)] border-solid border-[#D1D5DB] border-[2px] hover:border py-3 px-4 mx-auto inputButton'
                }
              >
                <p className='text-[15px] leading-[135%] tracking-[-0.18px] font-NanumGothicRegular text-[#4B5563]'>
                목록으로
                </p>
              </Button>
              <Link href={'/write'}
                className={
                  'flex items-center rounded-md bg-[#22C9EE] shadow-[0px_1px_1px_1px_rgba(0,0,0,0.07)] border-solid hover:border-[#22c9ee] py-3 px-4 mx-auto inputButton'
                }
              >
                <p className='text-[15px] leading-[135%] tracking-[-0.18px] font-NanumGothicRegular text-[#FFFFFF]'>
                수정하기
                </p>
              </Link>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Read;
