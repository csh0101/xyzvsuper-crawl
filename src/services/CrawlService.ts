import API from '../constants/api';
import AxiosApi from '../api/AxiosApi';
export const execCrawl = async<T>() => {
    const url = `${API.execCrawlURI}`
    return AxiosApi.get<T>(url)
};
