import s from "./local.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.firstHeader}>
        <a href="#">
          <div className={s.logoImg} />
        </a>
        <nav className={s.mainNav}>
          <ul className={s.mainNavList}>
            <li className={s.mainNavLi}>
              <a
                href="#"
                className={clsx(s.mainNavLink, s.mainNavLinkSelected)}
              >
                发现音乐
              </a>
            </li>
            <li className={s.mainNavLi}>
              <a href="#" className={s.mainNavLink}>
                我的音乐
              </a>
            </li>
            <li className={s.mainNavLi}>
              <a href="#" className={s.mainNavLink}>
                关注
              </a>
            </li>
            <li className={s.mainNavLi}>
              <a href="#" className={s.mainNavLink}>
                商城
              </a>
            </li>
            <li className={s.mainNavLi}>
              <a href="#" className={s.mainNavLink}>
                音乐人
              </a>
            </li>
            <li className={s.mainNavLi}>
              <a href="#" className={s.mainNavLink}>
                云推歌
              </a>
            </li>
            <li className={s.mainNavLi}>
              <a href="#" className={s.mainNavLink}>
                下载客户端
              </a>
            </li>
            <li>
              <div className={s.searchBox}>
                <button className={s.searchBtn}>
                  <ion-icon
                    className={s.searchBtnIcon}
                    name="search-outline"
                  ></ion-icon>
                </button>
                <input
                  className={s.searchInput}
                  placeholder="音乐/视频/电台/用户"
                />
              </div>
            </li>
            <li>
              <a href="#" className={s.createCenter}>
                创作者中心
              </a>
            </li>
            <li>
              <a href="#" className={s.login}>
                登录
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.secondHeader}>
        <ul className={s.secondNavList}>
          <li className={s.secondNavLiSelected}>
            <Link
              to="/"
              className={clsx(s.secondNavLink, s.secondNavLinkSelected)}
            >
              推荐
            </Link>
          </li>
          <li>
            <Link to="/ranking" className={s.secondNavLink}>
              排行榜
            </Link>
          </li>
          <li>
            <Link to="/song" className={s.secondNavLink}>
              歌单
            </Link>
          </li>
          <li>
            <a href="#" className={s.secondNavLink}>
              播客
            </a>
          </li>
          <li>
            <a href="#" className={s.secondNavLink}>
              歌手
            </a>
          </li>
          <li>
            <Link to="/album" className={s.secondNavLink}>
              新蝶上架
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
