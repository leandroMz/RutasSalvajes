import './CardCategory.css'

export const CardCategory = ({ imageName, categoryName }) => {
    const imagePath = `/images/${imageName}.jpg`;
  
    return (
      <div className="cardContainer">
        <img className="imageCategory" src={imagePath} alt={categoryName} />
        <h4 className="textCategory">{categoryName}</h4>
        <button type="button" className="btn btn-outline-warning">Explorar</button>

      </div>
    );
  };