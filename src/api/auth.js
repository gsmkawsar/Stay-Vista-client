
import axiosSecure from "."

// Save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}l`, currentUser)

    return data
}

// get token from server

export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email)
    console.log("Token Reeved form server----->", data);
    return data
}