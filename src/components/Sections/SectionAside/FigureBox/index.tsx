import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    singerName: string;
    disc: string;
}

const FigureBox = ({imgSrc,singerName,disc}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>
            <div className={s.imgContainer}>
                <img
                    className={s.sectionSingerImg}
                    alt="singer image"
                    src={imgSrc}
                />
            </div>
            <div className={s.singerBox}>
            <p className={s.singerName}>{singerName}</p>
            <p className={s.disc}>{disc}</p>
            </div>
        </figure>
    )
}


export default FigureBox;

