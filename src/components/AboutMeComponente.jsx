import { base } from '../consts/consts'
import { SkillItem } from './SkillItem'

export const AboutMeComponente = ({ reference }) => {
    const skills = [
        { nombre: 'Html', imageUrl: `${base}assets/images/html.svg` },
        { nombre: 'Css', imageUrl: `${base}assets/images/css.svg` },
        { nombre: 'JavaScript', imageUrl: `${base}assets/images/js.svg` },
        { nombre: 'React', imageUrl: `${base}assets/images/react.svg` },
        { nombre: 'NodeJs', imageUrl: `${base}assets/images/nodejs-icon.svg` },
        { nombre: 'Git', imageUrl: `${base}assets/images/git.svg` },
        { nombre: 'MySql', imageUrl: `${base}assets/images/mysql.svg` }
        // Agrega más lenguajes según sea necesario
    ]
    return (
        <>
            <div
                id="sobremi"
                ref={reference}
                className="row mt-3 justify-content-center"
            >
                <p className="col-12 text-center display-1 fw-normal text-dark">
                    Sobre Mi
                </p>
                <hr />
                <p className="col-11 text-start text-dark">
                    Estudiante de Ingeniería en Sistemas
                    <br></br>
                    Actualmente me encuentro cursando 5to año de la carrera de
                    Ingeniería en Sistemas de Información y me esstoy formando
                    para poder utilizar técnologias y conociemientos a la hora
                    del desarrollo Full Stack, aunque mi rama preferida es el
                    Backend
                    <br></br>
                    Soy una persona responsable, respetuosa y curiosa en busca
                    de alguna oportunidad laboral para poner en práctica mis
                    habilidades y adquirir experiencia
                </p>
            </div>
            <div className="row mt-3 justify-content-between px-4">
                <div className="col-12 col-md-6">
                    <p className="text-center display-5 mb-4 fw-normal fst-italic text-dark">
                        <b>Información personal</b>
                    </p>
                    <p className="fs-4 text-start text-dark">
                        Tengo 21 años y soy de Rosario, Argentina. Estoy
                        estudiando para ser un desarrollador FullStack.Podes ver
                        mis proyectos creados en la de seccion de{' '}
                        <a
                            className="text-dark text-decoration-none fs-4"
                            href="#projectos"
                        >
                            <b>Proyectos</b>
                        </a>
                    </p>
                    {/* <p className="fs-4">
                        I also like sharing content related to the stuff that I
                        have learned over the years in Web Development so it can
                        help other people of the Dev Community. Feel free to
                        Connect or Follow me on my Linkedin where I post useful
                        content related to Web Development and Programming.
                    </p> */}
                    <p className="fs-4 text-dark">
                        Estoy abierto a oportunidades laborales donde pueda
                        contribuir, aprender y crecer. Si tienes una buena
                        oportunidad que coincida con mis habilidades y
                        experiencia, no dudes en contactarme.
                    </p>
                    {/* <a className="btn btn-sm btn-primary text-center" href="">
                        Contactame
                    </a> */}
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-center display-5 mb-4 fw-normal fst-italic text-dark">
                        <b>Skills y Tecnologías</b>
                    </p>
                    <div className="row row-cols-2 row-cols-lg-3 justify-content-center p-3">
                        {skills.map((skill) => {
                            return (
                                <SkillItem
                                    key={skill.nombre}
                                    skill={skill}
                                ></SkillItem>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
