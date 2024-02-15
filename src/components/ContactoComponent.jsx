export const ContactoComponent = () => {
    return (
        <div className="contact1">
            <div className="container-contact1">
                <div className="contact1-pic js-tilt" data-tilt>
                    <img
                        src="../../FormContactUtils/images/img-01.png"
                        alt="IMG"
                    />
                </div>

                <form className="contact1-form validate-form">
                    <span className="contact1-form-title">Contáctame</span>

                    <div
                        className="wrap-input1 validate-input"
                        data-validate="El nombre es obligatorio"
                    >
                        <input
                            className="input1"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                        />
                        <span className="shadow-input1"></span>
                    </div>

                    <div
                        className="wrap-input1 validate-input"
                        data-validate="El email es obligatorio: ex@abc.xyz"
                    >
                        <input
                            className="input1"
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                        <span className="shadow-input1"></span>
                    </div>

                    <div
                        className="wrap-input1 validate-input"
                        data-validate="El asunto es obligatorio"
                    >
                        <input
                            className="input1"
                            type="text"
                            name="subject"
                            placeholder="Asunto"
                        />
                        <span className="shadow-input1"></span>
                    </div>

                    <div
                        className="wrap-input1 validate-input"
                        data-validate="El mensaje es obligatorio"
                    >
                        <textarea
                            className="input1"
                            name="message"
                            placeholder="Mensaje"
                        ></textarea>
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="container-contact1-form-btn">
                        <button className="contact1-form-btn">
                            <span>
                                Enviar Email
                                <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
