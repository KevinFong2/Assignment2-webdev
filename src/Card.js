import './Card.css';

function Card({id, backImage, frontImage, matching, flipped, onClick}) {
    const handleClick = () => {
        if (!flipped) {
          onClick(id);
        }
    };
    return(
     <td> <img className='Card' src={flipped ? frontImage : backImage} onClick={handleClick} alt="img"/> </td>);
}

export default Card;