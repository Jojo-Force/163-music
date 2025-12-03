import s from "../local.module.scss"

interface FigureBoxProps {
    imgSrc: string;
    songName: string;
    radio: string;
    songTime: string;
}

const FigureBox = ({imgSrc,songName,songTime,radio}:FigureBoxProps) => {
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


            {radio === "0" && <a className={s.songName} href="#">{songName}</a>}
            {radio === "1" && <a className={s.songName} href="#"><i className={s.radioIcon}></i>{" "+songName}</a>}
        </figure>
    )
}


export default FigureBox;

