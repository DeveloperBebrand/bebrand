import LinkButton from "../buttons/LinkButton";
import { useModal } from "../context/ModalContext";

 
export default function HireUs() {
  const {openModal,isModalOpen,closeModal} = useModal();
   return (
    <>
      
      <section className="py-20 bg-secondary" id="join-us">
        <div className="container bg-main bg-cover bg-no-repeat bg-center">
          <div className="flex justify-center">
            <div className="py-20 md:px-10 px-5 lg:w-4/6 w-full">
              <h2 className="md:text-5xl text-3xl text-white font-semibold text-center">
              A clarion call to those who would seize the chance to be part of something greater!
              </h2>

              <p className="text-lightgray text-center mt-8">
              Hark! Come forth, ye seekers of grand adventure and participants in the great march of 
              progress! Gather round, for a call of considerable import has been sounded a 
              summons to join a cause noble and true.
              </p>

              <div className="flex flex-row items-center justify-center mt-8">
                <LinkButton
                  buttontype="button"
                  type="dark"
                  text="Begin Your Path Now"
                   icon={true}
                   onClick={()=>openModal()}
                  url="javascript:void(0)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
