import { restaurentList } from "../utils/default";
import ResCard from "./Rescard";
const Body = () => (
    <div className="body">
        {
                restaurentList.map((res)=>{
                    return(
                        <ResCard resInfo = {res} key = {res.info.id}></ResCard>
                    )
                })
        }
    </div>
)


export default Body