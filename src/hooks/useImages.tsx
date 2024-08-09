    import Logo from "../assets/be-brand.png";
    import AfterPay from "../assets/brandlogo/afterpay.png";
    import BaseCamp from "../assets/brandlogo/basecamp.png";
    import Maze from "../assets/brandlogo/maze.png";
    import Pattern from "../assets/Pattern.png";
    import GeomatricMain from "../assets/geomatric.jpg";
    import Icons from "../assets/ICONS.png";
    import beVip from "../assets/brandlogo/Be-VIP (1).png";
    import parkUp from "../assets/brandlogo/ParkUp.png";
    import beVipArena from "../assets/brandlogo/Be-VIP-Arena.png";
    

    //Blossom with Us//
 
    import happyClient from '../assets/happy-client.png'
    import teamMember from '../assets/team-member.png'
    import resentProject from '../assets/recent-projects.png'
    import fullImage from '../assets/fill.png'
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
    import Contemplating from "../assets/icons/comprehend.png";
    import Designing from "../assets/icons/design-thinking.png";
    import Manifesting from "../assets/icons/call.png";

    type Images = {
      fullImage: any;
      happyClient: any;
      teamMember: any;
      resentProject: any;
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
      beVip: any;
      parkUp: any;
      beVipArena: any;
      Creative: any;
      Marketing: any;
      Events: any;
      Seo: any;
      Development: any;
      Workshop: any;
      
      ProjectOne: any;
      ProjectTwo: any;
      ProjectThree: any;
      ProjectFour: any;
      ProjectFive: any;
    };

    const useImages = (): Images => {
      return {
        fullImage,
        happyClient,
        teamMember,
        resentProject,
        beVip,
        parkUp,
        beVipArena,
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
     
        ProjectOne,
        ProjectTwo,
        ProjectThree,
        ProjectFour,
        ProjectFive,
      };
    };
    export default useImages;
