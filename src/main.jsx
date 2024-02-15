import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Para el FORM Component
import 'hamburgers/dist/hamburgers.min.css'
// import 'select2/dist/css/select2.min.css'

// import tilt from 'tilt.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
    </>
)
