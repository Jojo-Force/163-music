import s from "../local.module.scss";

interface FigureBoxProps {
  imgSrc: string;
  songName: string;
  title: string;
}

const FigureBox = ({ imgSrc, songName, title }: FigureBoxProps) => {
  return (
    <figure className={s.figureOut}>
      <div className={s.imgContainer}>
        <img className={s.sectionNewCdImg} alt="song" src={imgSrc} />
        <a className={s.msk} href="#"></a>
      </div>

      <div className={s.playBox}>
        <a className={s.songName} href="#">
          {songName}
        </a>
        <a className={s.title} href="#">
          {title}
        </a>
      </div>
    </figure>
  );
};

export default FigureBox;
