import Card from '../components/card/page'
import Navbar from '../components/Narbar/page'

function About() {
    return (
        <div className="bg-gradient-to-r from-slate-800 to-yellow-500  w-full h-screen mx-auto grid justify-center items-center">
            <Navbar />
            {
                proyectos &&
                proyectos.map((rs) =>
                    <Card key={rs.id} tarjeta={rs} />
                )
            }
        </div>
    )
}

export default About

export const proyectos = [
    {
        id:1,
        title: 'calculadora',
        decrip:'esto es una calculadora',   
    },
    {
        id:2,
        title: 'calendario',
        decrip:'esto es una calendario',   
    },
    {
        id:3,
        title: 'agenda',
        decrip:'esto es una agenda',   
    }

]
