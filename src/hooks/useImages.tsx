import Logo from "../assets/be-brand.png";
import AfterPay from "../assets/brandlogo/afterpay.png";
import BaseCamp from "../assets/brandlogo/basecamp.png";
import Maze from "../assets/brandlogo/maze.png";
import Pattern from "../assets/Pattern.png";
import GeomatricMain from "../assets/geomatric.jpg";
import Icons from "../assets/ICONS.png";

// grow with us //
import GrowWithUs from "../assets/growwithus.jpg";
// projects//
import ProjectOne from "../assets/1.png";
import ProjectTwo from "../assets/2.png";
import ProjectThree from "../assets/3.png";
import ProjectFour from "../assets/4.png";
import ProjectFive from "../assets/5.png";


//icons//
import Creative from "../assets/icons/creativity.png";
import Marketing from "../assets/icons/performance.png";
import Events from "../assets/icons/network.png";
import Seo from "../assets/icons/seo.png";
import Development from "../assets/icons/coding.png";
import Workshop from "../assets/icons/creative-team.png";
//icons /Methodologies
import Contemplating   from '../assets/icons/comprehend.png'
import Designing   from '../assets/icons/design-thinking.png'
import Manifesting   from '../assets/icons/call.png'
  



 



type Images = {
  Contemplating: any;
  Designing: any;
  Manifesting: any;
  Logo: any;
  AfterPay: any;
  BaseCamp: any;
  Maze: any;
  Pattern: any;
  GeomatricMain: any;
  Icons: any;
  Creative: any;
  Marketing: any;
 Events: any;
  Seo: any;
  Development: any;
  Workshop: any;
  GrowWithUs: any;
  ProjectOne: any;
  ProjectTwo: any;
  ProjectThree: any;
  ProjectFour: any;
  ProjectFive: any;
};

const useImages = (): Images => {
  return {
    Contemplating,
    Designing,
    Manifesting,
      Logo,
    AfterPay,
    BaseCamp,
    Maze,
    Pattern,
    GeomatricMain,
    Icons,
      Creative,
      Marketing,
      Events,
      Seo,
      Development,
      Workshop,
    GrowWithUs,
    ProjectOne,
    ProjectTwo,
    ProjectThree,
    ProjectFour,
    ProjectFive,
  };
};
export default useImages;
