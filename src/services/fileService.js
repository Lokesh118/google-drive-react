import { fileAxios } from "./Helper";

const headers = {
    'Content-Type':'multipart/form-data'
}

export const Upload = (formData) => {
    return fileAxios.post("/api/upload", formData, headers).then((response) => response.data);
}

export const AllFiles = (params) => {
    return fileAxios.get("/api/allFiles", {params: params}).then((response) => response.data);
}

export const download = (params) => {
    return fileAxios.get("/api/download", {params: params}).then((response) => response.data);
}