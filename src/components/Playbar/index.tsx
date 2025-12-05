import s from './local.module.scss'
import {useEffect, useState} from "react";
import clsx from "clsx";

const PlayBar = () => {
    const [isLock, setIsLock] = useState(false);
    useEffect(() => {
        setIsLock(false)
    }, []);

    const checkLock = () =>{
        if(isLock){
            setIsLock(false)
        } else {
            setIsLock(true)
        }
        //console.log(isLock)
    }
    return (
        <div className={clsx(s.playBarBox,isLock?s.playBarBoxLock:"")}>
            {/*<a className={clsx(s.topLink,isAtTop ? s.showTop:"")} href="#"></a>*/}
            <div className={s.playBtnBox}>
            <a className={s.prev} href=""></a>
            <a className={s.play} href=""></a>
            <a className={s.next} href=""></a>
            </div>
            <div className={s.defaultAlbumBox}>
                <img className={s.defaultAlbum} src="img/playbar/default_album.jpg" alt="default album"/>
                <a className={s.msk} href="#"></a>
            </div>

            <div className={s.playBox}>
                <span className={s.red}></span>
                <div className={s.words}></div>
                <div className={s.bar}></div>
            </div>
            <span className={s.playTime}>
                <em>00:00</em>
                 / 00:00
            </span>
            <div className={s.shareBox}>
            <a className={s.lyrics} href=""></a>
            <a className={s.collect} href=""></a>
            <a className={s.share} href=""></a>
            </div>

            <div className={s.volumeBox}>
                <a className={s.volume} href=""></a>
                <a className={s.loop} href=""></a>
                <a className={s.playlist} href="">0</a>
                <a className={s.audioQuality} href=""></a>
            </div>

            <div className={s.leftRightBox}>
            <div className={s.left}>
                <a className={clsx(s.leftLink,isLock? s.lock:"")} href="#" onClick={checkLock}></a>
            </div>
            <div className={s.right}>
            </div>
            </div>
        </div>
    )
}

export default PlayBar