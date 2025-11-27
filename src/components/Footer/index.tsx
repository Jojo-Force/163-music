import './local.scss'
const Footer = () => {
    return (

        <footer className="footer">
            <div className="container grid grid--5-cols grid--footer">
                <div className="logo-col">
                    <a href="#" className="footer-logo">
                        <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png"/>
                    </a>

                    <ul className="social-links">
                        <li>
                            <a className="footer-link" href="#"
                            >
                                <ion-icon class="social-icon" name="logo-instagram"></ion-icon
                                >
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="#"
                            >
                                <ion-icon class="social-icon" name="logo-facebook"></ion-icon
                                >
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="#"
                            >
                                <ion-icon class="social-icon" name="logo-twitter"></ion-icon
                                >
                            </a>
                        </li>
                    </ul>
                    <p className="copyright">
                        Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
                        All rights reserved
                    </p>
                </div>
                <div className="address-col">
                    <p className="footer-heading">Contact us</p>
                    {/*{<!-- 用来表示地址的元素 -->}*/}
                    <address className="contacts">
                        <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                        <p>
                            {/*{<!-- 直接打开facetime打电话 -->}*/}
                            <a className="footer-link" href="tel:415-201-6370">415-201-6370 </a
                            ><br/>
                            {/*{<!-- 直接打开mail软件发邮件 -->}*/}
                            <a className="footer-link" href="mailto:hello@omnifood.com"
                            >hello@omnifood.com"</a
                            >
                        </p>
                    </address>
                </div>
                <nav className="nav-col">
                    <p className="footer-heading">Account</p>
                    <ul className="footer-nav">
                        <li><a className="footer-link" href="#">Create account</a></li>
                        <li><a className="footer-link" href="#">Sign in</a></li>
                        <li><a className="footer-link" href="#">IOS app</a></li>
                        <li><a className="footer-link" href="#">Android app</a></li>
                    </ul>
                </nav>
                <nav className="nav-col">
                    <p className="footer-heading">Company</p>
                    <ul className="footer-nav">
                        <li><a className="footer-link" href="#">About Omnifood</a></li>
                        <li><a className="footer-link" href="#">For Business</a></li>
                        <li><a className="footer-link" href="#">Cooking partners</a></li>
                        <li><a className="footer-link" href="#">Careers</a></li>
                    </ul>
                </nav>

                <nav className="nav-col">
                    <p className="footer-heading">Resources</p>
                    <ul className="footer-nav">
                        <li><a className="footer-link" href="#">Recipe directory</a></li>
                        <li><a className="footer-link" href="#">Help center</a></li>
                        <li>
                            <a className="footer-link" href="#">Privacy & the-new-york-times</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;