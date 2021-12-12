/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CredentialsModel } from '../models/credentials-model';

@Injectable({
  providedIn: 'root',
})
export class BasicService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation basicManualModeChangeGet
   */
  static readonly BasicManualModeChangeGetPath = '/Basic/manualModeChange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicManualModeChangeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicManualModeChangeGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicManualModeChangeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicManualModeChangeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicManualModeChangeGet(params?: {
  }): Observable<void> {

    return this.basicManualModeChangeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation basicPutIntoNightModeGet
   */
  static readonly BasicPutIntoNightModeGetPath = '/Basic/putIntoNightMode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicPutIntoNightModeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicPutIntoNightModeGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicPutIntoNightModeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicPutIntoNightModeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicPutIntoNightModeGet(params?: {
  }): Observable<void> {

    return this.basicPutIntoNightModeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation basicPutIntoDayModeGet
   */
  static readonly BasicPutIntoDayModeGetPath = '/Basic/putIntoDayMode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicPutIntoDayModeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicPutIntoDayModeGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicPutIntoDayModeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicPutIntoDayModeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicPutIntoDayModeGet(params?: {
  }): Observable<void> {

    return this.basicPutIntoDayModeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation basicFindCredentialsByIpGet
   */
  static readonly BasicFindCredentialsByIpGetPath = '/Basic/findCredentialsByIp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicFindCredentialsByIpGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicFindCredentialsByIpGet$Plain$Response(params?: {
    ip?: string;
  }): Observable<StrictHttpResponse<CredentialsModel>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicFindCredentialsByIpGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CredentialsModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicFindCredentialsByIpGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicFindCredentialsByIpGet$Plain(params?: {
    ip?: string;
  }): Observable<CredentialsModel> {

    return this.basicFindCredentialsByIpGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CredentialsModel>) => r.body as CredentialsModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicFindCredentialsByIpGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicFindCredentialsByIpGet$Json$Response(params?: {
    ip?: string;
  }): Observable<StrictHttpResponse<CredentialsModel>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicFindCredentialsByIpGetPath, 'get');
    if (params) {
      rb.query('ip', params.ip, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CredentialsModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicFindCredentialsByIpGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicFindCredentialsByIpGet$Json(params?: {
    ip?: string;
  }): Observable<CredentialsModel> {

    return this.basicFindCredentialsByIpGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CredentialsModel>) => r.body as CredentialsModel)
    );
  }

  /**
   * Path part for operation basicAddNewCredentialsPut
   */
  static readonly BasicAddNewCredentialsPutPath = '/Basic/addNewCredentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicAddNewCredentialsPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicAddNewCredentialsPut$Plain$Response(params?: {
    ip?: string;
    user?: string;
    password?: string;
  }): Observable<StrictHttpResponse<CredentialsModel>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicAddNewCredentialsPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('user', params.user, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CredentialsModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicAddNewCredentialsPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicAddNewCredentialsPut$Plain(params?: {
    ip?: string;
    user?: string;
    password?: string;
  }): Observable<CredentialsModel> {

    return this.basicAddNewCredentialsPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CredentialsModel>) => r.body as CredentialsModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `basicAddNewCredentialsPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicAddNewCredentialsPut$Json$Response(params?: {
    ip?: string;
    user?: string;
    password?: string;
  }): Observable<StrictHttpResponse<CredentialsModel>> {

    const rb = new RequestBuilder(this.rootUrl, BasicService.BasicAddNewCredentialsPutPath, 'put');
    if (params) {
      rb.query('ip', params.ip, {});
      rb.query('user', params.user, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CredentialsModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `basicAddNewCredentialsPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  basicAddNewCredentialsPut$Json(params?: {
    ip?: string;
    user?: string;
    password?: string;
  }): Observable<CredentialsModel> {

    return this.basicAddNewCredentialsPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CredentialsModel>) => r.body as CredentialsModel)
    );
  }

}
