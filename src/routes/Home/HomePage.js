import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/layout/MainLayout'
import styles from './HomePage.scss';
import { Carousel, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'

const HomePage = ({main, history, dispatch}) => {
  return (
    <MainLayout history={history} title="首页">
      <div className={styles.Home}>
        <div></div>
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dotStyle={{ marginBottom: '10px' }}
          dotActiveStyle={{ marginBottom: '10px', background: '#ff8e2b' }}
        >
          {main.slides.map((slide, index) => (
            <a
              key={index}
              href={slide.slide_link}
              style={{ display: 'inline-block', width: '100%', height: 'auto', minHeight: '200px' }}
            >
              <img
                src={slide.slide_img}
                alt={slide.slide_title}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  // window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <WingBlank>
          <Button type="primary">primary</Button>
          <Button loading>loading button</Button>
          <Button icon="check-circle-o">with icon</Button>
        </WingBlank>
        <WingBlank>
          <Link to="/register">注册</Link>
        </WingBlank>
      </div>
    </MainLayout>
  );
}

HomePage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps)(HomePage);
