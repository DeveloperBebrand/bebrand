import Image from "next/image";
import useImages from "../../hooks/useImages";
import LinkButton from "../buttons/LinkButton";
import { useModal } from "../context/ModalContext";
 
export default function GrowWithUs() {
  const { GrowWithUs } = useImages();
 const {openModal,isModalOpen,closeModal} = useModal();
  return (
    <>
      <section className="py-20" id="blossom-with-us">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-sm">Blossom with Us:</span>

              <h2 className="text-secondary text-4xl font-bold mt-5">
              From the artful design craft to the intricate world of digital innovation.
              </h2>

              <p className="text-primarylight text-base mt-10">
              The digital world is a domain in which ideas can be brought to life through algorithms and
               code, where the creation of virtual experiences peers the artistry of the physical.
              </p>

              <div className="flex flex-row items-center gap-5 mt-10">
                <LinkButton
                onClick={()=>openModal()}
                  buttontype="button"
                   type="dark"
                  text="Learn More"
                  url="javascript:void(0)"
                  icon={true}
                />
              </div>
            </div>

            <div>
              <Image
                src={GrowWithUs}
                alt="Grow with us"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
