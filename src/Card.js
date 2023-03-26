import './Card.css';

function Card({id, backImage, matching}) {
    return <td> <img className='Card' src={backImage} alt ="img"/> </td>
}

export default Card;