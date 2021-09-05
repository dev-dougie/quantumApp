import axios from 'axios'

const api = axios.create({
    baseURL: 'https://quantumfiap.herokuapp.com'
})

export { api }