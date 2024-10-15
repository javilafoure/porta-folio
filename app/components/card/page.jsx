export default function Card({ tarjeta: { title, decrip} }) {

    return (

        <div className="flex flex-col">
            <h2>{title}</h2>
            <p>{decrip}</p>
        </div>
        
    )
}


