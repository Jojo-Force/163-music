import s from "../local.module.scss"

interface songs {
    songName: string;
    singerNames: string[];
}

interface FigureBoxProps {
    img: {
        title: string;
        songs: songs[];
    }
    id:string;
}

const FigureBox = ({img,id}:FigureBoxProps) => {

    return (
        <figure className={s.figureOut} id={id}>
            <div className={s.imgContainer}>
            <p className={s.topTitle}>巅峰榜</p>
            <p className={s.title}>{img.title}</p>
                <hr className={s.hr}/>
                <div className={s.boxBox}>
            {img.songs.map((songsProp:songs,index:number) => (
                <>
                    <div className={s.songBtwnBox}>
                        <span className={s.songSpan}>{index+1}</span>
                    <div>
                <a className={s.songName} href="#">{songsProp.songName}</a>
                <div className={s.singerNames}>
                    {songsProp.singerNames.map((name, index) => (
                        <>
                            <a className={s.singerName} href="#">{name}</a>
                            {index < songsProp.singerNames.length - 1 && <> / </>}
                        </>
                    ))}
                </div>
                    </div>
                    </div>
                </>
            ))}
            </div>
            </div>
        </figure>
    )
}


export default FigureBox;

