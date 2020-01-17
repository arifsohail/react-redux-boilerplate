import io from 'socket.io-client';
import * as events from './socket-events';
import {store} from '../index';
import {SERVER_URL} from "../server";


const setup = () => {
    const socket = io(SERVER_URL, {
        transports: ['websocket']
    });

    socket.on(events.NEW_CONNECTION, () => {
        console.log('##Socket## Established with server');
    });

    socket.on(events.DISCONNECTION, () => {
        console.log('##Socket## disconnected from server');
    });

    socket.on(events.NEW_MESSAGE, (message) => {
        console.log('##Socket## New Message', message);
    });

    return socket;
};

export default setup;
