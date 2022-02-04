import axiosService from "./axios.service";
import {endpoint} from "../config/Urls";


export const albumsService = {
    getByUserId: (id) => axiosService.get(`${endpoint.users}/${id}${endpoint.albums}`).then(value => value.data),
    getPhotoByAlbymId: (id) => axiosService.get(`${endpoint.albums}/${id}${endpoint.photos}`).then(value => value.data)
};