import s from './local.module.scss'
import FigureBox from "./FigureBox";
import FigureBox2 from "./FigureBox2";

const singerImgs = [
    {
        imgSrc: "img/aside/singer/1.jpg",
        singerName: "张惠妹aMEI",
        disc: "台湾歌手张惠妹",
    },
    {
        imgSrc: "img/aside/singer/2.jpg",
        singerName: "吴莫愁Momo",
        disc: "《中国好声音》选手吴莫愁",
    },
    {
        imgSrc: "img/aside/singer/3.jpg",
        singerName: "孙楠",
        disc: "歌手孙楠 代表作《你快回来》《燃烧》",
    },
    {
        imgSrc: "img/aside/singer/4.jpg",
        singerName: "麦田老狼",
        disc: "歌手，音乐人。代表作《同桌的你》等。",
    },
    {
        imgSrc: "img/aside/singer/5.jpg",
        singerName: "陈楚生",
        disc: "唱作歌手",
    },
]

const streamerImgs = [
    {
        imgSrc: "img/aside/streamer/1.jpg",
        name: "陈立",
        disc: "心理学家、美食家陈立教授",
    },
    {
        imgSrc: "img/aside/streamer/2.jpg",
        name: "刘维-Julius",
        disc: "歌手、播客节目《维维道来》主理人",
    },
    {
        imgSrc: "img/aside/streamer/3.jpg",
        name: "莫非定律乐团",
        disc: "男女双人全创作独立乐团",
    },
    {
        imgSrc: "img/aside/streamer/4.jpg",
        name: "碎嘴许美达",
        disc: "脱口秀网络红人",
    },
    {
        imgSrc: "img/aside/streamer/5.jpg",
        name: "银临Rachel",
        disc: "",
    },
]

const SectionAside = ()=>{
    return (
        <aside className={s.sectionAside}>
            <div className={s.vipBox}>
                <img className={s.vipCardImg} src={"img/aside/dis_vip_card.png"}/>
                <div className={s.vipInnerBox}>
                <p className={s.vipP}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <button className={s.vipLoginBtn}>用户登录</button>
                </div>
            </div>


            <div className={s.singerList}>
                <div className={s.secondLinkFlexbox}>
                    <a className={s.headingLink} href="#">入驻歌手</a>
                    <button className={s.moreBtn}>{"查看全部 >"}</button>
                </div>
                {singerImgs.map((img,index)=>(
                    <FigureBox
                        imgSrc={img.imgSrc}
                        singerName={img.singerName}
                        disc={img.disc}>
                    </FigureBox>
                ))}
                <a className={s.registerMusicMan}><i>申请成为网易音乐人</i></a>
            </div>

            <div className={s.streamerList}>
                <div className={s.secondLinkFlexbox}>
                    <a className={s.headingLink} href="#">热门主播</a>
                </div>
                {streamerImgs.map((img,index)=>(
                    <FigureBox2
                        imgSrc={img.imgSrc}
                        name={img.name}
                        disc={img.disc}>
                    </FigureBox2>
                ))}
            </div>
        </aside>
    )
}

export default SectionAside;