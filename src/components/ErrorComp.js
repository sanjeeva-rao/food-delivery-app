import { useRouteError } from "react-router-dom";
const ErrorComp = ()=> {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <p>OOPS!</p>
            <p>Page not found</p>
            <p>{error.data}</p>
        </div>
    )
}

export default ErrorComp;