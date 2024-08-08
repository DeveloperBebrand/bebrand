import Image from "next/image";
import useImages from "../../hooks/useImages";
 
export default function HowWeWork() {
      const { Contemplating, Designing, Manifesting } = useImages();
  const HowThisWorks = [
    {
      title: "Contemplating ",
      description:
        "The contours of our vision begin to take shape, guided by the gentle pull of our creative instincts.",
      icon: Contemplating,
      
    },
    {
      title: "Designing",
      description:
        "Sketching out each detail with the exactitude of a master craftsman.   ",
      icon: Designing,
    },
    {
      title: "Manifesting ",
      description:
        "Crafted plans spring into existence, as if by magic, forming from the dimension of ideas.",
          icon: Manifesting,
    },
  ];
  return (
    <>
       <section className="py-20" id="methodologies">
 
        <div className="container">
          <span className="text-primary text-sm">The Methodologies</span>
          <h2 className="text-secondary lg:text-4xl text-2xl font-bold mt-5">
          Why create something you would not yearn to engage with yourself?
          </h2>
          
          <p className="text-primarylight text-base mt-5">
          We breathe life into brands,
          granting them a soul felt in every communication, product, and experience. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {HowThisWorks?.map((item, index) => (
              <div className="flex flex-col items-start" key={index}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <h4 className="text-secondary text-xl font-bold mt-5">
                  {item.title}
                </h4>
                <p className="text-primarylight text-base  mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
