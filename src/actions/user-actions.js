import axios from '../utils/axios';

import * as actions from '../action-types/user-action-types';

export const setUser = (users) => {
    return {
        type: actions.REGISTER,
        payload: users
    };
};





