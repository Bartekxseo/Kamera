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
  static readonly getBasicUpdateTimePath = '/Basic/updateTime';
  static readonly getBasicManualModeChangePath = '/Basic/manualModeChange';
  static readonly getBasicPutIntoNightModePath = '/Basic/putIntoNightMode';
  static readonly getBasicPutIntoDayModePath = '/Basic/putIntoDayMode';
  static readonly getBasicGetCurrentModePath = '/Basic/getCurrentMode';
  static readonly postBasicFindCredentialsByIpPath = '/Basic/findCredentialsByIp';
  static readonly postBasicAddNewCredentialsPath = '/Basic/addNewCredentials';
  static readonly postBasicFindCredentialsByIdPath = '/Basic/findCredentialsById';
  static readonly postBasicUpdateHoursPath = '/Basic/updateHours';
  static readonly postBasicUpdateCredentialsPath = '/Basic/updateCredentials';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param time undefined
   */
  getBasicUpdateTimeResponse(time?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (time != null) __params = __params.set('time', time.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Basic/updateTime`,
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
  }
  /**
   * @param time undefined
   */
  getBasicUpdateTime(time?: string): __Observable<null> {
    return this.getBasicUpdateTimeResponse(time).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  getBasicManualModeChangeResponse(id?: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
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
  }
  /**
   * @param id undefined
   */
  getBasicManualModeChange(id?: number): __Observable<null> {
    return this.getBasicManualModeChangeResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  getBasicPutIntoNightModeResponse(id?: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
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
  }
  /**
   * @param id undefined
   */
  getBasicPutIntoNightMode(id?: number): __Observable<null> {
    return this.getBasicPutIntoNightModeResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  getBasicPutIntoDayModeResponse(id?: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
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
  }
  /**
   * @param id undefined
   */
  getBasicPutIntoDayMode(id?: number): __Observable<null> {
    return this.getBasicPutIntoDayModeResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getBasicGetCurrentModeResponse(id?: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Basic/getCurrentMode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getBasicGetCurrentMode(id?: number): __Observable<boolean> {
    return this.getBasicGetCurrentModeResponse(id).pipe(
      __map(_r => _r.body as boolean)
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

  /**
   * @param id undefined
   * @return Success
   */
  postBasicFindCredentialsByIdResponse(id?: number): __Observable<__StrictHttpResponse<CredentialsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Basic/findCredentialsById`,
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
   * @param id undefined
   * @return Success
   */
  postBasicFindCredentialsById(id?: number): __Observable<CredentialsModel> {
    return this.postBasicFindCredentialsByIdResponse(id).pipe(
      __map(_r => _r.body as CredentialsModel)
    );
  }

  /**
   * @param body undefined
   */
  postBasicUpdateHoursResponse(body?: CredentialsModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Basic/updateHours`,
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
  }
  /**
   * @param body undefined
   */
  postBasicUpdateHours(body?: CredentialsModel): __Observable<null> {
    return this.postBasicUpdateHoursResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postBasicUpdateCredentialsResponse(body?: CredentialsModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Basic/updateCredentials`,
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
  }
  /**
   * @param body undefined
   */
  postBasicUpdateCredentials(body?: CredentialsModel): __Observable<null> {
    return this.postBasicUpdateCredentialsResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module BasicService {
}

export { BasicService }
