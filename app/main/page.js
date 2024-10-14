import Navbar from '../components/Narbar/page'
export default function Main() {
    return (
        <div className="bg-gradient-to-r from-slate-800 to-yellow-500  w-full h-screen mx-auto grid justify-center items-center">
            <Navbar/>
            <div className="text-4xl gap-10 grid w-96">
                <h2>Hi, I am</h2>
                <h1 className="flex justify-center font-bold font-sans text-5xl">DEVELOPER</h1>
                <div className="text-lg flex gap-5">
                    <h2>WEB DEVELOPER</h2>
                    <span> UI & UX DESIGNER</span>
                </div>
            </div>

        </div>
    )
}
