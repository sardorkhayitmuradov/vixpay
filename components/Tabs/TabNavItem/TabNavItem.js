const TabNavItem = ({ id, children, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={`${activeTab === id ? "bg-[#ECFEFF] text-[#22C9EE]" : "text-[#6B7280]"} py-3 px-4 cursor-pointer text-[14px] leading-[135%] font-PoppinsMedium tracking-[-0.09px] hover:text-[#22c9ee]`}>
     <p>{children}</p>
   </li>
 );
};
export default TabNavItem;