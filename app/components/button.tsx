
type ButtonProps = {
  text: string;
  url: string;
};

export default function Button({text, url}: ButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="px-5 py-4 bg-gray-900 text-gray-100 rounded transition-all duration-250 ease-out hover:translate-y-[-3px] mx-5">
        <p className="mx-4">{text}</p>
      </button>
    </a>
  );
}
