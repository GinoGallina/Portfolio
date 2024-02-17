export const IntroComponent = ({ reference }) => {
    return (
        <div
            id="intro"
            ref={reference}
            className="row justify-content-center p-5 intro"
        >
            <h1
                className="col-12 col-lg-7 mb-4 text-center"
                style={{ fontSize: '80px' }}
            >
                <b>Hola, soy Gino Gallina!</b>
            </h1>
            <h3 className="mb-4 col-12 col-lg-6 text-center ">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
            </h3>
            <div className="row justify-content-center">
                <img
                    className="col-12 col-md-6 col-lg-5 rounded-circle"
                    src="/assets/images/Captura de pantalla 2022-11-05 190121.png"
                    alt="fotoGinoGallina"
                ></img>
            </div>
        </div>
    )
}
