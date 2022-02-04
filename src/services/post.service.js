import axiosService from "./axios.service";
import {endpoint} from "../config/Urls";

export const postService={
    getAll:()=>axiosService.get(endpoint.posts).then(value => value.data),
    getById:(id)=>axiosService.get(`${endpoint.posts}/${id}`).then(value => value.data),
    getByUser:(id)=>axiosService.get(`${endpoint.users}/${id}${endpoint.posts}`).then(value => value.data)
};