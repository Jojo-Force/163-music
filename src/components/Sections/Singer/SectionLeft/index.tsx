import s from "./local.module.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";

const menu = [
  {
    title: "推荐",
    items: [
      {
        name: "推荐歌手",
        link: "/singer",
      },
      {
        name: "入驻歌手",
        link: "/singer/signed",
      },
    ],
  },
  {
    title: "华语",
    items: [
      {
        name: "华语男歌手",
        link: "/",
      },
      {
        name: "华语女歌手",
        link: "/",
      },
      {
        name: "华语组合/乐队",
        link: "/",
      },
    ],
  },
  {
    title: "欧美",
    items: [
      {
        name: "欧美男歌手",
        link: "/",
      },
      {
        name: "欧美女歌手",
        link: "/",
      },
      {
        name: "欧美组合/乐队",
        link: "/",
      },
    ],
  },
  {
    title: "日本",
    items: [
      {
        name: "日本男歌手",
        link: "/",
      },
      {
        name: "日本女歌手",
        link: "/",
      },
      {
        name: "日本组合/乐队",
        link: "/",
      },
    ],
  },
  {
    title: "韩国",
    items: [
      {
        name: "韩国男歌手",
        link: "/",
      },
      {
        name: "韩国女歌手",
        link: "/",
      },
      {
        name: "韩国组合/乐队",
        link: "/",
      },
    ],
  },
  {
    title: "其他",
    items: [
      {
        name: "其他男歌手",
        link: "/",
      },
      {
        name: "其他女歌手",
        link: "/",
      },
      {
        name: "其他组合/乐队",
        link: "/",
      },
    ],
  },
];

const SectionLeft = () => {
  const [group, setGroup] = useState(0);
  const [item, setItem] = useState(0);
  const onClick = (groupIndex: number, itemIndex: number) => {
    setGroup(groupIndex);
    setItem(itemIndex);
  };
  return (
    <>
      <div className={s.sectionLeft}>
        {menu.map((m, groupIndex) => (
          <div className={s.rankingBox}>
            <h2 className={s.heading}>{m.title}</h2>
            <ul className={s.ul}>
              {m.items.map((i, itemIndex) => {
                const isActive = group === groupIndex && item === itemIndex;
                return (
                  <li
                    className={isActive ? s.linkSelected : ""}
                    onClick={() => onClick(groupIndex, itemIndex)}
                  >
                    <Link to={i.link} className={s.link}>
                      {i.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default SectionLeft;
