import Link from "next/link";
import { ArrowBigDown } from "lucide-react";

type ScrollDownItemProps = {
  text?: string;
  href?: string;
  textColor?: string;
  hoverColor?: string;
};

const ScrollDownItem: React.FC<ScrollDownItemProps> = ({
  text = "Discover more",
  href = "#",
  textColor = "text-white",
  hoverColor = "group-hover:text-purple-500",
}) => {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-2 cursor-pointer animate-bounce"
    >
      <span className={`text-sm ${textColor} ${hoverColor} transition-all`}>
        {text}
      </span>
        <ArrowBigDown
          size={18}
          className="text-[#C084FC] size-6 group-hover:text-purple-500 transition-all"
        />
    </Link>
  );
};

export default ScrollDownItem;
