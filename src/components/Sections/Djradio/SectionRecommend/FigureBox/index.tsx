import s from "../local.module.scss";

interface FigureBoxProps {
  imgSrc: string;
  songName: string;
  radio: string;
  title: string;
}

const FigureBox = ({ imgSrc, songName, title, radio }: FigureBoxProps) => {
  return (
    <figure className={s.figureOut}>
      <div className={s.imgContainer}>
        <img className={s.sectionNewCdImg} alt="song" src={imgSrc} />
      </div>
      <a className={s.msk} href="#"></a>
      <div className={s.playBox}>
        <a className={s.songName} href="#">
          {songName}
        </a>
        <a className={s.title} href="#">
          {title}
        </a>
      </div>
      <a className={s.radio} href="#">
        音乐电台
      </a>
    </figure>
  );
};

export default FigureBox;
