import s from './local.module.scss'

const SectionRight = () =>{
    return (
        <div className={s.sectionRight}>
            <div >
                <div className={s.head}>
                    <div className={s.headImgBox}>
                    <img className={s.headImg} src="img/rankingpage/heading1.jpg"/>
                    </div>
                    <div className={s.headBox}>
                        <p className={s.title}>新歌榜</p>
                        <p className={s.subTitle}><i className={s.timeIcon}></i>最近更新：12月05日 <span>（刚刚更新）</span></p>
                        <div className={s.headBox2}>
                            <a className={s.playIcon}><i><em></em>播放</i></a>
                            <a className={s.plusIcon}></a>
                            <a className={s.addIcon}><i>(2790692)</i></a>
                            <a className={s.shareIcon}><i>(13884)</i></a>
                            <a className={s.downloadIcon}><i>下载</i></a>
                            <a className={s.commentIcon}><i>(157248)</i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <span>歌曲留白</span><span>100首歌</span><span>播放：3162790656次</span>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>城市</th>
                        <th>职业</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>张三</td>
                        <td>28</td>
                        <td>北京</td>
                        <td>工程师</td>
                    </tr>
                    <tr>
                        <td>李四</td>
                        <td>34</td>
                        <td>上海</td>
                        <td>设计师</td>
                    </tr>
                    <tr>
                        <td>王五</td>
                        <td>22</td>
                        <td>广州</td>
                        <td>学生</td>
                    </tr>
                    <tr>
                        <td>赵六</td>
                        <td>45</td>
                        <td>深圳</td>
                        <td>经理</td>
                    </tr>
                    <tr>
                        <td>孙七</td>
                        <td>31</td>
                        <td>杭州</td>
                        <td>产品经理</td>
                    </tr>
                    </tbody>
                </table>

                <div>
                    <div>
                        <span>评论</span> <span>共157248条评论</span>
                    </div>
                    <div>
                        <img/>
                        <input></input>
                    </div>
                    <div>
                        <div>
                            <a></a>
                            <a></a>
                        </div>
                        <div>
                            <span></span>
                            <a></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p><span></span></p>
                </div>
                <a></a>
            </div>

        </div>
    )
}

export default SectionRight