import { cloudImgId } from "../utils/default";

const ResCard = (props) => {
    var props = props.resInfo.info
    return(
        <div className="res-card">
            <img className="res-image" src ={cloudImgId + props.cloudinaryImageId}></img>
            <h3>{props.name}</h3>
            <p>{props.cuisines.join(",")}</p>
            <h4>{props.avgRatingString} rating</h4>
        </div>
    )
}

export default ResCard;