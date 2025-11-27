import './local.scss'
const Header = () => {
    return (
        <header className="header">
        <div className="first-header">
            <a href="#">
                <img className="logo" alt="logo" src="img/logos/logo.png"/>
            </a>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li className="main-nav-li-selected">
                        <a href="#" className="main-nav-link main-nav-link-selected">音乐馆</a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-link">我的音乐</a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-link qiangtequan">客户端</a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-link">开发平台</a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-link">VIP</a>
                    </li>
                    <li>
                        <div className="search-box">
                        <input className="search-input" placeholder="搜索、MV、歌单、用户"/>
                        <button className="search-btn">
                            <ion-icon class="search-btn-icon" name="search-outline"></ion-icon>
                        </button>
                        </div>
                    </li>
                    <li>
                        <button className="login-btn">登录</button>
                    </li>
                    <li>
                        <div className="menu-vip">
                            <label className="vip-label">开通VIP
                            <ion-icon class="vip-up-icon" name="caret-up-outline"></ion-icon>
                            <ion-icon class="vip-down-icon" name="caret-down-outline"></ion-icon>
                            </label>
                            <button className="vip-super-btn">开通超级会员</button>
                            <button className="vip-best-btn">开通绿钻豪华版</button>
                        </div>
                    </li>
                    <li>
                        <div className="menu-charge">
                            <label className="charge-label">充值
                            <ion-icon class="charge-up-icon" name="caret-up-outline"></ion-icon>
                            <ion-icon class="charge-down-icon" name="caret-down-outline"></ion-icon>
                            </label>
                            <button className="charge-buy-btn">购买乐币</button>
                            <button className="charge-charge-btn">充值饭票
                            <button className="charge-invoice-btn">开具发票</button>
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
            <hr className="header-hr"/>
            <div className="second-header">
                <ul className="second-nav-list">
                    <li>
                        <a href="#" className="second-nav-link">首页</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">歌手</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">新碟</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">排行榜</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">分类歌单</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">雷达</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">MV</a>
                    </li>
                    <li>
                        <a href="#" className="second-nav-link">数字专辑</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header;