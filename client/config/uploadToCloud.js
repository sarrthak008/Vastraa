import axios from "axios";
import ImageKit from "imagekit-javascript"
import { brandName, support } from "./BRAND";
const PUBLIC_KEY = import.meta.env.VITE_IMGKIT_PUBLIC_KEY
const FASHION_AI_API = import.meta.env.VITE_FASHION_X_AI;
const URL_ENDPOINT = import.meta.env.VITE_IMGKIT_URL_ENDPOINT


const uploadtoCloud = async (file) => {
    try {

        const imagekit = new ImageKit({
            publicKey: PUBLIC_KEY,
            urlEndpoint: URL_ENDPOINT,
        });

        const res = await axios.get(`${FASHION_AI_API}/api/imgkit`)
        const authParams = res.data.data
        const upload = await imagekit.upload({
            file,
            fileName: `${brandName}x${support}x${file.name}`,
            ...authParams,
        });
        return upload.url

    } catch (error) {
       return error.message || "something went wrong"
    }
}


export default uploadtoCloud;