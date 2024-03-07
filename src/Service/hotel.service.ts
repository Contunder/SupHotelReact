import axios from "axios";
import PostType from "../Type/post.type";

const API_URL = "http://localhost:8080/api/hotel";

export const getAllHotel = async (): Promise<PostType> => {
    try {
        const response = await axios.get(API_URL + "/get", {headers: {
            'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getHotelWithFilter = async (city: {},dateIn: {}, dateOut: {}, people: {}): Promise<PostType> => {
    try {
        const response = await axios.post(API_URL + "/read/filter", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            city,
            dateIn,
            dateOut,
            people,
        });
        localStorage.setItem("posts", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const readHotelWithFilter = () => {
    const posts = localStorage.getItem("posts");
    if (posts) return JSON.parse(posts);
    return null;
};