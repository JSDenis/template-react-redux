import {GET_DATA} from "../consts/constants";
import {SET_PERSON_INFO} from "../consts/constants";

export const acGetData = (track) => {
    return{
        type: GET_DATA,
        track
    }
}; 

/* export const acSetPersonInfo = (info) =>{
    return{
        type: SET_PERSON_INFO,
        personInfo: info
    }
}; */


export const acSetPersonInfo = (data) => {
    return{
        type: SET_PERSON_INFO,
        personInfo: data
    }
};