import { Link } from "react-router-dom";

const homeLinkClass =
  "p-3 bg-gray-100 opacity-75 rounded text-center text-gray-900 px-6 font-semibold focus:outline-none hover:bg-gray-300";

const navLinkClass = "text-white hover:text-gray-200";

interface IProps {
  to: string;
  text: string;
  component: "nav" | "home";
}

export default function LinkButton({ to, text, component }: IProps) {
  return (
    <Link to={`/${to}`}>
      <h1 className={component === "nav" ? navLinkClass : homeLinkClass}>
        {text}
      </h1>
    </Link>
  );
}
