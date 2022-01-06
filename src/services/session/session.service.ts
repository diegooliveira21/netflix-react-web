import {PostSessionNew, PostSessionNewPayload} from "../user/user.types";
import axiosInstance from "../../modules/axios/axios.module";

export default function sessionService() {

    const postSessionNew = (user: PostSessionNewPayload): Promise<PostSessionNew> => axiosInstance.post('session/new', user)

    return { postSessionNew }
}
