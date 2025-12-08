import s from "./local.module.scss";
import clsx from "clsx";

interface PopBoxProps {
  showPop: boolean;
}
const PopBox = ({ showPop }: PopBoxProps) => {
  return (
    <div className={clsx(s.popBox, showPop ? s.popBoxShow : "")}>
      <i className={s.topIcon}></i>
      <div className={s.head}>
        <a className={s.head__btn} href={"#"}>
          全部风格
        </a>
      </div>
      <div className={s.body}>
        <div className={s.left}>
          <div className={s.left__box}>
            <i className={s.left__box__global}></i>
            <span className={s.left__box_text}>语种</span>
          </div>
          <div className={s.left__box}>
            <i className={s.left__box__style}></i>
            <span className={s.left__box_text}>风格</span>
          </div>
          <div className={s.left__box}>
            <i className={s.left__box__cafe}></i>
            <span className={s.left__box_text}>场景</span>
          </div>
          <div className={s.left__box}>
            <i className={s.left__box__emotion}></i>
            <span className={s.left__box_text}>情感</span>
          </div>
          <div className={s.left__box}>
            <i className={s.left__box__title}></i>
            <span className={s.left__box_text}>主题</span>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.right__box}>
            <a className={s.right__link} href={"#"}>
              华语
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              欧美
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              日语
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              韩语
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              粤语
            </a>
          </div>

          <div className={s.right__box}>
            <a className={s.right__link} href={"#"}>
              流行
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              摇滚
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              民谣
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              电子
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              舞曲
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              说唱
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              轻音乐
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              爵士
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              乡村
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              R&B/Soul
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              古典
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              民族
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              英伦
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              金属
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              朋克
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              蓝调
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              雷鬼
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              世界音乐
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              拉丁
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              New Age
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              古风
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              后摇
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              Bossa Nova
            </a>
            <span>|</span>
          </div>

          <div className={s.right__box}>
            <a className={s.right__link} href={"#"}>
              清晨
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              夜晚
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              学习
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              工作
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              午休
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              下午茶
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              地铁
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              驾车
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              运动
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              旅行
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              散步
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              酒吧
            </a>
          </div>

          <div className={s.right__box}>
            <a className={s.right__link} href={"#"}>
              怀念
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              清新
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              浪漫
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              伤感
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              治愈
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              放松
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              孤独
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              感动
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              兴奋
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              快乐
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              安静
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              思念
            </a>
            <span>|</span>
          </div>

          <div className={s.right__box}>
            <a className={s.right__link} href={"#"}>
              综艺
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              影视原声
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              ACG
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              儿童
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              校园
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              游戏
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              70后
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              80后
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              90后
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              网络歌曲
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              KTV
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              经典
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              翻唱
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              吉他
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              钢琴
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              器乐
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              榜单
            </a>
            <span>|</span>
            <a className={s.right__link} href={"#"}>
              00后
            </a>
            <span>|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBox;
