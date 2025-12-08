import s from "../local.module.scss";

interface FigureBoxProps {
  imgSrc: string;
  singerName: string;
}

const FigureBox = ({ imgSrc, singerName }: FigureBoxProps) => {
  return (
    <figure className={s.figureOut}>
      <div className={s.imgContainer}>
        <img className={s.sectionImg} alt="song" src={imgSrc} />
        <a className={s.msk} href="#"></a>
      </div>
      <div className={s.singerBox}>
        <a className={s.singerName} href={"#"}>{singerName}</a>
        <a className={s.link} href="#"></a>
      </div>
    </figure>
  );
};

export default FigureBox;
