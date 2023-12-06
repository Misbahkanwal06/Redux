
import { createStore } from "redux";
import allReducers from "./reducer/combine_reducer";

 const store = createStore (
    allReducers
    )   // AllRedcers : Allredcer 

  export default store;
