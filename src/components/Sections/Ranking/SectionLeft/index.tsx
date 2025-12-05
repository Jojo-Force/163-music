import s from './local.module.scss'
import FigureBox2 from "./FigureBox2";

const streamerImgs = [
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "飙升榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "新歌榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "原创榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "热歌榜",
        disc: "更新19首",
    },
]

const streamerImgs2 = [
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/1.jpg",
        name: "网易云中文说唱榜",
        disc: "更新13首",
    },
    {
        imgSrc: "img/rankingpage/2.jpg",
        name: "网易云古典榜",
        disc: "每周四更新",
    },
    {
        imgSrc: "img/rankingpage/3.jpg",
        name: "网易云电音榜",
        disc: "刚刚更新",
    },
    {
        imgSrc: "img/rankingpage/4.jpg",
        name: "网易云全球说唱榜",
        disc: "刚刚更新",
    },
]
const SectionLeft = () =>{
    return (
        <div className={s.sectionLeft}>
            <div className={s.rankingBox}>
                <h2 className={s.heading}>云音乐特色榜</h2>
                {streamerImgs.map((img,index)=>(
                    <FigureBox2
                        imgSrc={img.imgSrc}
                        name={img.name}
                        disc={img.disc}>
                    </FigureBox2>
                ))}
            </div>
            <div className={s.rankingBox}>
                <h2 className={s.heading}>全球媒体榜</h2>
                {streamerImgs2.map((img,index)=>(
                    <FigureBox2
                        imgSrc={img.imgSrc}
                        name={img.name}
                        disc={img.disc}>
                    </FigureBox2>
                ))}
            </div>
        </div>
    )
}

export default SectionLeft