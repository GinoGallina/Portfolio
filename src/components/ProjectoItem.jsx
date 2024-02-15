/* eslint-disable react/prop-types */
export const ProjectoItem = ({ projecto }) => {
    return (
        <div className="card-projecto col-12 mb-4 row shadow border rounded p-3 w-75">
            <div
                className="col-12 col-md-6"
                style={{ height: '300px', objectFit: 'fill' }}
            >
                <img
                    className="w-100 h-100"
                    src={projecto.img}
                    alt={projecto.nombre}
                    style={{ objectFit: 'scale-down' }}
                />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column">
                <h3 className="text-center mt-2 mt-md-0 fs-1">
                    {projecto.nombre}
                </h3>
                <div className="row row-cols-1 justify-content-center my-auto">
                    <a
                        href={projecto.github}
                        target="_blank"
                        className="btn btn-dark col mb-3 "
                        rel="noreferrer"
                    >
                        <i className="fab fa-github me-3"></i>GitHub
                    </a>
                    <a
                        href={projecto.link}
                        target="_blank"
                        className="btn btn-success col mb-3  "
                        rel="noreferrer"
                    >
                        Web
                    </a>
                    <a className="btn btn-primary col  ">Info</a>
                </div>
            </div>
        </div>
    )
}
