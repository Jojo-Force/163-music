import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useEffect, useRef, useState } from "react";
import PopBox from "./PopBox";
import PageBox from "./PageBox";

const imgsOrigin = [
  {
    imgSrc: "img/recommend/1.jpg",
    songName: "经典粤语合集【无损音质】黑胶唱片会员专属",
    songTime: "9184万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/2.jpg",
    songName: "不得了！这些英文歌的热评信息量好大……",
    songTime: "2590万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/3.jpg",
    songName: "【万评电音】抬头，已是一片星海",
    songTime: "3123万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/4.jpg",
    songName: "杨丞琳聊《无须归还》：爱是一路仁至义尽",
    songTime: "3526",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/5.jpg",
    songName: "【B.G.M.】游戏必备战歌",
    songTime: "4103万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/6.jpg",
    songName: "万倍返还 第001集 这堆圣级功法，勉强够我烧整个冬天",
    songTime: "128万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/7.jpg",
    songName: "假如能回到过去，你想做什么",
    songTime: "2658万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/8.jpg",
    songName: "快乐儿歌《蓝精灵》",
    songTime: "1961万",
    radio: "0",
  },

  {
    imgSrc: "img/recommend/1.jpg",
    songName: "经典粤语合集【无损音质】黑胶唱片会员专属",
    songTime: "9184万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/2.jpg",
    songName: "不得了！这些英文歌的热评信息量好大……",
    songTime: "2590万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/3.jpg",
    songName: "【万评电音】抬头，已是一片星海",
    songTime: "3123万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/4.jpg",
    songName: "杨丞琳聊《无须归还》：爱是一路仁至义尽",
    songTime: "3526",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/5.jpg",
    songName: "【B.G.M.】游戏必备战歌",
    songTime: "4103万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/6.jpg",
    songName: "万倍返还 第001集 这堆圣级功法，勉强够我烧整个冬天",
    songTime: "128万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/7.jpg",
    songName: "假如能回到过去，你想做什么",
    songTime: "2658万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/8.jpg",
    songName: "快乐儿歌《蓝精灵》",
    songTime: "1961万",
    radio: "0",
  },

  {
    imgSrc: "img/recommend/1.jpg",
    songName: "经典粤语合集【无损音质】黑胶唱片会员专属",
    songTime: "9184万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/2.jpg",
    songName: "不得了！这些英文歌的热评信息量好大……",
    songTime: "2590万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/3.jpg",
    songName: "【万评电音】抬头，已是一片星海",
    songTime: "3123万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/4.jpg",
    songName: "杨丞琳聊《无须归还》：爱是一路仁至义尽",
    songTime: "3526",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/5.jpg",
    songName: "【B.G.M.】游戏必备战歌",
    songTime: "4103万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/6.jpg",
    songName: "万倍返还 第001集 这堆圣级功法，勉强够我烧整个冬天",
    songTime: "128万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/7.jpg",
    songName: "假如能回到过去，你想做什么",
    songTime: "2658万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/8.jpg",
    songName: "快乐儿歌《蓝精灵》",
    songTime: "1961万",
    radio: "0",
  },

  {
    imgSrc: "img/recommend/1.jpg",
    songName: "经典粤语合集【无损音质】黑胶唱片会员专属",
    songTime: "9184万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/2.jpg",
    songName: "不得了！这些英文歌的热评信息量好大……",
    songTime: "2590万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/3.jpg",
    songName: "【万评电音】抬头，已是一片星海",
    songTime: "3123万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/4.jpg",
    songName: "杨丞琳聊《无须归还》：爱是一路仁至义尽",
    songTime: "3526",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/5.jpg",
    songName: "【B.G.M.】游戏必备战歌",
    songTime: "4103万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/6.jpg",
    songName: "万倍返还 第001集 这堆圣级功法，勉强够我烧整个冬天",
    songTime: "128万",
    radio: "1",
  },
  {
    imgSrc: "img/recommend/7.jpg",
    songName: "假如能回到过去，你想做什么",
    songTime: "2658万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/8.jpg",
    songName: "快乐儿歌《蓝精灵》",
    songTime: "1961万",
    radio: "0",
  },

  {
    imgSrc: "img/recommend/1.jpg",
    songName: "经典粤语合集【无损音质】黑胶唱片会员专属",
    songTime: "9184万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/2.jpg",
    songName: "不得了！这些英文歌的热评信息量好大……",
    songTime: "2590万",
    radio: "0",
  },
  {
    imgSrc: "img/recommend/2.jpg",
    songName: "不得了！这些英文歌的热评信息量好大……",
    songTime: "2590万",
    radio: "0",
  },
];

const imgs = [...imgsOrigin];

const SectionRecommend = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  const imgBox = useRef<HTMLDivElement>(null);
  const [showPop, setShowPop] = useState(false);

  const onSelectClick = () => {
    if (showPop) {
      setShowPop(false);
    } else {
      setShowPop(true);
    }
  };
  const [page, setPage] = useState(1);
  return (
    <section ref={section} className={s.sectionRecommend}>
      <div className={s.secondLinkFlexbox}>
        <div className={s.secondLinkInnerBox}>
          <h1>全部</h1>
          <a className={s.selectLink} href={"#"} onClick={onSelectClick}>
            <i className={s.selectBtn}>
              选择分类
              <em className={s.selectIcon}></em>
            </i>
          </a>
        </div>
        <button className={s.moreBtn}>热门</button>
      </div>

      <div ref={imgBox} className={s.imgBox}>
        <PopBox showPop={showPop} />
        <div ref={imgBoxSub1} className={s.imgBoxSub1}>
          {imgs.map((img, index) => (
            <FigureBox
              imgSrc={img.imgSrc}
              songName={page + img.songName}
              songTime={img.songTime}
            ></FigureBox>
          ))}
        </div>
      </div>
      <PageBox setPageOut={setPage} />
    </section>
  );
};

export default SectionRecommend;
