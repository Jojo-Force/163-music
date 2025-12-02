import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
}

const FigureBox = ({imgSrc}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>
            <div className={s.imgContainer}>
                <img
                    className={s.sectionListImg}
                    alt="song"
                    src={imgSrc}
                />
            </div>
        </figure>
    )
}


export default FigureBox;

