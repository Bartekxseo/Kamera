/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CredentialsModel } from '../models/credentials-model';
@Injectable({
  providedIn: 'root',
})
class BasicService extends __BaseService {
  static readonly getBasicManualModeChangePath = '/Basic/manualModeChange';
  static readonly getBasicPutIntoNightModePath = '/Basic/putIntoNightMode';
  static readonly getBasicPutIntoDayModePath = '/Basic/putIntoDayMode';
  static readonly postBasicFindCredentialsByIpPath = '/Basic/findCredentialsByIp';
  static readonly postBasicAddNewCredentialsPath = '/Basic/addNewCredentials';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getBasicManualModeChangeResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Basic/manualModeChange`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getBasicManualModeChange(): __Observable<null> {
    return this.getBasicManualModeChangeResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getBasicPutIntoNightModeResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Basic/putIntoNightMode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getBasicPutIntoNightMode(): __Observable<null> {
    return this.getBasicPutIntoNightModeResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getBasicPutIntoDayModeResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Basic/putIntoDayMode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getBasicPutIntoDayMode(): __Observable<null> {
    return this.getBasicPutIntoDayModeResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param ip undefined
   * @return Success
   */
  postBasicFindCredentialsByIpResponse(ip?: string): __Observable<__StrictHttpResponse<CredentialsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ip != null) __params = __params.set('ip', ip.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Basic/findCredentialsByIp`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CredentialsModel>;
      })
    );
  }
  /**
   * @param ip undefined
   * @return Success
   */
  postBasicFindCredentialsByIp(ip?: string): __Observable<CredentialsModel> {
    return this.postBasicFindCredentialsByIpResponse(ip).pipe(
      __map(_r => _r.body as CredentialsModel)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postBasicAddNewCredentialsResponse(body?: CredentialsModel): __Observable<__StrictHttpResponse<CredentialsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Basic/addNewCredentials`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CredentialsModel>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postBasicAddNewCredentials(body?: CredentialsModel): __Observable<CredentialsModel> {
    return this.postBasicAddNewCredentialsResponse(body).pipe(
      __map(_r => _r.body as CredentialsModel)
    );
  }
}

module BasicService {
}

export { BasicService }
