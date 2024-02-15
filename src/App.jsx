import { useEffect, useRef } from 'react'
import './App.css'
import { AboutMeComponente } from './components/AboutMeComponente'
import { ImageDevices } from './components/Extra/ImageDevices'
import { IntroComponent } from './components/IntroComponent'

import { Navbar } from './components/Navbar'
import { Projectos } from './components/Projectos'
import { useState } from 'react'
import { ContactoComponent } from './components/ContactoComponent'
import { FooterComponent } from './components/FooterComponent'

function App() {
    const [hash, setHash] = useState('')
    const [opacity, setOpacity] = useState(false)

    // Refs Secciones
    const inicioRef = useRef(null)
    const sobreMiRef = useRef(null)
    const projectosRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const inicioDivTop = inicioRef.current.offsetTop
            const sobreMiDivTop = sobreMiRef.current.offsetTop
            const projectosDivTop = projectosRef.current.offsetTop

            const scrollActual = window.scrollY + 68

            // console.log(scrollActual)

            //Links Navbar
            if (
                scrollActual < sobreMiDivTop &&
                scrollActual < projectosDivTop
            ) {
                setHash('')
            } else if (
                scrollActual > inicioDivTop &&
                scrollActual < projectosDivTop
            ) {
                setHash('#sobremi')
            } else {
                setHash('#projectos')
            }

            //Opacity navbar
            if (scrollActual < 160) {
                setOpacity(false)
            } else {
                setOpacity(true)
            }
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <>
            <main className="" style={{ minHeight: '100vh' }}>
                <Navbar hash={hash} opacity={opacity}></Navbar>
                <IntroComponent reference={inicioRef}></IntroComponent>
                <div className="container-fluid">
                    <AboutMeComponente
                        reference={sobreMiRef}
                    ></AboutMeComponente>
                    <ImageDevices></ImageDevices>
                    <Projectos reference={projectosRef}></Projectos>
                </div>
                <ContactoComponent></ContactoComponent>
                <FooterComponent></FooterComponent>
            </main>
        </>
    )
}

export default App
