import { shoe8 } from "../assets/images";
import Button from "../components/Button";


const SuperQuality = () => {
  return (
    <section id="about-us " className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      
        <h2 className="font-palanquin  capitalize text-4xl  lg:max-w-lg font-bold">
        We Provide You
        <span className="text-coral-red"> Super</span>
        <span className="text-coral-red"> Quality </span>
           
           Shoes
          </h2>
        <p className="mt-4 lg:max-w-lg info-text"> Elevate your experience with sneakers that exude street-style flair, promising not only exceptional quality but also a touch of elegance that speaks directly to the heart of every sneakerhead and street style enthusiast. </p> 
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <Button label ='View Details' />
        </div>
        
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
          >
          </img>
      </div>
    </section>
  )
}

export default SuperQuality