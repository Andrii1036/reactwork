import axiosService from "./axios.service";
import {breakpoints} from "../configs/urls";

export const carsService={
    create:(car)=>axiosService.post(breakpoints.cars,car)
        .then(value => value.data),
    getAll:()=>axiosService.get(breakpoints.cars)
        .then(value => value.data),
    getById:(id)=>axiosService.get(`${breakpoints.cars}/${id}`)
        .then(value => value.data),
    updateById:(id,car)=>axiosService.patch(`${breakpoints.cars}/${id}`,car)
        .then(value => value.data),
    deleteById:(id)=>axiosService.delete(`${breakpoints.cars}/${id}`)
};

