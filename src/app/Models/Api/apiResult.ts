export interface IApiResult {
  success: boolean;
  errorMessage: string[];
  message: string;
  status: number,
  result: any
}


export class ApiError {
  message?: string;
  statusCode?: number;
  success?: boolean

}