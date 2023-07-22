import { IMAGE_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
    const resturantdata = resData.data;
    return (
        <div className="p-2 m-4 w-[250px] bg-white hover:scale-90">
        <img src={IMAGE_URL + resturantdata.cloudinaryImageId} alt="Avatar" className="rounded-lg"/>
        <div className="card-container">
          <h3><b className="font-sans">{resturantdata.name}</b></h3>
          <p className="break-all font-sans">{resturantdata.cuisines.join(",")}</p>
          <p className="font-sans font-light">{resturantdata.slaString} {resturantdata.avgRating + " stars"}</p>
        </div>
      </div>
    )
}
export default ResturantCard;