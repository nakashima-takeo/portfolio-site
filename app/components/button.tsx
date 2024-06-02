
type ButtonProps = {
  text: string;
  url: string;
};

export default function Button({text, url}: ButtonProps) {
  return (
    <button className="px-5 py-4 bg-gray-900 text-gray-100 rounded transition-all duration-250 ease-out hover:translate-y-[-3px]">
      <a href={url} className="mx-5">
        {text}
      </a>
    </button>
  );
}
