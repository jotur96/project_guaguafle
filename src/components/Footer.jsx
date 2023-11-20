
import personaj1 from '../assets/images/personaje1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="flex bg-guaflePink w-full">
            <div className="flex flex-col w-full md:flex-row">
                <div className="md:pt-20 md:pl-20 pt-10">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <h2 className="text-4xl">Contacto</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h4 className="text-2xl">Telefono</h4>
                            <p>123456789</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 px-2">
                            <h4 className="text-2xl">Direccion</h4>
                            <a href="https://maps.app.goo.gl/yWUjEyucCQJEBXiP6" className="whitespace-nowrap hover:text-guafleSecondary">Teniente Vera 2737 Esq, Asunción 001409</a>
                        </div>
                    </div>
                    <div className='flex mx-auto justify-evenly pt-10 pb-5 md:pt-5'>
                        <FaFacebook className="text-4xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue-600" />
                        <FaInstagram className="text-4xl hover:text-white from-orange-400 via-red-500 to-purple-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-br rounded-bordeado-ig" />
                        <FaWhatsapp className="text-4xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-green-500" />
                        <FaTiktok className="text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-black" />
                        <FaTwitter className="text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue-500" />

                    </div>
                </div>
                <div className="flex justify-center py-10 mx-auto w-full md:w-2/4"> 
                    <iframe className="rounded-3xl w-96 h-80 md:w-full md:h-80" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3695943561415!2d-57.561572523645566!3d-25.291783677650233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9862b5dfa21%3A0x4fc9830f71ff6260!2sGuaguafle!5e0!3m2!1ses-419!2spy!4v1700443064039!5m2!1ses-419!2spy"></iframe>
                </div>

            </div>


        </footer>
    )
}