import { getPosts, getPostDetail } from '../services/posts'
import { POSTS_PER_PAGE } from '../constants'
import queryString from 'query-string'

export default {
  namespace: 'posts',
  state: {
    list: [],
    page: 1,
    loading: false,
    hasMore: true,
    post: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        console.log('history:', history)
        if (pathname === '/posts') {
          let _query = { page: 1}
          if (query && query.page) {
            _query = query
          }
          dispatch({ type: 'initList' })
          dispatch({ type: 'getPosts', payload: _query });
        }
        if (pathname === '/post') {
          let query = queryString.parse(history.location.search)
          if (query.id) {
            dispatch({ type: 'getPostDetail', payload: query });
          }
        }
      });
    },
  },

  effects: {
    *getPosts({ payload: { page = 1 } }, { select, call, put}) {
      yield put({ type: 'showLoading'})
      const { data } = yield call(getPosts, { page })
      if (data) {
        yield put({
          type: 'getPostsSuccess',
          payload: {
            data: data
          }
        })  
      }
    },
    *getPostDetail({ payload }, { select, call, put}) {
      yield put({ type: 'initPost' })
      yield put({ type: 'showLoading' })
      const { data } = yield call(getPostDetail, payload)
      if (data) {
        yield put({
          type: 'getPostDetailSuccess',
          payload: {
            data: data
          }
        })
      }
    }
  },

  reducers: {
    initList (state, action) {
      return {
        ...state,
        list: []
      }
    },
    initPost (state, action) {
      return {
        ...state,
        post: {}
      }
    },
    showLoading(state, action) {
      return { ...state, loading: true }
    },
    getPostsSuccess(state, action) {
      console.log('loaded:', action.payload)
      let _data = state.list.concat(action.payload.data)
      let _hasMore = true
      if (action.payload.data && action.payload.data.length >= POSTS_PER_PAGE) {
        _hasMore = true
      } else {
        _hasMore = false
      }
      return {
        ...state,
        list: _data,
        page: state.page + 1,
        loading: false,
        hasMore: _hasMore
      }
    },
    getPostDetailSuccess (state, action) {
      return {
        ...state,
        post: action.payload.data,
        loading: false,
      }
    }
  },

};
