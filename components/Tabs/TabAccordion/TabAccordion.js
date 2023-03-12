import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import Plus from '../../../public/assets/images/plus-tab.svg'
import Minus from '../../../public/assets/images/minus-tab.svg'
import Image from "next/image";

const TabAccordion = ({title,children, accordionHeaderClass}) => {
    return (
        <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}} className="bg-[#EEF8FF] qaAccordion mb-4 rounded-[4px]">
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className={`w-full flex justify-between items-center text-gray-600 p-6 ${accordionHeaderClass}`}>
                            <span className="text-[18px] leading-[135%] font-PoppinsSemibold tracking-[-0.26px] text-[#000]">Q. {title}</span>
                            {
                                !open ? <Image src={Plus} width={20} height={20} alt="plus" /> : <Image src={Minus} width={20} height={20} alt="minus" />
                            }

                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-5 font-light">
                                {children}
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    );
};

export default TabAccordion;