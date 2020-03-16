import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://burger-builder-cfa8a.firebaseio.com/'
})

export default instance