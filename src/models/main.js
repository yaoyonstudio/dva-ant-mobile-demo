import { getPosts, getSlides } from '../services/main'

export default {
  namespace: 'main',
  state: {
    user: {
      name: 'ken',
      age: 18
    },
    slides: [
      {
          "id": 1,
          "slide_title": "Slider 2",
          "slide_link": "https://www.baidu.com",
          "slide_img": "https://pgadmin.thatyou.cn/media/slide2.jpg"
      },
      {
          "id": 2,
          "slide_title": "Slider 1",
          "slide_link": "https://www.baidu.com",
          "slide_img": "https://pgadmin.thatyou.cn/media/slide1.jpg"
      },
      {
          "id": 3,
          "slide_title": "Slider 3",
          "slide_link": "https://www.baidu.com",
          "slide_img": "https://pgadmin.thatyou.cn/media/slide3.jpg"
      },
      {
          "id": 4,
          "slide_title": "Slider 4",
          "slide_link": "https://www.baidu.com",
          "slide_img": "https://pgadmin.thatyou.cn/media/slide4.jpg"
      },
      {
          "id": 5,
          "slide_title": "Slider 5",
          "slide_link": "https://www.baidu.com",
          "slide_img": "https://pgadmin.thatyou.cn/media/slide5.jpg"
      }
    ],
    posts: [],
    loading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        console.log('pathname: ', pathname)
        if (pathname === '/') {
          // dispatch({ type: 'getSlides'});
        }
      })
    },
  },

  effects: {
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
    },
    *getSlides({ payload }, { select, call, put}) {
      const { data } = yield call(getSlides)
      if (data) {
        yield put({
          type: 'getSlidesSuccess',
          payload: {
            slides: data
          }
        })  
      }
    }
  },

  reducers: {
    showLoading(state, action) {
      return { ...state, loading: true }
    },
    getPostsSuccess(state, action) {
      return {...state, ...action.payload, loading: false}
    },
    getSlidesSuccess(state, action) {
      return {...state, ...action.payload}
    }
  },

};
