export default function Switch({ label ,...props }) {
  return (
    <>
        <input id="switch" type="checkbox" {...props} />
        <label htmlFor="switch" id="label">{label}</label>
    </>
    
  );
}