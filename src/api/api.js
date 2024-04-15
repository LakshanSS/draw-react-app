import axios from 'axios';

const baseUrl = window.config.baseUrl;
const token = window.config.token;

const headers = {
    'Authorization': 'Bearer ' + token
};

export const getMacbookWinners = async () => {
    try {
        
        const response = await axios.get(`${baseUrl}/macbook-winners`, { headers });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching macbook winners', error);
        throw error;
    }
};

export const getCyberTruckWinner = async () => {
    try {
        const response = await axios.get(`${baseUrl}/cybertruck-winner`, { headers });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching macbook winners', error);
        throw error;
    }
};

