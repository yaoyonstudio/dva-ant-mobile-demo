import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Common.scss'

const menus = [
  { id: 1, title: '首页', icon: '/img/menu_icons/tab_menu1.png', path: '/' },
  { id: 2, title: '文章', icon: '/img/menu_icons/tab_menu2.png', path: '/posts' },
  { id: 3, title: '测试', icon: '/img/menu_icons/tab_menu3.png', path: '/test' }
]

const AppTabMenu = ({ history }) => {
  return (
    <div className={styles.AppTabMenu}>
      <ul>
        {menus.map((menu, index) => {
          return (
            <li className={history.location.pathname === menu.path ? styles.activeMenu : ''} key={index}>
              <Link to={menu.path}>
                <img src={menu.icon} alt={menu.title} />
                <p>{menu.title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

AppTabMenu.propTypes = {
};

export default AppTabMenu;
