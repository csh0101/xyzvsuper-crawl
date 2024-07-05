export type IResponse<T> = {
    success: boolean;
    code?: string;
    message?: string;
    data? : T;
}
