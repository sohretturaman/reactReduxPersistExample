import { Get, Put } from "../main";
import { ALL_USERS } from "../NetworkPaths";

const getAllUsers = () => {
    return Get(ALL_USERS);
};
const getUser= (id) => {
    const urlToSend = `${ALL_USERS}/${id}`
    return Get(urlToSend);
}
const updateUser = (id, body) => {
    return Put(ALL_USERS, body, id);
};
export {getAllUsers,getUser,updateUser}