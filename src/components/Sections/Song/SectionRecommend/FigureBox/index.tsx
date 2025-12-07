import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    songName: string;
    songTime: string;
}

const FigureBox = ({imgSrc,songName,songTime}:FigureBoxProps) => {
    return (
        <figure className={s.figureOut}>

            <div className={s.imgContainer}>
                <img
                    className={s.sectionNewCdImg}
                    alt="song"
                    src={imgSrc}
                />
                <a className={s.msk} href="#"></a>
                <div className={s.playBox}>
                    <div className={s.playBoxInner}>
                        <i className={s.headsetIcon}></i>
                        <span className={s.playTimes}>{songTime}</span>
                    </div>
                    <i className={s.playIcon}></i>
                </div>
            </div>


            <a className={s.songName} href="#">{songName}</a>
            <div className={s.aname}><span>by</span> <a className={s.songName} href="#">张大佛爷张大佛爷
            </a>
                <img className={s.astar} src={"img/song/star.png"} alt="star"/>
            </div>

        </figure>
    )
}


export default FigureBox;

