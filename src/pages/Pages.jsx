import axios from 'axios';
import { google } from 'googleapis';

// export async function getServerSideProps({ query }) {

    // const vurl = import.meta.env.VITE_APP_URL
    // const vsheetId = import.meta.env.VITE_APP_SHEET_ID
    // const vkeyId = import.meta.env.VITE_APP_KEY_ID
    // const sheetNm = 'users'

    // const get_url = `${vurl}/${vsheetId}/values/${sheetNm}?valueRenderOption=FORMATTED_VALUE&key=${vkeyId}`

    // axios.get(get_url)
    // .then(function (response) {
    //     // handle success
    //     // formatResponse(response.data);
    //     Post(response.data);
    // })
    // .catch(function (error) {
    //     // handle error
    //     onError(error);
    // })
    // .finally(function () {
    //     // always executed
    //     console.log('ALL DONE LOADING DATA');
    // });


// }


export default function Post(data) {
    const vurl = import.meta.env.VITE_APP_URL
    const vsheetId = import.meta.env.VITE_APP_SHEET_ID
    const vkeyId = import.meta.env.VITE_APP_KEY_ID
    const sheetNm = 'users'

    const get_url = `${vurl}/${vsheetId}/values/${sheetNm}?valueRenderOption=FORMATTED_VALUE&key=${vkeyId}`

    axios.get(get_url)
    .then(function (response) {
        // handle success
        // formatResponse(response.data);

        console.log(response.data);
        // Post(response.data);
    })
    .catch(function (error) {
        // handle error
        onError(error);
    })
    .finally(function () {
        // always executed
        console.log('ALL DONE LOADING DATA');
    });
}