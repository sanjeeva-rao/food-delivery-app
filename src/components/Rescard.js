import { cloudImgId } from "../utils/default";
import { Link } from "react-router-dom";

const ResCard = (props) => {
    var props = props.resInfo.info
    return(
        <Link to={"/restaurants/:"+props.id}>
            <div className="res-card">
                <img className="res-image" src ={cloudImgId + props.cloudinaryImageId}></img>
                <h3>{props.name}</h3>
                <p>{props.cuisines.join(",")}</p>
                <h4>{props.avgRatingString} rating</h4>
            </div>
        </Link>
    )
}

export default ResCard;