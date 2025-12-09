import s from "./local.module.scss";
import SectionArtist from "../../SectionArtist";
import SectionNames from "../../SectionNames";

const imgsOrigin = [
  {
    imgSrc: "/img/newcd/1.jpg",
    songName: "自恋是骄傲",
    singerNames: ["林俊杰"],
  },
  {
    imgSrc: "/img/newcd/2.jpg",
    songName: "没有答案的日子里",
    singerNames: ["周杰伦"],
  },
  {
    imgSrc: "/img/newcd/3.jpg",
    songName: "TEENAGE RAMBLE",
    singerNames: ["王力宏"],
  },
  {
    imgSrc: "/img/newcd/4.jpg",
    songName: "乐透人生GT：即刻入戏",
    singerNames: ["马思唯"],
  },
  {
    imgSrc: "/img/newcd/5.jpg",
    songName: "在雨后醒来",
    singerNames: ["艾志恒Asen"],
  },
  {
    imgSrc: "/img/newcd/6.jpg",
    songName: "HEART MAID",
    singerNames: ["宣美"],
  },
  {
    imgSrc: "/img/newcd/7.jpg",
    songName: "RECOLLECTION, VOL. I - MY Harmonic Minor",
    singerNames: ["杨千嬅"],
  },
  {
    imgSrc: "/img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
  {
    imgSrc: "/img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
  {
    imgSrc: "/img/newcd/4.jpg",
    songName: "乐透人生GT：即刻入戏",
    singerNames: ["马思唯"],
  },
  {
    imgSrc: "/img/newcd/4.jpg",
    songName: "乐透人生GT：即刻入戏",
    singerNames: ["马思唯"],
  },
  {
    imgSrc: "/img/newcd/1.jpg",
    songName: "自恋是骄傲",
    singerNames: ["新裤子"],
  },
  {
    imgSrc: "/img/newcd/2.jpg",
    songName: "没有答案的日子里",
    singerNames: ["傻子与白痴"],
  },
  {
    imgSrc: "/img/newcd/3.jpg",
    songName: "TEENAGE RAMBLE",
    singerNames: ["刘柏辛Lexie"],
  },
  {
    imgSrc: "/img/newcd/4.jpg",
    songName: "乐透人生GT：即刻入戏",
    singerNames: ["马思唯"],
  },
  {
    imgSrc: "/img/newcd/5.jpg",
    songName: "在雨后醒来",
    singerNames: ["艾志恒Asen"],
  },
  {
    imgSrc: "/img/newcd/6.jpg",
    songName: "HEART MAID",
    singerNames: ["宣美"],
  },
  {
    imgSrc: "/img/newcd/7.jpg",
    songName: "RECOLLECTION, VOL. I - MY Harmonic Minor",
    singerNames: ["杨千嬅"],
  },
  {
    imgSrc: "/img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
  {
    imgSrc: "/img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
];

const imgsOrigin2 = [
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
  {
    singerNames: ["周杰伦"],
  },
  {
    singerNames: ["王力宏"],
  },
  {
    singerNames: ["陶喆"],
  },
  {
    singerNames: ["许嵩"],
  },
  {
    singerNames: ["五月天"],
  },
];
const SectionRight = () => {
  return (
    <div className={s.sectionRight}>
      <SectionArtist
        imgs={imgsOrigin}
        more={false}
        title={"韩国组合/乐队"}
        atoz={true}
      />
      <SectionNames imgs={imgsOrigin2} />
    </div>
  );
};

export default SectionRight;
