import Image from "next/image";
import useImages from "../../hooks/useImages";
import Link from "next/link";

export default function Footer() {
  const { Logo } = useImages();
  return (
    <footer className="bg-secondary">
      <div className="h-[1px] bg-gradient-to-l from-transparent via-primary to-transparent"></div>
      <div className="container">
        <div className="flex justify-between items-center py-5 ">
          <div className="w-1/5">
            <Image src={Logo} alt="logo" width={40} height={40} />
          </div>
          <div className="w-3/5 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br flex justify-center items-center from-primarytransparent via-primarytransparent to-transparent animate-pulse">
            <Link href="/" replace>
                <div className="hover:-mt-4 transition-all duration-3000 ease-in-out w-10 h-10 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-primary active"
 
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-1/5 text-end">
            {/* all rights reserved */}
            <p className="text-lightgray text-sm">
              &copy; 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
