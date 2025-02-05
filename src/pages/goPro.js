import Header from "../components/Header/Header";
import logo from "../images/logo.png";

const GoPro = () =>{

    const attr = {
        headerTitle:"What is",
        goPro:"Go Pro",
        hasLogo: true,
        headerSmile:logo,
        hasTwoBtn: true,
        headerBtn:"buy 3 months",
        headerBtnTwo:"buy 2 years"
    }

    return(
        <>
            <Header attr={attr}/>
        </>
    )
}
export default GoPro;