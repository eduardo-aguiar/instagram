import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f917000010000016a8e3a1cd6d04cccbffd37073a1731df'
    }
});