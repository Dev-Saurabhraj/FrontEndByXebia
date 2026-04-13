import { useState } from "react";

function reducer(state.action){
    switch(action.type){
        case "TOGGLE_THEME":
            return {
                ...state,
                theme : state.theme=="light"? "dark":"light";
            }
        case "SET_USER":
            return{
                ...state,
                user.action.payload,
            }
        case "SET_LANG":
            return{
                ...state,
                lang.action.payload,
            }
        default:
            return {
                ...state,
            }
            // reducer decides how state changes where action tells what to do 
    }
}