import { Link } from "react-router-dom";
export const Item = ({ id, image, title, description }) => {
  return (
    <div key={id} className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="item-image">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={`/detail/${id}`}>
              <button className="btn btn-warning" type="submit">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};