import Image from "next/image";
import useImages from "../../hooks/useImages";
import { useModal } from "../context/ModalContext";

 
export default function Services() {
  const { Creative, Marketing, Events, Development, Workshop ,Seo} = useImages();

  const Services = [
    {
      id: 1,
      title: "BE BRAND Creative",
      description:
        "The most wondrous and ineffable phenomenon, dancing upon the edge of our human experience—creativity.",
      icon: Creative,
      link: "/services/website-design",
    },
    {
      id: 2,
      title: "BE BRAND Marketing",
      description:
        "The astute understanding of human nature—the desires, the fears, the likes, and the motivations.",
      icon: Marketing,
      link: "/services/website-development",
      tools: [
        {
          name: "React",
          logo: "https://reactjs.org/logo-og.png",
        },
        {
          name: "Next.js",
          logo: "https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png",
        },
        {
          name: "TypeScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        },
      ],
    },
    {
      id: 3,
      title: "BE BRAND Events ",
      description:
        "The grand theatre of social gatherings. Careful coordination of actors, scenery, and script.",
      icon: Events,
      link: "/services/mobile-app-development",
    },
    {
      id: 4,
      title: "SEO",
      description:
        "The masterful narrative and the invention of a groundbreaking idea. The true magic lies in execution. ",
      icon: Seo,
      link: "/services/seo",
    },
    {
      id: 5,
      title: "BE BRAND Development Atelier",
      description:
        "Let us value the artistry in every pixel and line of code as we traverse this growing digital frontier.",
      icon: Development,
      link: "/services/social-media-marketing",
    },
    {
      id: 6,
      title: "BE BRAND Workshops ",
      description:
        "The platform for individuals to broaden their perspectives, challenge their assumptions. ",
      icon: Workshop,
      link: "/services/content-marketing",
    },
  ];
  const {openModal,isModalOpen,closeModal} = useModal();
   return (
    <>
      
      
      <section className="py-20 bg-secondary" id="our-illustrious-services">
        <div className="container">
          <span className="text-primary text-sm">Our Illustrious Services </span>
          <h2 className="text-white text-4xl font-bold mt-5">
          Yours in admiration of human creativity.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 bg-main bg-center bg-no-repeat object-cover">
            {Services?.map((item, index) => (
              <div
                className="flex flex-col items-start backdrop-blur-sm bg-black/10 transition-all hover:bg-gradient-to-tl hover:from-primarytransparent hover:via-transparent hover:to-transparent p-5 rounded-md"
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className=""
                />
                <h4 className="text-white text-xl font-bold mt-8">
                  {item.title}
                </h4>
                <p className="text-lightgray text-base  mt-3">
                  {item.description}
                </p>

                <div
                onClick={()=>openModal()}
                   className="text-primary mt-3 flex gap-2 items-center cursor-pointer"
                >
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                {/* <div className="flex flex-start gap-2">
                  {item.tools?.map((tool, index) => (
                    <Image
                      key={index}
                      src={tool.logo}
                      alt={tool.name}
                      width={30}
                      height={30}
                      className="invert-0"
                    />
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
