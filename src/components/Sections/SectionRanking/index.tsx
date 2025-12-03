import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import {useRef} from "react";

const imgsOrigin = [
  {
    imgSrc: "img/newcd/1.jpg",
    songName: "自恋是骄傲",
    singerNames: ["新裤子"],
  },
  {
    imgSrc: "img/newcd/2.jpg",
    songName: "没有答案的日子里",
    singerNames: ["傻子与白痴"],
  },
  {
    imgSrc: "img/newcd/3.jpg",
    songName: "TEENAGE RAMBLE",
    singerNames: ["刘柏辛Lexie"],
  },
  {
    imgSrc: "img/newcd/4.jpg",
    songName: "乐透人生GT：即刻入戏",
    singerNames: ["马思唯"],
  },
  {
    imgSrc: "img/newcd/5.jpg",
    songName: "在雨后醒来",
    singerNames: ["艾志恒Asen"],
  },
  {
    imgSrc: "img/newcd/6.jpg",
    songName: "HEART MAID",
    singerNames: ["宣美"],
  },
  {
    imgSrc: "img/newcd/7.jpg",
    songName: "RECOLLECTION, VOL. I - MY Harmonic Minor",
    singerNames: ["杨千嬅"],
  },
  {
    imgSrc: "img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
  {
    imgSrc: "img/newcd/9.jpg",
    songName: "离开银色荒原",
      singerNames: ["裘德"],
  },
    {
        imgSrc: "img/newcd/10.jpg",
        songName: "有且",
        singerNames: ["杨丞琳"],
    }
];

const imgs = [
    imgsOrigin[5],
    imgsOrigin[6],
    imgsOrigin[7],
    imgsOrigin[8],
    imgsOrigin[9],
    ...imgsOrigin,
    imgsOrigin[0],                         // 第一张（放最后）
    imgsOrigin[1],                         // 第一张（放最后）
    imgsOrigin[2],                         // 第一张（放最后）
    imgsOrigin[3],                         // 第一张（放最后）
    imgsOrigin[4],                         // 第一张（放最后）
];

const SectionRanking = () => {
  const section = useRef<HTMLDivElement>(null);


  return (
    <section ref={section} className={s.sectionRanking}>


      <div className={s.secondLinkFlexbox}>
          <a className={s.headingLink} href="#">新碟上架</a>
              <button className={s.moreBtn}>
                  更多<i className={s.moreIcon}></i></button>
      </div>

        <dl className={s.dl}>
            <div className={s.dtLine}>
                <dt className={s.dt}>
                    <img className={s.dtImg} src='img/ranking/1.jpg' alt="ranking"/>
                    <a className={s.msk} href="#"></a>
                    <div className={s.dtBox}>
                        <a className={s.dtHeading} href="#">飙升榜</a>
                        <a className={s.dtPlay} href="#"></a>
                        <a className={s.dtAdd} href="#"></a>
                    </div>
                </dt>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.firstSpan}>1</span>Zoo (From "Zootopia 2"/Soundtrack Version)</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.secondSpan}>2</span>桃子</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.thirdSpan}>3</span>颗秒</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>4</span>Try Everything</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>5</span>普通人生</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>6</span>Zoo (From "Zootopia 2"/Soundtrack Version)</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>7</span>疯狂动物城2中文版</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>8</span>盐津-雾-盐津-雾-Yanjin Fog</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>9</span>可惜你不懂</a></dd>
                <dd className={s.dd}><a className={s.songLink} href="#"><span className={s.songSpan}>10</span>海屿你</a></dd>
                <dd className={s.dd}><a className={s.checkMoreLink} href="#">{"查看全部>"}</a></dd>
            </div>

            {/*<div>*/}
            {/*    <dt>CSS</dt>*/}
            {/*    <dd>层叠样式表，用于控制网页的外观和布局。</dd>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <dt>JavaScript</dt>*/}
            {/*    <dd>一种脚本语言，用于实现网页的交互功能。</dd>*/}
            {/*</div>*/}
        </dl>

    </section>
  );
};

export default SectionRanking;
