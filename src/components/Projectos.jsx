import { ProjectoItem } from './ProjectoItem'
import { projectos } from '../consts/consts.js'
import { Carousel, CarouselItem } from 'react-bootstrap'
import { useState } from 'react'

export const Projectos = ({ reference }) => {
    const [index, setIndex] = useState(0)
    const handleSelect = (index, e) => {
        setIndex(index)
    }
    return (
        <div id="projectos" ref={reference} className="mt-5">
            <p className="display-1 text-dark fw-normal text-center my-4">
                Projectos
            </p>
            <div className="row my-5 ">
                <Carousel
                    interval={null}
                    activeIndex={index}
                    onSelect={handleSelect}
                >
                    {projectos.map((projecto, index) => {
                        return (
                            <CarouselItem key={index}>
                                <ProjectoItem
                                    projecto={projecto}
                                ></ProjectoItem>
                            </CarouselItem>
                        )
                    })}
                </Carousel>
            </div>
            {/* <div className="row  justify-content-center ">
                {projectos.map((projecto) => {
                    return (
                        <ProjectoItem
                            key={projecto.nombre}
                            projecto={projecto}
                        ></ProjectoItem>
                    )
                })}
            </div> */}
        </div>
    )
}
