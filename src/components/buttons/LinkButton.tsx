import Link from "next/link";

type LinkButtonProps = {
  type: string;
  buttontype: string;
  text: string;
  url?: string;
  icon?: boolean;
  side?: string;
  onMouseEnter?: () => void; // Add this line
  onMouseLeave?: () => void; // Add this line
  onClick?: () => void;
  className?: string;
  ref?: React.RefObject<HTMLAnchorElement>;
  style?: React.CSSProperties;
};

export default function LinkButton({
  type,
  buttontype,
  text,
  url,
  icon,
  side,

  onMouseEnter,
  onMouseLeave,
  onClick,
  className,
  style,
}: LinkButtonProps) {
  
  return type === "light" ? (
    <Link
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={url || "javascript.void(0)"}
      onClick={onClick}
      style={style}
      className={`${
        side === "r" ? "bg-gradient-to-r" : "bg-gradient-to-l"
      }  from-white to-transparent  text-secondary
        ${icon ? "px-7 py-3" : "px-5 py-3"}
     flex justify-start gap-5 items-center rounded-full`}
    >
      {text}

      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </Link>
  ) : (
    <Link
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={url || "/"}
      onClick={onClick}
      style={style}
      className={`${
        side !== "r" ? "bg-gradient-to-r" : "bg-gradient-to-l"
      } from-primary to-transparent text-white hover:bg-gradient-to-r
        ${icon ? "px-7 py-3" : "px-5 py-3"}
       flex justify-start gap-2 items-center rounded-full`}
    >
      {text}
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </Link>
  );
}
