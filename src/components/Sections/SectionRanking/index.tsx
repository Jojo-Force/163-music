import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import {useRef} from "react";
import clsx from "clsx";

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
                <dd className={s.dd}><span className={s.firstSpan}>1</span><a className={s.songLink} href="#">Zoo (From "Zootopia 2"/Soundtrack Version)</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.secondSpan}>2</span><a className={s.songLink} href="#">桃子</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.thirdSpan}>3</span><a className={s.songLink} href="#">颗秒</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>4</span><a className={s.songLink} href="#">Try Everything</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>5</span><a className={s.songLink} href="#">普通人生</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>6</span><a className={s.songLink} href="#">Zoo (From "Zootopia 2"/Soundtrack Version)</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>7</span><a className={s.songLink} href="#">疯狂动物城2中文版</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>8</span><a className={s.songLink} href="#">盐津-雾-盐津-雾-Yanjin Fog</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>9</span><a className={s.songLink} href="#">可惜你不懂</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={clsx(s.songSpan,s.songSpanTen)}>10</span><a className={s.songLink} href="#">海屿你</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><a className={s.checkMoreLink} href="#">{"查看全部>"}</a></dd>
            </div>

            <div className={s.dtLine}>
                <dt className={s.dt}>
                    <img className={s.dtImg} src='img/ranking/2.jpg' alt="ranking"/>
                    <a className={s.msk} href="#"></a>
                    <div className={s.dtBox}>
                        <a className={s.dtHeading} href="#">新歌榜</a>
                        <a className={s.dtPlay} href="#"></a>
                        <a className={s.dtAdd} href="#"></a>
                    </div>
                </dt>
                <dd className={s.dd}><span className={s.firstSpan}>1</span><a className={s.songLink} href="#">Zoo (From "Zootopia 2"/Soundtrack Version)</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.secondSpan}>2</span><a className={s.songLink} href="#">桃子</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.thirdSpan}>3</span><a className={s.songLink} href="#">颗秒</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>4</span><a className={s.songLink} href="#">Try Everything</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>5</span><a className={s.songLink} href="#">普通人生</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>6</span><a className={s.songLink} href="#">Zoo (From "Zootopia 2"/Soundtrack Version)</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>7</span><a className={s.songLink} href="#">疯狂动物城2中文版</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>8</span><a className={s.songLink} href="#">盐津-雾-盐津-雾-Yanjin Fog</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>9</span><a className={s.songLink} href="#">可惜你不懂</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={clsx(s.songSpan,s.songSpanTen)}>10</span><a className={s.songLink} href="#">海屿你</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><a className={s.checkMoreLink} href="#">{"查看全部>"}</a></dd>
            </div>

            <div className={s.dtLine}>
                <dt className={s.dt}>
                    <img className={s.dtImg} src='img/ranking/3.jpg' alt="ranking"/>
                    <a className={s.msk} href="#"></a>
                    <div className={s.dtBox}>
                        <a className={s.dtHeading} href="#">原创榜</a>
                        <a className={s.dtPlay} href="#"></a>
                        <a className={s.dtAdd} href="#"></a>
                    </div>
                </dt>
                <dd className={s.dd}><span className={s.firstSpan}>1</span><a className={s.songLink} href="#">Zoo (From "Zootopia 2"/Soundtrack Version)</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.secondSpan}>2</span><a className={s.songLink} href="#">桃子</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.thirdSpan}>3</span><a className={s.songLink} href="#">颗秒</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>4</span><a className={s.songLink} href="#">Try Everything</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>5</span><a className={s.songLink} href="#">普通人生</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>6</span><a className={s.songLink} href="#">Zoo (From "Zootopia 2"/Soundtrack Version)</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>7</span><a className={s.songLink} href="#">疯狂动物城2中文版</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>8</span><a className={s.songLink} href="#">盐津-雾-盐津-雾-Yanjin Fog</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={s.songSpan}>9</span><a className={s.songLink} href="#">可惜你不懂</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><span className={clsx(s.songSpan,s.songSpanTen)}>10</span><a className={s.songLink} href="#">海屿你</a>
                    <div className={s.pad}><a className={s.playIcon2} href="#"></a><a className={s.plusIcon2} href="#"></a><a className={s.addIcon2} href="#"></a>
                    </div>
                </dd>
                <dd className={s.dd}><a className={s.checkMoreLink} href="#">{"查看全部>"}</a></dd>
            </div>
        </dl>

    </section>
  );
};

export default SectionRanking;
