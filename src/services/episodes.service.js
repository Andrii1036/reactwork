import axiosService from "./axios.service";
import {endpoint} from "../config/urls";

export const episodesService = {
    getEpisodesByPageNumber: (page) => axiosService.get(`${endpoint.episodes}?page=${page}`).then(value => value.data)
};