export const Navbar = ({ hash, opacity }) => {
    return (
        <>
            <nav
                className={`navbar sticky-top navbar-expand-lg p-2 navbar-dark bg-dark fs-5 ${opacity ? 'opacity' : ''}`}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Gino Gallina
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 justify-content-around">
                            <li className="nav-item">
                                <a
                                    className={
                                        hash == ''
                                            ? 'active nav-link'
                                            : 'nav-link'
                                    }
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={
                                        hash == '#sobremi'
                                            ? 'active nav-link'
                                            : 'nav-link'
                                    }
                                    href="#sobremi"
                                >
                                    Sobre Mi
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={
                                        hash == '#projectos'
                                            ? 'active nav-link'
                                            : 'nav-link'
                                    }
                                    href="#projectos"
                                >
                                    Projectos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={
                                        hash == '#contacto'
                                            ? 'active nav-link'
                                            : 'nav-link'
                                    }
                                    href="#contacto"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
