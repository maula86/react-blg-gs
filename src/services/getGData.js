
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