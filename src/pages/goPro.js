import Header from "../components/Header/Header";

const GoPro = () =>{

    const attr = {
        headerTitle:"Get schooled",
        headerDesc:["smile","grin","laugh"],
        headerBtn:"buy 3 months"
    }

    return(
        <>
            <Header attr={attr}/>
        </>
    )
}
export default GoPro;