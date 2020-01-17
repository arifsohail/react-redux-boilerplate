import * as actions from '../action-types/user-action-types';

const getActiveUser = () => {
    let userStr = sessionStorage.getItem('activeUser');
    if (userStr) return JSON.parse(userStr);
    return null;
};


const initState = () => {
    return {
        processing: false,
        message: null,
        error: null,
        formData: null,
        users: [],
        activeUser: getActiveUser(),

    };
};

const user_reducer = (state = initState(), action) => {
    let newState = {...state};

    switch (action.type) {

        case actions.PROCESSING:
            setProcessing(newState, action.payload);
            break;

        case actions.REGISTER:
            userData(newState, action.payload);
            break;

        default :
            break;
    }

    return newState;
};


const userData = (state, userData) => {
    state.users = userData;
};

const setProcessing = (state, processing) => {
    state.processing = processing;
};

export default user_reducer;

