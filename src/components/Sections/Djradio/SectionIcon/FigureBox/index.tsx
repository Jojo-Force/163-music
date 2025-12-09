import s from "../local.module.scss";

interface FigureBoxProps {
  imgSrc: string;
  name: string;
}

const FigureBox = ({ imgSrc, name }: FigureBoxProps) => {
  return (
    <div className={s.figureOut}>
      <a className={s.titleName} href="#">
        <div className={s.titleNameBox}>
          <div className={s.imgContainer}>
            <img className={s.imgIcon} src={imgSrc} alt="" />
          </div>
          <em>{name}</em>
        </div>
      </a>
    </div>
  );
};

export default FigureBox;
