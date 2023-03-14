export default function CustomFormattedMessage({ id, value, tag }) {
  return <p className="w-full" data-tinafield={id}>{value}</p>;
}
