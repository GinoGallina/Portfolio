import { ProjectoItem } from './ProjectoItem'

export const Projectos = () => {
    const projectos = [
        {
            nombre: 'Veterinaria',
            link: 'https://veterinaria-pk.up.railway.app/login',
            github: 'https://github.com/GinoGallina/Veterinaria',
            img: '../../public/hero-devices.svg'
        },
        {
            nombre: 'Bad Dog',
            link: 'https://ginogallina.github.io/PaginaBadDog/',
            github: 'https://github.com/GinoGallina/PaginaBadDog',
            img: '../../public/bad-dog.png'
        }
    ]
    return (
        <div id="projectos" className="mt-5">
            <p className="display-1 fw-normal text-center">Projectos</p>
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
