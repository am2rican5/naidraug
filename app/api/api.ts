import axios, { AxiosRequestConfig } from 'axios'

class API {
  protected instance = axios.create({
    baseURL: 'http://scholar.google.com',
    timeout: 60000
  })

  protected get(path: string, config?: AxiosRequestConfig) {
    return this.instance.get(path, config)
  }
}
