import React, { Component } from 'react';
// import { connect } from 'dva';
import ContentLayout from '../../components/layout/ContentLayout'
import { createForm } from 'rc-form';
import { Button, DatePicker, InputItem, List, Picker, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './RegisterPage.scss'
import zoneData from '../../assets/zone'
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
// console.log(now, utcOffset, now.toISOString(), utcOffset.toISOString());

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {
        birthdayDate: now,
        zone: ['44', '4419', '441900003'],
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

  validateDatePicker = (rule, date, callback) => {
    console.log('validateDatePicker')
    if (date && date.getMinutes() !== 15) {
      callback();
    } else {
      callback(new Error('15 is invalid'));
    }
  }

  render () {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <ContentLayout history={this.props.history} title="注册">
        <div>
          <form>
            <List>
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

              <DatePicker
                mode="date"
                title="选择生日"
                minDate={new Date('1970-1-1')}
                maxDate={now}
                {...getFieldProps('dp', {
                  initialValue: this.state.info.birthdayDate,
                  rules: [
                    { required: true, message: '生日是必填项' },
                  ],
                })}
              >
                <List.Item arrow="horizontal">生日</List.Item>
              </DatePicker>

              <Picker extra="请选择"
                data={zoneData}
                title="所在地区"
                {...getFieldProps('district', {
                  initialValue: this.state.info.zone,
                })}
                format={lables => lables.join('-')}
                onOk={e => console.log('ok', e)}
                onDismiss={e => console.log('dismiss', e)}
              >
                <List.Item arrow="horizontal">所在地区</List.Item>
              </Picker>
            </List>



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
      </ContentLayout>
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

