import s from './local.module.scss'
import clsx from "clsx";
const Footer = () => {
    return (

        <footer className={s.footer}>
            <div className={s.containerFooter}>
                <div className={s.logoCol}>
                    <ul className={s.socialLinks}>
                        <li>
                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon1)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>音乐开放平台</span>
                        </li>
                        <li>
                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon2)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>云村交易所</span>
                        </li>
                        <li>

                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon3)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>X StudioAI歌手</span>
                        </li>
                        <li>
                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon4)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>用户认证</span>
                        </li>
                        <li>
                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon5)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>AI 免费写歌</span>
                        </li>
                        <li>
                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon6)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>云推歌</span>
                        </li>
                        <li>
                            <a className={clsx(s.footerLinkIcon,s.footerLinkIcon7)} href="#"
                            >
                            </a>
                            <span className={s.footerSpan}>赞赏</span>
                        </li>
                    </ul>

                </div>
            </div>
            <div className={s.footerBox2}>
                <ul className={s.footerUl2}>
                    <li><a className={s.footerLink2} href="#">服务条款 | </a></li>
                    <li><a className={s.footerLink2} href="#">隐私政策 | </a></li>
                    <li><a className={s.footerLink2} href="#">儿童隐私政策 | </a></li>
                    <li><a className={s.footerLink2} href="#">版权投诉 | </a></li>
                    <li><a className={s.footerLink2} href="#">投资者关系 | </a></li>
                    <li><a className={s.footerLink2} href="#">广告合作 | </a></li>
                    <li><a className={s.footerLink2} href="#">联系我们</a></li>
                </ul>
                <ul className={s.footerUl2}>
                    <li><a className={s.footerLink2} href="#">廉正举报 | </a></li>
                    <li><a className={s.footerLink2} href="#">不良信息举报邮箱: 51jubao@service.netease.com</a></li>
                </ul>
                <ul className={s.footerUl2}>
                    <li><p>互联网宗教信息服务许可证：浙（2022）0000120</p></li>
                    <li><p>增值电信业务经营许可证：浙B2-20150198</p></li>
                    <li><a className={s.footerLink2} href="#">粤B2-20090191-18  浙ICP备15006616号-4  工业和信息化部备案管理系统网站</a></li>
                </ul>
                <ul className={s.footerUl2}>
                    <li>
                        <p className={s.copyright}>
                            网易公司版权所有 &copy; <span className="year">1998 - 2025</span>
                    </p>
                    </li>
                    <li><p>杭州乐读科技有限公司运营：浙网文[2024] 0900-042号</p></li>
                    <li>
                        <a className={s.footerLink3} href="#"> <i className={s.policeIcon}></i>浙公网安备 33010802013307号 </a>
                    </li>
                    <li>
                        <a className={s.footerLink2} href="#"> 算法服务公示信息 </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;