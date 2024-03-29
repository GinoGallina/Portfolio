/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import '/public/assets/css/main.css'
import '/public/assets/css/util.css'

import { Tilt } from 'react-tilt'
import { base } from '../consts/consts'

export const ContactoComponent = ({ reference }) => {
    const defaultOptions = {
        max: 35, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000, // Speed of the enter/exit transition
        transition: true // Set a transition on enter/exit.
    }

    const [form, setForm] = useState({
        nombre: null,
        email: null,
        asunto: null,
        mensaje: null,
        nombreValido: true,
        emailValido: true,
        asuntoValido: true,
        mensajeValido: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validaciones
        const { nombre, email, asunto, mensaje } = form
        const nombreValido = nombre && nombre.trim() !== '' ? true : false
        const emailValido =
            email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : false
        const asuntoValido = asunto && asunto.trim() !== '' ? true : false
        const mensajeValido = mensaje && mensaje.trim() !== '' ? true : false
        // Actualizar estado con los resultados de las validaciones
        setForm({
            ...form,
            nombreValido,
            emailValido,
            asuntoValido,
            mensajeValido
        })
        if (nombreValido && emailValido && asuntoValido && mensajeValido) {
            console.log('valido')
        }
    }
    const hanldeChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const inputRefs = useRef([])
    useEffect(() => {
        const inputs = inputRefs.current
        // console.log(inputRefs)
        inputRefs.current.map((input) => {
            input.addEventListener('focus', () => {
                input.parentNode.classList.remove('alert-validate')
            })
        })

        return () => {
            inputs.map((input) => {
                input.removeEventListener('focus', () => {
                    input.parentNode.classList.remove('alert-validate')
                })
            })
        }
    }, [])

    return (
        <>
            <p
                ref={reference}
                id="contacto"
                className="display-1 fw-normal text-center my-4 text-dark"
            >
                Contácto
            </p>

            <div className="row w-100 m-0 bg-form-contact justify-content-center">
                <div className="col-lg-10">
                    <div
                        className="contact1 py-5"
                        style={{ background: 'none' }}
                    >
                        <div className="container-contact1 ">
                            <Tilt options={defaultOptions}>
                                <div className="contact1-pic">
                                    <img
                                        src={`${base}assets/images/img-01.png`}
                                        alt="IMG"
                                    />
                                </div>
                            </Tilt>

                            <form
                                className="contact1-form validate-form"
                                onSubmit={handleSubmit}
                                onChange={hanldeChange}
                                id="form"
                            >
                                <span className="contact1-form-title">
                                    Contáctame
                                </span>

                                <div
                                    className={`wrap-input1 validate-input ${form.nombreValido ? '' : 'alert-validate'}`}
                                    data-validate="El nombre es obligatorio"
                                >
                                    <input
                                        ref={(el) => inputRefs.current.push(el)}
                                        className="input1"
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                    />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div
                                    className={`wrap-input1 validate-input ${form.emailValido ? '' : 'alert-validate'}`}
                                    data-validate="El email es obligatorio: ex@abc.xyz"
                                >
                                    <input
                                        ref={(el) => inputRefs.current.push(el)}
                                        className="input1"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        ref={(el) => inputRefs.current.push(el)}
                                    />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div
                                    className={`wrap-input1 validate-input ${form.asuntoValido ? '' : 'alert-validate'}`}
                                    data-validate="El asunto es obligatorio"
                                >
                                    <input
                                        ref={(el) => inputRefs.current.push(el)}
                                        className="input1"
                                        type="text"
                                        name="asunto"
                                        placeholder="Asunto"
                                    />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div
                                    className={`wrap-input1 validate-input ${form.mensajeValido ? '' : 'alert-validate'}`}
                                    data-validate="El mensaje es obligatorio"
                                >
                                    <textarea
                                        ref={(el) => inputRefs.current.push(el)}
                                        className="input1"
                                        name="mensaje"
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
                </div>
            </div>
        </>
    )
}
