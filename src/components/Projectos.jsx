import { base } from '../consts/consts'
import { ProjectoItem } from './ProjectoItem'

export const Projectos = ({ reference }) => {
    const projectos = [
        {
            nombre: 'Veterinaria',
            link: 'https://veterinaria-pk.up.railway.app/login',
            github: 'https://github.com/GinoGallina/Veterinaria',
            img: `${base}assets/images/bad-dog.png`,
            descripcion: 'Es una Veterninaria'
        },
        {
            nombre: 'Bad Dog',
            link: 'https://ginogallina.github.io/PaginaBadDog/',
            github: 'https://github.com/GinoGallina/PaginaBadDog',
            img: `${base}assets/images/bad-dog.png`,
            descripcion: 'Es una landing page'
        }
    ]
    return (
        <div id="projectos" ref={reference} className="mt-5">
            <p className="display-1 fw-normal text-center my-4">Projectos</p>
            <div className="row  justify-content-center ">
                {projectos.map((projecto) => {
                    return (
                        <ProjectoItem
                            key={projecto.nombre}
                            projecto={projecto}
                        ></ProjectoItem>
                    )
                })}
            </div>
        </div>
    )
}
