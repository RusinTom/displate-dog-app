import axios, { AxiosError } from 'axios'

enum ERROR_MESSAGES_ENUM {
  apiError = 'Technical problems have occurred, please try again later.',
  networkError = 'There were network problems. Check your internet connection and try again.',
  syntaxError = 'Sorry, the download failed. We will try to fix the technical problems as soon as possible.'
}

export const baseURL = 'https://dog.ceo/api'

const apiClient = axios.create({
  baseURL // <- Could be ENV variable
})

const axiosErrorHandler = (error: AxiosError) => {
  if (error.isAxiosError) {
    if (error.response) {
      console.error(`[API Error]: ${JSON.stringify(error.response.data)}`)
      return Promise.reject(ERROR_MESSAGES_ENUM.apiError)
    } else {
      console.error('[Network Error]: No Response Received')
      return Promise.reject(ERROR_MESSAGES_ENUM.networkError)
    }
  } else {
    console.error('[Non-HTTP Error]:', error)
    return Promise.reject(ERROR_MESSAGES_ENUM.syntaxError)
  }
}

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    return axiosErrorHandler(error)
  }
)

const { get, post, put, delete: destroy } = apiClient

export { destroy, get, post, put }
