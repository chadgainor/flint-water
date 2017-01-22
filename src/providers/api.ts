import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: URL = new URL('https://api.cognitive.microsoft.com/bing/v5.0/search');
  static get parameters() {
      return [[Http]];
  }

  constructor(public http: Http) {
    this.http = http;
  }

  get(endpoint: string) {
    const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('q', 'flint water');
        urlSearchParams.set('mkt', 'en-us');
    let headers = new Headers();
    headers.set('Ocp-Apim-Subscription-Key', '4b3e3783db2b4693ac4c217c0e16b042');

    let options = new RequestOptions(
      {
      headers: headers,
      search: urlSearchParams
      });
    //options.headers = headers;

    // Support easy query params for GET requests
    /*if (urlSearchParams) {
      let p = new URLSearchParams();
      for(let k in urlSearchParams) {
        p.set(k, urlSearchParams[k]);

      }*/
      // Set the search field if we have params and don't already have
      // a search field set in options.
      //options.search = !options.search && p || options.search;
      //options.search = urlSearchParams;

    console.log(this.url + '/' + endpoint, options);
    return this.http.get('https://api.cognitive.microsoft.com/bing/v5.0/search', options);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
