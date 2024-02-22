import { base } from '../consts/consts'

export const IntroComponent = ({ reference }) => {
    return (
        <div
            id="intro"
            ref={reference}
            className="row justify-content-center p-4 intro w-100 m-0"
        >
            <h1
                className="col-12 col-lg-7 mb-4 text-center"
                style={{ fontSize: '65px' }}
            >
                <b>Hola, soy Gino Gallina!</b>
            </h1>
            <h3 className="mb-4 col-12 col-lg-6 text-center ">
                Soy un estudiantes en el último año de la carrera de Ingeniería
                en Sistemas, con ganas de convertirme en un desarrollador Full
                Stack
            </h3>
            <div className="row justify-content-center">
                <img
                    className="col-12 col-md-6 col-lg-5 rounded-circle"
                    src={`${base}assets/images/Captura de pantalla 2022-11-05 190121.png`}
                    alt="fotoGinoGallina"
                ></img>
            </div>
        </div>
    )
}
