

import Navbar from '../components/Narbar/page'

function Project() {
    // const [nombre, setNombre] = useState()
    return (
        <div className="bg-gradient-to-r from-slate-800 to-yellow-500  w-full h-screen mx-auto grid justify-center items-center">
            <Navbar />
            <div className='flex justify-center gap-8'>
            <button>calculadora</button>
            <button>agenda</button>
            <button>calendario</button>
            </div>
        </div>
    )
}

export default Project
