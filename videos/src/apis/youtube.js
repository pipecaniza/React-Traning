import axios from 'axios';

const KEY = 'AIzaSyAGInS8NNFXp12eq5In-yCmNRtGOUbw3DU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})