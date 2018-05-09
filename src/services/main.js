import request from '../utils/request';

import { APIURL, REST_URL } from '../constants'

export async function getPosts() {
  return request(APIURL + '/posts')
}

export async function getSlides () {
  return request(REST_URL + '/slides')
}
