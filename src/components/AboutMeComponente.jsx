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
            <div id="sobremi" ref={reference} className="row mt-3">
                <p className="col-12 text-center display-1 fw-normal ">
                    Sobre Mi
                </p>
                <hr />
                <p className="col-11">
                    Estudiante de Ingeniería en Sistemas
                    <br></br>
                    Actualmente me encuentro cursando 4to año de la carrera de
                    Ingeniería en Sistemas de Información y formo parte del
                    programa asicrónico Oracle Next Education + Alura LATAM
                    donde estoy desarrollando mis habilidades para el desarrollo
                    Frontend.
                    <br></br>
                    Soy una persona responsable, respetuosa y curiosa en busca
                    de alguna oportunidad laboral para poner en práctica mis
                    habilidades y adquirir experiencia
                </p>
            </div>
            <div className="row mt-3 justify-content-between px-4">
                <div className="col-12 col-md-6">
                    <p className="text-center display-5 mb-4 fw-normal fst-italic">
                        <b>Información personal</b>
                    </p>
                    <p className="fs-4 text-start">
                        Im a <b>Frontend Web Developer</b> building the
                        Front-end of Websites and Web Applications that leads to
                        the success of the overall product. Check out some of my
                        work in the <b>Projects</b> section.
                    </p>
                    <p className="fs-4">
                        I also like sharing content related to the stuff that I
                        have learned over the years in Web Development so it can
                        help other people of the Dev Community. Feel free to
                        Connect or Follow me on my Linkedin where I post useful
                        content related to Web Development and Programming.
                    </p>
                    <p className="fs-4">
                        Im open to Job opportunities where I can contribute,
                        learn and grow. If you have a good opportunity that
                        matches my skills and experience then dont hesitate to
                        contact me.
                    </p>
                    {/* <a className="btn btn-sm btn-primary text-center" href="">
                        Contactame
                    </a> */}
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-center display-5 mb-4 fw-normal fst-italic">
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
