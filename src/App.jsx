import { useEffect, useRef } from 'react'
import './App.css'
import { AboutMeComponente } from './components/AboutMeComponente'
import { ImageDevices } from './components/Extra/ImageDevices'
import { IntroComponent } from './components/IntroComponent'

import { Navbar } from './components/Navbar'
import { Projectos } from './components/Projectos'
import { useState } from 'react'

function App() {
    const [hash, setHash] = useState('')
    const scroll = useRef()
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            const hashLocation = window.location.hash
            console.log(hashLocation)
            setHash(hashLocation)
        })

        window.addEventListener('scroll', () => {
            const hashLocation = window.location.hash
            console.log(hashLocation)
            setHash(hashLocation)
        })

        return () => {
            window.removeEventListener('hashchange')
        }
    }, [])
    return (
        <>
            <main className="" style={{ minHeight: '100vh' }}>
                <Navbar hash={hash}></Navbar>
                <IntroComponent></IntroComponent>
                <div className="container-fluid">
                    <AboutMeComponente></AboutMeComponente>
                    <ImageDevices></ImageDevices>
                    <Projectos></Projectos>
                </div>
            </main>
        </>
    )
}

export default App
