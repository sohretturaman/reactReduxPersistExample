
const onLogin = (payload) => ({
    type: 'LOGIN',
    payload: payload,
});

const onRegister = (payload) => ({
    type: 'REGISTER',
    payload: payload,
})



export{onLogin,onRegister}