import s from "../local.module.scss"
import clsx from "clsx";

interface FigureBoxProps {
    imgSrc: string;
    name: string;
    disc: string;
}

const FigureBox2 = ({imgSrc,name,disc}:FigureBoxProps) => {
    return (
        // <figure className={clsx(s.figureOut2,s.figureOut2Selected)}>
        <figure className={clsx(s.figureOut2)}>
            <div className={s.imgContainer}>
                <img
                    className={s.sectionStreamerImg}
                    alt="singer image"
                    src={imgSrc}
                />
            </div>
            <div className={s.streamerBox}>
            <p className={s.streamerName}>{name}</p>
            <p className={s.streamerDisc}>{disc}</p>
            </div>
        </figure>
    )
}


export default FigureBox2;

