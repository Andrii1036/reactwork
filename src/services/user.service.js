import {url} from "../configs/configs";

const getAll=()=>{

    return(
        fetch(url.users)
            .then(value => value.json())
    );
};

export default getAll