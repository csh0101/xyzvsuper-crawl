import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IResponse } from '@/utils/request';

class AxiosApi {
    private static instance: AxiosApi;
    private instance: AxiosInstance;

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
            // 这里可以添加更多默认配置
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // 请求拦截器
        this.instance.interceptors.request.use(this.handleRequest)

        // 响应拦截器
        this.instance.interceptors.response.use(this.handleResponse, this.handleError);
    }

    public static getInstance(): AxiosApi {
        if (!this.instance) {
            // this.instance = new AxiosApi('你的API基础URL');
            this.instance = new AxiosApi(import.meta.env.APP_SERVER_URL);
        }
        return this.instance;
    }

    private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        // 在这里可以添加请求前的逻辑，例如添加认证token到headers
        return config;
    }

    private handleResponse(response: AxiosResponse): AxiosResponse {
        // 在这里可以添加处理响应的逻辑
        return response;
    }

    private handleError(error: any): Promise<any> {
        // 在这里可以处理响应错误
        return Promise.reject(error);
    }
    // 假设 this.instance 是你的axios实例
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<IResponse<T>> {
        return await this.instance.get<IResponse<T>>(url, config).then((response) => response.data);
    }

    public async post<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<IResponse<T>> {
        return await this.instance.post<IResponse<T>>(url, data, config).then((response) => response.data);
    }
    // 这里可以根据需要添加更多方法，如put、delete等
}
export default AxiosApi.getInstance();
