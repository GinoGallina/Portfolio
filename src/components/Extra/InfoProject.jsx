export const InfoProject = ({ projecto, handleClick, showInfo }) => {
    return (
        <div
            className={`card-projecto-info position-absolute top-0 col-12 mb-4 row shadow border rounded p-3 `}
            style={{ height: '332px' }}
        >
            <p className="col-12 text-white text-center position-relative fs-3">
                {projecto.nombre}
                <button
                    className="btn position-absolute end-0"
                    onClick={handleClick}
                >
                    <i className="fas fa-times "></i>
                </button>
            </p>
            <p className="text-white text-center col-12">
                {projecto.descripcion}
            </p>
            <div className="col-12">
                <p className="text-white">Tecnologias usadas</p>
                <ul></ul>
            </div>
        </div>
    )
}
