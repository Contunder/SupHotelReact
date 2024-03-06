import axios from "axios";
import PostType from "../Type/post.type";
import {headersConfig} from "./auth.service";

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