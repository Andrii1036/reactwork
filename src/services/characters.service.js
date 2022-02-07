import axiosService from "./axios.service";
import {endpoint} from "../config/urls";

export const charactersService={
    getPageByNumber:(page)=>axiosService.get(`${endpoint.characters}/?page=${page}`).then(value => value.data),
    getById:(id)=>axiosService.get(`${endpoint.characters}/${id}`).then(value => value.data)
};

