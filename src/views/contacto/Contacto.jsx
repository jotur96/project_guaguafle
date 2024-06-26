import { useState } from 'react';
import { Layout } from '../../components/Layout';

export const Contacto = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setNameError('');
        setMessageError('');

        if (!name) {
            setNameError('Por favor, completa tu nombre');
            return;
        }

        if (!message) {
            setMessageError('Por favor, escribe tu mensaje');
            return;
        }
        
        const whatsappLink = `https://api.whatsapp.com/send?phone=595971217495&text=${encodeURIComponent(`Hola, mi nombre es ${name} y mi consulta es: ${message}`)}`;

        window.open(whatsappLink, '_blank');
    };

    const handleSendEmail = (event) => {

        event.preventDefault();
        setNameError('');
        setMessageError('');

        if (!name) {
            setNameError('Por favor, completa tu nombre');
            return;
        }

        if (!message) {
            setMessageError('Por favor, escribe tu mensaje');
            return;
        }

        const email = 'correo@dominio.com'; 
        const subject = 'Consulta de usuario'; 

        const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hola, mi nombre es ${name} y mi consulta es: ${message}`)}`;

        window.location.href = emailLink;
    };

    return (
        <Layout>
            <div className="flex justify-center w-full bg-white">
                <section className="p-11 dark:text-gray-100 ">
                    <form onSubmit={handleSubmit} className="container w-full p-8 space-y-6 rounded-md shadow dark:bg-gray-900 bg-guafleSecondary">
                        <h2 className="block w-full text-3xl font-bold regals">Contactanos</h2>
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1 font-bold">
                                Nombre
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Escribe tu nombre"
                                className="w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                                autoComplete="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && <p className="text-red-500">{nameError}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 ml-1 font-bold">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                type="text"
                                placeholder="Escribe el mensaje..."
                                className=" w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
                                autoComplete="off"
                                value={message}
                                rows={4} // Define el número predeterminado de filas
                                cols={80}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            {messageError && <p className="text-red-500">{messageError}</p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="text-white w-full px-4 py-2 font-bold rounded shadow bg-guaflePrimary focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri hover:bg-grisSuave dark:text-gray-900"

                            >
                                Enviar Mensaje
                            </button>
                            <button
                                type="button"
                                className="text-white w-full px-4 py-2 mt-4 font-bold rounded shadow bg-guaflePrimary focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri hover:bg-grisSuave dark:text-gray-900"
                                onClick={handleSendEmail}
                            >
                                Enviar Correo
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </Layout>
    );
};
