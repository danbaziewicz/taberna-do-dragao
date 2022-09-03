import axios from "axios";

const instance = axios.create({
    baseURL: "https://taberna-dragao.herokuapp.com",
});

export const getMenu = async () => {
    const response = await instance.get('/menu');
    const json = await response.data.dados;
    return json;
};

export const postProduto = async (body) => {
    const response = await instance.post("/menu", body);
    const json = await response.data.msg;
    return json;
};

export const deleteProduto = async (id) => {
    const response = await instance.delete(`/menu/produto/${id}`);
};

export const editaProduto = async (id, body) => {
    const response = await instance.put(`/menu/produto/${id}`, body);
};