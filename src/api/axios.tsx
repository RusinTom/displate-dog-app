import axios from 'axios'

const baseURL = 'https://dog.ceo/api/'

const apiClient = axios.create({
  baseURL // <- Could be ENV variable
})

const { get, post, put, delete: destroy } = apiClient

export { destroy, get, post, put }
