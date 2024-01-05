
import axios from "axios";
// import { transformData } from "../helpers/transformData";

const vurl = import.meta.env.VITE_APP_URL;
const vsheetId = import.meta.env.VITE_APP_SHEET_ID;
const vkeyId = import.meta.env.VITE_APP_KEY_ID;
const vkeyVr = import.meta.env.VITE_APP_VALUE_RENDER;

// const sheetNm = "Posts";
let urls = [
    `${vurl}/${vsheetId}/values/Posts?${vkeyVr}${vkeyId}`,
    `${vurl}/${vsheetId}/values/Users?${vkeyVr}${vkeyId}`,
    `${vurl}/${vsheetId}/values/Categorys?${vkeyVr}${vkeyId}`,
];

const requests = urls.map((url) => axios.get(url));

export const getAll = (clbk) => {
    axios.all(requests).then((responses) => {
        const dt_global = responses.map((resp) => 
            resp.data.values
        );

        clbk(dt_global);
      });

}


// export const getPosts = (callback) => {
//     // Url service
//     const sheetNm = "Posts";
//     const get_url = `${vurl}/${vsheetId}/values/${sheetNm}?${vkeyVr}${vkeyId}`;
    
//     axios.get(get_url)
//         .then(function (response) {
//             const dt_global = response.data.values;
//             // const dt_field = response.data.values[0];

//             // Wrap Array
//             // const rady_data = transformData(dt_global);
//             callback(dt_global)
//         })
//         .catch(function (error) {
//             // handle error
//             // onError(error);
//             console.log(error);
//         })
//         // .finally(function () {
//         //     // always executed
//         //     console.log("ALL DONE LOADING DATA");
//         // });
// }

// export const getUsers = (callback) => {
//     // Url service
//     const sheetNm = "Users";
//     const get_url = `${vurl}/${vsheetId}/values/${sheetNm}?${vkeyVr}${vkeyId}`;
    
//     axios.get(get_url)
//         .then(function (response) {
//             const dt_global = response.data.values;
//             // const dt_field = response.data.values[0];

//             // Wrap Array
//             // const rady_data = transformData(dt_global);
//             // console.log(rady_data);
//             callback(dt_global)
//         })
//         .catch(function (error) {
//             // handle error
//             // onError(error);
//             console.log(error);
//         })
//         // .finally(function () {
//         //     // always executed
//         //     console.log("ALL DONE LOADING DATA");
//         // });
// }

// export const getNices = (callback) => {
//     // Url service
//     const sheetNm = "Categorys";
//     const get_url = `${vurl}/${vsheetId}/values/${sheetNm}?${vkeyVr}${vkeyId}`;
    
//     axios.get(get_url)
//         .then(function (response) {
//             const dt_global = response.data.values;
//             // const dt_field = response.data.values[0];

//             // Wrap Array
//             // const rady_data = transformData(dt_global);
//             // console.log(rady_data);
//             callback(dt_global)
//         })
//         .catch(function (error) {
//             // handle error
//             // onError(error);
//             console.log(error);
//         })
//         // .finally(function () {
//         //     // always executed
//         //     console.log("ALL DONE LOADING DATA");
//         // });
// }