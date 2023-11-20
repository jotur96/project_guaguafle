
import personaj1 from '../assets/images/personaje1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="flex col justify-between bg-guaflePrimary w-full">
            <div className="flex col justify-evenly w-full p-20">
                <ul className="flex flex-col gap-6 items-center">
                    
                    <li className="flex items-center">
                    <h2 className="text-4xl">Contacto</h2>
                    </li>
                    <li className="flex flex-col justify-center items-center gap-2">
                        <h4 className="text-2xl">Telefono</h4>
                        <p>123456789</p>
                    </li>
                    {/* <img className="w-40 h-40 object-cover rounded-lg " src={personaj1} alt="" /> */}
                    <li className="flex flex-col justify-center items-center gap-2">
                        <h4 className="text-2xl">Direccion</h4>
                        {/* <img className="w-16 h-16 object-cover rounded-lg " src={personaj1} alt="" /> */}
                        <a href="https://maps.app.goo.gl/yWUjEyucCQJEBXiP6">Teniente Vera 2737 Esq, Asunción 001409</a>
                    </li>
                    <li className='flex gap-6 mt-10'>
                        <FaFacebook className="text-4xl"/>
                        <FaInstagram className="text-4xl"/>
                        <FaWhatsapp className="text-4xl"/>
                        <FaTiktok className="text-4xl"/>
                        <FaTwitter className="text-4xl"/>

                    </li>
                </ul>
                <ul className="flex flex-col gap-6">
                    <li ><iframe className="rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3695943561415!2d-57.561572523645566!3d-25.291783677650233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9862b5dfa21%3A0x4fc9830f71ff6260!2sGuaguafle!5e0!3m2!1ses-419!2spy!4v1700443064039!5m2!1ses-419!2spy" width="500" height="350" loading="lazy" ></iframe></li>
                </ul>

            </div>
            

        </footer>
    )
}