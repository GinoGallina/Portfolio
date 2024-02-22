export const FooterComponent = () => {
    return (
        <footer className="w-100 d-flex flex-wrap justify-content-between align-items-center py-4  border-top bg-dark">
            <div className="col-md-4 d-flex align-items-center">
                <a
                    href="#"
                    className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                >
                    <span className="ms-3 text-white">Gino Gallina</span>
                </a>
                {/* <span className="mb-3 mb-md-0 text-white">
                    
                </span> */}
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a
                        className="text-muted"
                        href="https://github.com/GinoGallina"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github text-white fs-3"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a
                        className="text-muted"
                        href="https://www.instagram.com/ginogallina"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram text-white fs-3 me-3"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
