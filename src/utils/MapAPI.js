// Build FOURSQUARE API

class APIBuilder {
  static baseURL() {
      return "https://api.foursquare.com/v2/venues/";
  }

  static auth() {
    const keys = {
      client_id : "TIG0P1XCRKAEZNHTPLQF4SJ4SD1DR2OFR0PHIZBQTCANLBNB",
      client_secret: "FK1F5BLFNSTMGV51EXJ5VI4CKVYDUIMVAKIVZFRHGER4GJZT",
      v: "20181017"
    };
    return Object.keys(keys)
      .map(key => `${key}=${keys[key]}`)
      .join("&");
  }

  static buildURL(urlParams) {
    if(!urlParams) {
      return "";
    }
    return Object.keys(urlParams)
      .map(key => `${key}=${urlParams[key]}`)
      .join("&");
  }

  static headers() {
    return {
      "Accept": "application/json"
    };
  }

  static baseFetch(endpoint, method, param) {
    return fetch(
      `${APIBuilder.baseURL()}${endpoint}?${APIBuilder.auth()}&${APIBuilder.buildURL(param)}`)
    .then(res => res.json())
    .catch(err => console.err(err));
  }
}

export default class SquareAPI {
  static search(urlParam){
    return APIBuilder.baseFetch(`search`, "GET", urlParam);
  }
  static getDetail(VENUE_ID){
    return APIBuilder.baseFetch(`${VENUE_ID}`, "GET");
  }
  static getPhtots(VENUE_ID){
    return APIBuilder.baseFetch(`${VENUE_ID}/phtots`, "GET");
  }
}
