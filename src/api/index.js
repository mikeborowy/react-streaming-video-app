import axios from 'axios';
import flv from 'flv.js';

export const streamsAPI = axios.create({
    baseURL: 'http://localhost:3001'
});

export const flvAPI = (id) => flv.createPlayer({
    type: 'flv',
    url: `http://localhost:8000/live/${id}.flv`
});