import s from './local.module.scss'
import {useEffect, useState} from "react";
import clsx from "clsx";

const Top = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    useEffect(() => {
        const handleScroll = () =>{
            const isTop = window.scrollY <=1;
            setIsAtTop(isTop);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <div className={s.topBox}>
            <a className={clsx(s.topLink,isAtTop ? s.showTop:"")} href="#"></a>
        </div>
    )
}

export default Top