// const todoTitle = "React App";
// const todoDesc = "Lorem ipsum is a dubbing text website.";

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearFull = date.getFullYear();

function Card(props){
    // object Destructuring
    const {titleText, descText} = props
    return <div className='card'>
    <h2 className='cardTitle'>{ titleText }</h2>
    <p className='cardDesc'>{ descText }</p>
    <h3 className='cardFooter'>{ dateName + "/" + monthName + "/" + yearFull }</h3>
</div>
}

export default Card;