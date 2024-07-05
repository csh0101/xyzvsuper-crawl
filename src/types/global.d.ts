import { ComponentCustomProperties } from 'vue';
import AxiosApi from '@/api/AxiosApi';
import axios from 'axios'

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
    $axiosApi: typeof AxiosApi;
  }
}
