import request from '../utils/request';
import { APIURL, POSTS_PER_PAGE } from '../constants'

export async function getPosts({ page }) {
  let _page = page || 1
  return request(APIURL + `/posts?page=${_page}&per_page=${POSTS_PER_PAGE}`)
}

export async function getPostDetail({ id }) {
  return request(APIURL + `/posts/${id}`)
}
