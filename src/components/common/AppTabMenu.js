import React from 'react';
import { TabBar } from 'antd-mobile';
import styles from './Common.scss'

const menus = [
  { id: 1, title: '首页', icon: '/img/menu_icons/tab_menu1.png', icon_d: '/img/menu_icons/tab_menu1_d.png', path: '/' },
  { id: 2, title: '文章', icon: '/img/menu_icons/tab_menu2.png', icon_d: '/img/menu_icons/tab_menu2_d.png', path: '/posts' },
  { id: 3, title: '测试', icon: '/img/menu_icons/tab_menu3.png', icon_d: '/img/menu_icons/tab_menu3_d.png', path: '/test' }
]

const AppTabMenu = ({ history }) => {
  return (
    <div className={styles.AppTabMenu}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#FF893C"
        barTintColor="white"
      >
        {menus.map((menu, index) => {
          return (
            <TabBar.Item
              title={menu.title}
              key={menu.title}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + menu.icon_d + ') center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + menu.icon + ') center center /  21px 21px no-repeat' }}
              />
              }
              selected={history.location.pathname === menu.path}
              onPress={() => {
                history.push(menu.path)
              }}
            >
            </TabBar.Item>
          )
        })}
      </TabBar>
    </div>
  );
};

AppTabMenu.propTypes = {
};

export default AppTabMenu;
