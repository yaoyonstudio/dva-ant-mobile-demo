import request from '../utils/request';

const apiUrl = 'https://www.thatyou.cn/wp-json/wp/v2'

export function query() {
  return request('/api/users');
}

export async function getPosts() {
  return request(apiUrl + '/posts')
}
