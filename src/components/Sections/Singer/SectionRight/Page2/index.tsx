import s from "./local.module.scss";
import SectionArtist from "../../SectionArtist";

const imgsOrigin = [
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
        imgSrc: "/img/newcd/9.jpg",
        songName: "离开银色荒原",
        singerNames: ["裘德"],
    },
    {
        imgSrc: "/img/newcd/10.jpg",
        songName: "有且",
        singerNames: ["杨丞琳"],
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
        imgSrc: "/img/newcd/9.jpg",
        songName: "离开银色荒原",
        singerNames: ["裘德"],
    },
    {
        imgSrc: "/img/newcd/10.jpg",
        songName: "有且",
        singerNames: ["杨丞琳"],
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
        imgSrc: "/img/newcd/1.jpg",
        songName: "自恋是骄傲",
        singerNames: ["新裤子"],
    },
    {
        imgSrc: "/img/newcd/5.jpg",
        songName: "在雨后醒来",
        singerNames: ["艾志恒Asen"],
    },
    {
        imgSrc: "/img/newcd/1.jpg",
        songName: "自恋是骄傲",
        singerNames: ["新裤子"],
    },
    {
        imgSrc: "/img/newcd/5.jpg",
        songName: "在雨后醒来",
        singerNames: ["艾志恒Asen"],
    },
    {
        imgSrc: "/img/newcd/1.jpg",
        songName: "自恋是骄傲",
        singerNames: ["新裤子"],
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
        imgSrc: "/img/newcd/9.jpg",
        songName: "离开银色荒原",
        singerNames: ["裘德"],
    },
    {
        imgSrc: "/img/newcd/10.jpg",
        songName: "有且",
        singerNames: ["杨丞琳"],
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
        imgSrc: "/img/newcd/9.jpg",
        songName: "离开银色荒原",
        singerNames: ["裘德"],
    },
    {
        imgSrc: "/img/newcd/10.jpg",
        songName: "有且",
        singerNames: ["杨丞琳"],
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
        imgSrc: "/img/newcd/1.jpg",
        songName: "自恋是骄傲",
        singerNames: ["新裤子"],
    },
    {
        imgSrc: "/img/newcd/5.jpg",
        songName: "在雨后醒来",
        singerNames: ["艾志恒Asen"],
    },
    {
        imgSrc: "/img/newcd/1.jpg",
        songName: "自恋是骄傲",
        singerNames: ["新裤子"],
    },
    {
        imgSrc: "/img/newcd/5.jpg",
        songName: "在雨后醒来",
        singerNames: ["艾志恒Asen"],
    },
    {
        imgSrc: "/img/newcd/1.jpg",
        songName: "自恋是骄傲",
        singerNames: ["新裤子"],
    },
];
const SectionRight = () => {
  return (
    <div className={s.sectionRight}>
      <SectionArtist imgs={imgsOrigin} more={true} title={"入驻歌手"}/>
    </div>
  );
};

export default SectionRight;
