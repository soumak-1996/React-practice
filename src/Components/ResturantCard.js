import { IMAGE_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
    const resturantdata = resData.data;
    return (
        <div className="res-card">
        <img src={IMAGE_URL + resturantdata.cloudinaryImageId} alt="Avatar" className="card-img"/>
        <div className="card-container">
          <h4><b>{resturantdata.name}</b></h4>
          <p className="wrap">{resturantdata.cuisines.join(",")}</p>
          <p>{resturantdata.rating}</p>
          <p>{resturantdata.slaString}</p>
          <p>{resturantdata.avgRating + " stars"}</p>
        </div>
      </div>
    )
}
export default ResturantCard;