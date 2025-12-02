import s from './local.module.scss'
import clsx from 'clsx';
const Header = () => {
    return (
        <header className={s.header}>
        <div className={s.firstHeader}>
            <a href="#">
                <div className={s.logoImg}/>
            </a>
            <nav className={s.mainNav}>
                <ul className={s.mainNavList}>
                    <li className={s.mainNavLi}>
                        <a href="#" className={clsx(s.mainNavLink,s.mainNavLinkSelected)}>发现音乐</a>
                    </li>
                    <li className={s.mainNavLi}>
                        <a href="#" className={s.mainNavLink}>我的音乐</a>
                    </li>
                    <li className={s.mainNavLi}>
                        <a href="#" className={s.mainNavLink}>关注</a>
                    </li>
                    <li className={s.mainNavLi}>
                        <a href="#" className={s.mainNavLink}>商城</a>
                    </li>
                    <li className={s.mainNavLi}>
                        <a href="#" className={s.mainNavLink}>音乐人</a>
                    </li>
                    <li className={s.mainNavLi}>
                        <a href="#" className={s.mainNavLink}>云推歌</a>
                    </li>
                    <li className={s.mainNavLi}>
                        <a href="#" className={s.mainNavLink}>下载客户端</a>
                    </li>
                    <li>
                        <div className={s.searchBox}>
                            <button className={s.searchBtn}>
                                <ion-icon className={s.searchBtnIcon} name="search-outline"></ion-icon>
                            </button>
                            <input className={s.searchInput} placeholder="音乐/视频/电台/用户"/>
                        </div>
                    </li>
                    <li>
                        <a href="#" className={s.createCenter}>创作者中心</a>
                    </li>
                    <li>
                        <a href="#" className={s.login}>登录</a>
                    </li>
                </ul>
            </nav>
        </div>
            <hr className={s.headerHr}/>
            <div className={s.secondHeader}>
                <ul className={s.secondNavList}>
                    <li>
                        <a href="#" className={s.secondNavLink}>首页</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>歌手</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>新碟</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>排行榜</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>分类歌单</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>雷达</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>MV</a>
                    </li>
                    <li>
                        <a href="#" className={s.secondNavLink}>数字专辑</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header;