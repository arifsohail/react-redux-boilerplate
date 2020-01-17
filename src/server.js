const GET_URL = () => {
    const REACT_APP_ENV= 'dev';
    let url = '';

    console.log(`NODE_ENV [${REACT_APP_ENV}]`);

    switch (REACT_APP_ENV.trim()) {
        case 'production' :
            url = 'http://some-server:8080';
            break;
        case 'aws' :
            url = 'https://deployment-server.com';
            break;
        case 'qa' :
            url = 'http://some-qa-server:8080';
            break;
        case 'dev' :
            url = 'http://localhost:5000';
            break;
        default :
            break;
    }

    return url;
};

export const SERVER_URL = GET_URL();
