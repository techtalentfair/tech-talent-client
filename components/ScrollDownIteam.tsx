import Link from "next/link";

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
      className="group animate-bounce flex flex-col justify-center gap-2 items-center cursor-pointer"
      href={href}
    >
      <span
        className={`text-[14px] ${textColor} ${hoverColor} transition-all duration-600`}
      >
        {text}
      </span>
      <div
        className={`w-[20px] h-[30px] flex justify-center items-center border-2 rounded-full border-white group-hover:border-purple-500 transition-all duration-600`}
      >
        <div
          className={`w-1 h-2 bg-white rounded-full group-hover:bg-purple-500 transition-all duration-600`}
        ></div>
      </div>
    </Link>
  );
};

export default ScrollDownItem;
