
import Card from "./Card";
import Slider from "./Slider";
import './home.css'
function Home() {
    const myStyle = {
        backgroundImage:
            "url('https://wallpaperaccess.com/full/4293117.jpg')",
        height: '130vh',
        marginTop: '-60px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div className="gradient__bg">
            <div style={myStyle} >

            </div>

            <div className="container-fluid d-flex justify-content-evenly" >

                 <Card />
                              
            </div>

           

            <Slider />

        </div>



    )
};

export default Home;