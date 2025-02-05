import Header from "../components/Header/Header";
import SliderAvatar from "../components/SliderAvatar/SliderAvatar";
const Home = () =>{

    const attr = {
        headerTitle:"Get schooled",
        headerDesc:["smile","grin","laugh"],
        headerBtn:"register for free"
    }

    return(
        <>
            <Header attr={attr}/>
            <SliderAvatar/>
        </>
    )
}

export default Home;