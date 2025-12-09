import FigureBox from "./FigureBox";
import s from "./local.module.scss";

interface imgsOrigin {
  imgSrc: string;
  songName: string;
  title: string;
}

interface SectionRadioProp {
  imgs: imgsOrigin[];
  title: string;
}

const SectionRadio = ({ imgs, title }: SectionRadioProp) => {
  return (
    <section className={s.sectionRadio}>
      <div className={s.secondLinkFlexbox}>
        <div className={s.secondLinkInnerBox}>
          <a className={s.headingLink} href="#">
            {title}
          </a>
          <span className={s.dot}>·</span>
          <span>电台</span>
        </div>
        <button className={s.moreBtn}>{"更多 >"}</button>
      </div>

      <div className={s.imgBox}>
        <div className={s.imgBoxSub1}>
          {imgs.map((img, index) => (
            <FigureBox
              imgSrc={img.imgSrc}
              songName={img.songName}
              title={img.title}
            ></FigureBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionRadio;
