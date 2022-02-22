import './card.css'

function Card(props){
    return(
        <div className={`card card-${props.type}`}>{props.children}</div>
    )
}

export {Card}