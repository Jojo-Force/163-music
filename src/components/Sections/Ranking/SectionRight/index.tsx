import s from './local.module.scss'

const SectionRight = () =>{
    return (
        <div className={s.sectionRight}>
                <div className={s.head}>
                    <div className={s.headImgBox}>
                    <img className={s.headImg} src="img/rankingpage/heading1.jpg"/>
                    </div>
                    <div className={s.headBox}>
                        <p className={s.title}>新歌榜</p>
                        <p className={s.subTitle}><i className={s.timeIcon}></i>  最近更新：12月05日 <span>（刚刚更新）</span></p>
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

                <div className={s.songHeadingBox}>
                    <span className={s.songHeading}>歌曲列表</span>
                    <span className={s.songHeading2}>100首歌</span>
                    <span className={s.songHeading3}>播放：3162790656次</span>
                </div>
                <table className={s.table}>
                    <thead className={s.thead}>
                        <tr>
                            <th className={s.first}></th>
                            <th><div>标题</div></th>
                            <th><div>时长</div></th>
                            <th><div>歌手</div></th>
                        </tr>
                    </thead>
                    <tbody className={s.tbody}>
                    <tr>
                        <td><div className={s.firstColumn}><span>1</span><span className={s.zeroIcon}></span></div></td>
                        <td><div className={s.secondColumn}><img src={"img/rankingpage/img1"}/><span></span><span></span></div></td>
                        <td>03:10</td>
                        <td><a href='#'>Disney</a>/<a href='#'>Shaakira</a></td>
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
    )
}

export default SectionRight