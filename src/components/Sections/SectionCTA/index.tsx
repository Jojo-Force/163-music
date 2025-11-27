import './local.scss'
const SectionCTA = () => {
    return (
        <section className="section-cta" id="cta">
            <div className="container">
                <div className="cta">
                    <div className="cta-text-box">
                        <h2 className="heading-secondary">Get your first meal for free</h2>
                        <p className="cta-text">
                            Healthy, tasty and hassle-free meals are waiting for you. Start
                            eating well today. You can cancel or pause anytime. And the
                            first meal is on us!
                        </p>
                        {/*<!-- 表单元素和div本质一样 -->*/}
                        <form className="cta-form" action="#">
                            <div>
                                {/*<!-- label的for绑定input的id，当点击label自动跳到input输入框 -->*/}
                                {/*<!-- required代表必填项，不填提交会报错 -->*/}
                                <label htmlFor="full-name">Full Name</label>
                                <input
                                    id="full-name"
                                    type="text"
                                    placeholder="John Smith"
                                    name="full-name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="me@example.com"
                                    required
                                    name="email"
                                />
                            </div>

                            {/*<!-- 选择框 -->*/}
                            <div>
                                <label htmlFor="select-where">Where did you hear from us?</label>
                                <select id="select-where" name="select-where" required>
                                    <option value="">Please choose one option:</option>
                                    <option value="friends">Friends and family</option>
                                    <option value="youtube">Youtube video</option>
                                    <option value="podcast">Podcast</option>
                                    <option value="ad">Facebook ad</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            {/*
                                <!-- <input type="checkbox" /> -->
                                <!-- 数字输入框 -->
                                <!-- <input type="number" /> --> */
                            }
                            <button className="btn btn--form">Sign up now</button>
                        </form>
                    </div>
                    {/*<!-- role:指定这是一个图片,aria-label:图片描述 -->*/}
                    <div
                        className="cta-img-box"
                        role="img"
                        aria-label="Woman enjoying food"
                    >
                        Image1
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCTA;