import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useEffect, useRef, useState } from "react";

const imgsOrigin = [
  {
    imgSrc: "img/djradio/recommend/1.jpg",
    songName: "翊个人的江湖- 轻弹浅唱 民谣时光（一）",
    title: "民谣时光",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/2.jpg",
    songName:
      "去北极忘记你？听说下了雪整个宇宙流眼泪（林宥嘉/汪苏泷/陈慧琳/周传雄/莫文蔚/梁咏琪/张栋梁等）",
    title: "千千金曲｜1000首翻唱点评计划",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/3.jpg",
    songName: "回到千禧年：情歌天后梁静茹的“冷门金曲”（1）",
    title: "子劲电台|音乐时空",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/4.jpg",
    songName:
      "Pavement《Summer Babe (Winter Version)》如何成为 indie rock 坐标",
    title: "摇滚群星闪耀时·Ztalk",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/5.jpg",
    songName: "22年前的这些歌正当红",
    title: "依听就爱",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/6.jpg",
    songName: "Beastie Boys《Sabotage》没上榜却改变摇滚史的逆袭密码",
    title: "摇滚群星闪耀时·Ztalk",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/7.jpg",
    songName: "刻进我DNA里的那些动漫旋律",
    title: "多来听听吧",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/8.jpg",
    songName: "在康河的柔波里，我甘心做一条水草 《再别康桥》的回旋和回响（下）",
    title: "一莎一世界",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/9.jpg",
    songName:
      "曾轶可《情绪禁区》：即使身处框架内，也要尽力舞蹈。// 唱作人物志 · 礼崩乐好 #164",
    title: "礼崩乐好 | 华语音乐深度荐歌",
    radio: "0",
  },
  {
    imgSrc: "img/djradio/recommend/10.jpg",
    songName: "夜晚变奏，让音乐接住你未说口的心事",
    title: "大舅的晚安留声机",
    radio: "0",
  },
];

const imgs = [...imgsOrigin];

const SectionRecommend = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  const imgBox = useRef<HTMLDivElement>(null);

  return (
    <section ref={section} className={s.sectionRecommend}>
      <div className={s.secondLinkFlexbox}>
        <div className={s.secondLinkInnerBox}>
          <a className={s.headingLink} href="#">
            热门推荐
          </a>
        </div>
        <button className={s.moreBtn}>{"更多 >"}</button>
      </div>

      <div ref={imgBox} className={s.imgBox}>
        <div ref={imgBoxSub1} className={s.imgBoxSub1}>
          {imgs.map((img, index) => (
            <FigureBox
              imgSrc={img.imgSrc}
              songName={img.songName}
              title={img.title}
              radio={img.radio}
            ></FigureBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionRecommend;
