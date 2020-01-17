import axios from 'axios';
import {store} from '../index';
import {SERVER_URL} from "../server";

const getLanguage = () => store.getState().lp_reducer.activeLang || 'SV';

const getJwt = () => {
    const {activeUser} = store.getState().user_reducer;

    if (activeUser) {

        return activeUser.jwt;
    }
    return '';
};

const getOptions = () => {

    return {
        headers: {
            'X-Auth': getJwt(),
            'X-HallAuth': store.getState().server_reducer.hallAccessToken,
            'Accept-Language': getLanguage().toLowerCase()
        }
    };
};

const prepareUrl = (api) => `${SERVER_URL}${api}`;

const wrapper = {
    get: (api) => axios.get(prepareUrl(api), getOptions()),
    post: (api, formData = {}) => axios.post(prepareUrl(api), formData, getOptions()),
    put: (api, formData = {}) => axios.put(prepareUrl(api), formData, getOptions()),
    delete: (api) => axios.delete(prepareUrl(api), getOptions()),
};

export default wrapper;
