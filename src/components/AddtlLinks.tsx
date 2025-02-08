import LinkTag from "./LinkTag";

const AddtlLinks = ({ links }: { links: { [key: string]: string } }) => {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Additional Links">
      {Object.entries(links).map(([name, link]) => (
        <LinkTag key={link} name={name} link={link} />
      ))}
    </ul>
  );
};

export default AddtlLinks;
