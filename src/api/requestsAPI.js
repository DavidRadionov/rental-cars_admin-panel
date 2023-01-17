export const GLOBAL_URL = "http://localhost:8080/api";
// export const GLOBAL_URL = "http://127.0.0.1:3001";

export const login = async (password) => {

    return await fetch(GLOBAL_URL + "/auth/login",{

        method: "POST",
        headers: {
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type":  "multipart/form-data",
        },
        body: password
    }).then(result => result.json()).catch((error) => console.log(error));
}

export const verificationAdvertisement = async (id) => {
    console.log(id);
    return await fetch(GLOBAL_URL + "/auth/advertisement/" + id, {
        method: "POST",
    }).then(result => result.json()).catch((error) => console.log(error));
}

export const getAdvertisement = async () => {
    return await fetch(GLOBAL_URL + "/advertisement/get/full/all").then(res => res.json())
        .catch((error) => alert(error));
}

export const deleteCarComment = async (id) => {
    return await fetch(GLOBAL_URL + "/review/car/delete/" + id,{
        method: "DELETE",
    }).then(result => result.json()).catch((error) => console.log(error));
}

export const deleteUserComment = async (id) => {
    return await fetch(GLOBAL_URL + "/review/user/delete/" + id,{
        method: "DELETE",
    }).then(result => result.json()).catch((error) => console.log(error));
}

export const getReviewCars = async () => {
    return await fetch(GLOBAL_URL + "/review/car/get/all").then(res => res.json())
        .catch((error) => alert(error));
}

export const getSupportList = async () => {
    return await fetch(GLOBAL_URL + "/supportrequest/get/all").then(res => res.json())
        .catch((error) => alert(error));
}

export const getReviewUsers = async () => {
    return await fetch(GLOBAL_URL + "/review/user/get/all").then(res => res.json())
        .catch((error) => alert(error));
}


export const getUsers = async () => {
    return await fetch(GLOBAL_URL + "/auth/get/full/all").then(res => res.json())
        .catch((error) => alert(error));
}

export const getStatistics = async () => {
    return await fetch(GLOBAL_URL + "/statistic/get").then(res => res.json())
        .catch((error) => alert(error));
}

export const verification = async (id) => {
    console.log(id);
    return await fetch(GLOBAL_URL + "/auth/verify/" + id, {
        method: "POST",
    }).then(result => result.json()).catch((error) => console.log(error));
}