/* tslint:disable */
/* eslint-disable */
/**
 * Threagile API
 * <b>Threagile API</b> for Agile Threat Modeling: visit <a href=\"https://threagile.io\">https://threagile.io</a> for more information.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
import * as FormData from 'form-data';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AuthKeysDelete200Response
 */
export interface AuthKeysDelete200Response {
    /**
     * 
     * @type {string}
     * @memberof AuthKeysDelete200Response
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface AuthKeysDelete201Response
 */
export interface AuthKeysDelete201Response {
    /**
     * 
     * @type {string}
     * @memberof AuthKeysDelete201Response
     */
    'key'?: string;
}
/**
 * 
 * @export
 * @interface AuthKeysDelete404Response
 */
export interface AuthKeysDelete404Response {
    /**
     * 
     * @type {string}
     * @memberof AuthKeysDelete404Response
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface AuthKeysDelete500Response
 */
export interface AuthKeysDelete500Response {
    /**
     * 
     * @type {string}
     * @memberof AuthKeysDelete500Response
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface AuthTokensDelete200Response
 */
export interface AuthTokensDelete200Response {
    /**
     * 
     * @type {string}
     * @memberof AuthTokensDelete200Response
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface AuthTokensDelete201Response
 */
export interface AuthTokensDelete201Response {
    /**
     * 
     * @type {string}
     * @memberof AuthTokensDelete201Response
     */
    'token'?: string;
}
/**
 * 
 * @export
 * @interface AuthTokensDelete404Response
 */
export interface AuthTokensDelete404Response {
    /**
     * 
     * @type {string}
     * @memberof AuthTokensDelete404Response
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface AuthTokensDelete500Response
 */
export interface AuthTokensDelete500Response {
    /**
     * 
     * @type {string}
     * @memberof AuthTokensDelete500Response
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface DirectCheckPost200Response
 */
export interface DirectCheckPost200Response {
    /**
     * 
     * @type {string}
     * @memberof DirectCheckPost200Response
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface DirectCheckPost400Response
 */
export interface DirectCheckPost400Response {
    /**
     * 
     * @type {string}
     * @memberof DirectCheckPost400Response
     */
    'error'?: string;
}
/**
 * 
 * @export
 * @interface MetaPingGet200Response
 */
export interface MetaPingGet200Response {
    /**
     * 
     * @type {string}
     * @memberof MetaPingGet200Response
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface MetaStatsGet200Response
 */
export interface MetaStatsGet200Response {
    /**
     * 
     * @type {number}
     * @memberof MetaStatsGet200Response
     */
    'key_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof MetaStatsGet200Response
     */
    'model_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof MetaStatsGet200Response
     */
    'success_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof MetaStatsGet200Response
     */
    'error_count'?: number;
}
/**
 * 
 * @export
 * @interface MetaTypesGet200Response
 */
export interface MetaTypesGet200Response {
    /**
     * 
     * @type {Array<string>}
     * @memberof MetaTypesGet200Response
     */
    'confidentiality'?: Array<string>;
}
/**
 * 
 * @export
 * @interface MetaVersionGet200Response
 */
export interface MetaVersionGet200Response {
    /**
     * 
     * @type {string}
     * @memberof MetaVersionGet200Response
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaVersionGet200Response
     */
    'build_timestamp'?: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an auth key
         * @summary Delete an auth key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authKeysDelete: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('authKeysDelete', 'key', key)
            const localVarPath = `/auth/keys`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (key !== undefined && key !== null) {
                localVarHeaderParameter['key'] = String(key);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new auth key
         * @summary Create a new auth key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authKeysPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/keys`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a token
         * @summary Delete a token
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authTokensDelete: async (token: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('authTokensDelete', 'token', token)
            const localVarPath = `/auth/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined && token !== null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new (time limited) token from an auth key
         * @summary Create a new (time limited) token from an auth key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authTokensPost: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('authTokensPost', 'key', key)
            const localVarPath = `/auth/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (key !== undefined && key !== null) {
                localVarHeaderParameter['key'] = String(key);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an auth key
         * @summary Delete an auth key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authKeysDelete(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthKeysDelete200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authKeysDelete(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new auth key
         * @summary Create a new auth key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authKeysPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthKeysDelete201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authKeysPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a token
         * @summary Delete a token
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authTokensDelete(token: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthTokensDelete200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authTokensDelete(token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new (time limited) token from an auth key
         * @summary Create a new (time limited) token from an auth key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authTokensPost(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthTokensDelete201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authTokensPost(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * Delete an auth key
         * @summary Delete an auth key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authKeysDelete(key: string, options?: any): AxiosPromise<AuthKeysDelete200Response> {
            return localVarFp.authKeysDelete(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new auth key
         * @summary Create a new auth key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authKeysPost(options?: any): AxiosPromise<AuthKeysDelete201Response> {
            return localVarFp.authKeysPost(options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a token
         * @summary Delete a token
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authTokensDelete(token: string, options?: any): AxiosPromise<AuthTokensDelete200Response> {
            return localVarFp.authTokensDelete(token, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new (time limited) token from an auth key
         * @summary Create a new (time limited) token from an auth key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authTokensPost(key: string, options?: any): AxiosPromise<AuthTokensDelete201Response> {
            return localVarFp.authTokensPost(key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * Delete an auth key
     * @summary Delete an auth key
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authKeysDelete(key: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authKeysDelete(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new auth key
     * @summary Create a new auth key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authKeysPost(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authKeysPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a token
     * @summary Delete a token
     * @param {string} token 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authTokensDelete(token: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authTokensDelete(token, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new (time limited) token from an auth key
     * @summary Create a new (time limited) token from an auth key
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authTokensPost(key: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authTokensPost(key, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DirectApi - axios parameter creator
 * @export
 */
export const DirectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Direct model analyze call
         * @summary Direct model analyze call
         * @param {number} [dpi] The DPI (resolution) to use for the diagram generation
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directAnalyzePost: async (dpi?: number, file?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/direct/analyze`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            if (dpi !== undefined) {
                localVarQueryParameter['dpi'] = dpi;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Direct model check call
         * @summary Direct model check call
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directCheckPost: async (file?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/direct/check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stub model file (as a starting point)
         * @summary Stub model file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directStubGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/direct/stub`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DirectApi - functional programming interface
 * @export
 */
export const DirectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DirectApiAxiosParamCreator(configuration)
    return {
        /**
         * Direct model analyze call
         * @summary Direct model analyze call
         * @param {number} [dpi] The DPI (resolution) to use for the diagram generation
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async directAnalyzePost(dpi?: number, file?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.directAnalyzePost(dpi, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Direct model check call
         * @summary Direct model check call
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async directCheckPost(file?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DirectCheckPost200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.directCheckPost(file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Stub model file (as a starting point)
         * @summary Stub model file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async directStubGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.directStubGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DirectApi - factory interface
 * @export
 */
export const DirectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DirectApiFp(configuration)
    return {
        /**
         * Direct model analyze call
         * @summary Direct model analyze call
         * @param {number} [dpi] The DPI (resolution) to use for the diagram generation
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directAnalyzePost(dpi?: number, file?: any, options?: any): AxiosPromise<any> {
            return localVarFp.directAnalyzePost(dpi, file, options).then((request) => request(axios, basePath));
        },
        /**
         * Direct model check call
         * @summary Direct model check call
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directCheckPost(file?: any, options?: any): AxiosPromise<DirectCheckPost200Response> {
            return localVarFp.directCheckPost(file, options).then((request) => request(axios, basePath));
        },
        /**
         * Stub model file (as a starting point)
         * @summary Stub model file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directStubGet(options?: any): AxiosPromise<string> {
            return localVarFp.directStubGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DirectApi - object-oriented interface
 * @export
 * @class DirectApi
 * @extends {BaseAPI}
 */
export class DirectApi extends BaseAPI {
    /**
     * Direct model analyze call
     * @summary Direct model analyze call
     * @param {number} [dpi] The DPI (resolution) to use for the diagram generation
     * @param {any} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DirectApi
     */
    public directAnalyzePost(dpi?: number, file?: any, options?: AxiosRequestConfig) {
        return DirectApiFp(this.configuration).directAnalyzePost(dpi, file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Direct model check call
     * @summary Direct model check call
     * @param {any} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DirectApi
     */
    public directCheckPost(file?: any, options?: AxiosRequestConfig) {
        return DirectApiFp(this.configuration).directCheckPost(file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stub model file (as a starting point)
     * @summary Stub model file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DirectApi
     */
    public directStubGet(options?: AxiosRequestConfig) {
        return DirectApiFp(this.configuration).directStubGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * MetaApi - axios parameter creator
 * @export
 */
export const MetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Used as health check in docker container as well
         * @summary Simple health check ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaPingGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/meta/ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Model statistics
         * @summary Model statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaStatsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/meta/stats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Listing of all enum type values
         * @summary Listing of all enum type values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaTypesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/meta/types`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Version number
         * @summary Version number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaVersionGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/meta/version`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetaApi - functional programming interface
 * @export
 */
export const MetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Used as health check in docker container as well
         * @summary Simple health check ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metaPingGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaPingGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.metaPingGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Model statistics
         * @summary Model statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metaStatsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaStatsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.metaStatsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Listing of all enum type values
         * @summary Listing of all enum type values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metaTypesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaTypesGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.metaTypesGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Version number
         * @summary Version number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metaVersionGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaVersionGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.metaVersionGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetaApi - factory interface
 * @export
 */
export const MetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetaApiFp(configuration)
    return {
        /**
         * Used as health check in docker container as well
         * @summary Simple health check ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaPingGet(options?: any): AxiosPromise<MetaPingGet200Response> {
            return localVarFp.metaPingGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Model statistics
         * @summary Model statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaStatsGet(options?: any): AxiosPromise<MetaStatsGet200Response> {
            return localVarFp.metaStatsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Listing of all enum type values
         * @summary Listing of all enum type values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaTypesGet(options?: any): AxiosPromise<MetaTypesGet200Response> {
            return localVarFp.metaTypesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Version number
         * @summary Version number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaVersionGet(options?: any): AxiosPromise<MetaVersionGet200Response> {
            return localVarFp.metaVersionGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetaApi - object-oriented interface
 * @export
 * @class MetaApi
 * @extends {BaseAPI}
 */
export class MetaApi extends BaseAPI {
    /**
     * Used as health check in docker container as well
     * @summary Simple health check ping
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetaApi
     */
    public metaPingGet(options?: AxiosRequestConfig) {
        return MetaApiFp(this.configuration).metaPingGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Model statistics
     * @summary Model statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetaApi
     */
    public metaStatsGet(options?: AxiosRequestConfig) {
        return MetaApiFp(this.configuration).metaStatsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Listing of all enum type values
     * @summary Listing of all enum type values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetaApi
     */
    public metaTypesGet(options?: AxiosRequestConfig) {
        return MetaApiFp(this.configuration).metaTypesGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Version number
     * @summary Version number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetaApi
     */
    public metaVersionGet(options?: AxiosRequestConfig) {
        return MetaApiFp(this.configuration).metaVersionGet(options).then((request) => request(this.axios, this.basePath));
    }
}

