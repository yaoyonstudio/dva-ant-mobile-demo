import React, { Component } from 'react';
// import { connect } from 'dva';
import MainLayout from '../../components/layout/MainLayout'
import { createForm } from 'rc-form';
import { Button, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';
import styles from './RegisterPage.scss'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {
        title: '',
        phone: '',
        email: ''
      }
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  }


  render () {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <MainLayout history={this.props.history} title="首页">
        <div>
          <h2>Layout Page</h2>
          <form>
            <InputItem
              {...getFieldProps('info.title', {
                rules: [{required: true, message: '标题是必填项'}],
              })}
              placeholder="请输入标题"
            >标题</InputItem>
            <InputItem
              {...getFieldProps('info.phone', {
                rules: [
                  {required: true, message: '手机号码是必填项'},
                  {pattern: /^1\d{2} \d{4} \d{4}$/, message: '手机号码格式不正确'}
                ],
              })}
              type="phone"
              placeholder="请输入手机号码"
            >手机号码</InputItem>
            <InputItem
              {...getFieldProps('info.email', {
                rules: [
                  {required: true, message: '邮箱是必填项'},
                  {type: 'email', message: '邮箱格式不正确'}
                ]
              })}
              type="email"
              placeholder="请输入邮箱"
            >邮箱</InputItem>
            <WingBlank>
              {getFieldError('info.title') && <span className={styles.tip}>{getFieldError('info.title')}</span>}
              {getFieldError('info.phone') && <span className={styles.tip}>{getFieldError('info.phone')}</span>}
              {getFieldError('info.email') && <span className={styles.tip}>{getFieldError('info.email')}</span>}
            </WingBlank>
            <WhiteSpace size="xl" />
            <WingBlank>
              <Button onClick={(e) => this.onSubmit(e)} type="primary">提交</Button>
            </WingBlank>
          </form>
        </div>
      </MainLayout>
    );
  }
}

// const RegisterPage = ({main, history, dispatch}) => {
//   // const { getFieldProps } = form
//   return (
//     <MainLayout history={history} title="首页">
//       <div>
//         <h2>Layout Page</h2>
//         {/* <InputItem
//             {...getFieldProps('autofocus')}
//             clear
//             placeholder="auto focus"
//             ref={el => this.autoFocusInst = el}
//           >标题</InputItem> */}
//       </div>
//     </MainLayout>
//   );
// }

// RegisterPage.propTypes = {
// };

// const mapStateToProps = (state) => {
//   return {
//     main: state.main
//   }
// }

// export default connect(mapStateToProps)(RegisterPage);
export default createForm()(RegisterPage)

