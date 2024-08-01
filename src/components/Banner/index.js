import "components/Banner/Banner.css"
import colorfulCircle from "assets/colorful_circle.png"
import myPicture from "assets/my_picture.jpeg"

const Banner = () => {
  return(
    <div className="banner">
      <div>
        <h1 className="title">Olá, Mundo!</h1>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus nunc facilisis velit eleifend, a luctus ante laoreet. Maecenas consectetur congue mollis. :)
        </p>
      </div>

      <div className="images">
        <img className="colorfulCircle" src={colorfulCircle} alt="" aria-hidden={true}/>
        <img className="myPicture" src={myPicture} alt="Minha foto"/>
      </div>
    </div>
  )

}

export default Banner