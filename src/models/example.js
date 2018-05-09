import { getPosts } from '../services/example'

export default {

  namespace: 'example',

  state: {
    user: {
      name: 'ken',
      age: 18
    },
    posts: [],
    loading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getPosts({ payload }, { select, call, put}) {
      yield put({ type: 'showLoading'})
      const { data } = yield call(getPosts)
      if (data) {
        yield put({
          type: 'getPostsSuccess',
          payload: {
            posts: data
          }
        })  
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state) {
      return {
        ...state,
        user: {
          ...state.user,
          age: state.user.age + 1
        }
      }
    },
    minus(state) {
      return {
        ...state,
        user: {
          ...state.user,
          age: state.user.age - 1
        }
      }
    },
    showLoading(state, action) {
      return { ...state, loading: true }
    },
    getPostsSuccess(state, action) {
      console.log('loaded:', action.payload)
      return {...state, ...action.payload, loading: false}
    }
  },

};
