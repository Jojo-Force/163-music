import s from "./local.module.scss";
import clsx from "clsx";
import { useState } from "react";

interface PageBoxProp {
  setPageOut: (num: number) => void;
}
const PageBox = ({ setPageOut }: PageBoxProp) => {
  const [page, setPage] = useState(1);
  const onPrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
      setPageOut(page - 1);
    }
  };
  const onNextClick = () => {
    if (page < 22) {
      setPage(page + 1);
      setPageOut(page + 1);
    }
  };

  const onClick = (num: number) => {
    setPage(num);
    setPageOut(num);
  };
  return (
    <div className={s.pageBox}>
      <a
        className={clsx(s.prevDisable, page > 1 ? s.prev : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onPrevClick?.(); // 安全调用传入的 onclick
        }}
      >
        上一页
      </a>
      <a
        className={clsx(s.page, page === 1 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(1); // 安全调用传入的 onclick
        }}
      >
        1
      </a>
      <a
        className={clsx(s.page, page === 2 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(2); // 安全调用传入的 onclick
        }}
      >
        2
      </a>
      <a
        className={clsx(s.page, page === 3 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(3); // 安全调用传入的 onclick
        }}
      >
        3
      </a>
      <a
        className={clsx(s.page, page === 4 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(4); // 安全调用传入的 onclick
        }}
      >
        4
      </a>
      <a
        className={clsx(s.page, page === 5 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(5); // 安全调用传入的 onclick
        }}
      >
        5
      </a>
      <a
        className={clsx(s.page, page === 6 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(6); // 安全调用传入的 onclick
        }}
      >
        6
      </a>
      <a
        className={clsx(s.page, page === 7 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(7); // 安全调用传入的 onclick
        }}
      >
        7
      </a>
      <a
        className={clsx(s.page, page === 8 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(8); // 安全调用传入的 onclick
        }}
      >
        8
      </a>
      <span>...</span>
      <a
        className={clsx(s.page, page === 22 ? s.pageSelected : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onClick?.(22); // 安全调用传入的 onclick
        }}
      >
        22
      </a>
      <a
        className={clsx(s.next, page === 22 ? s.nextDisable : "")}
        href={"#"}
        onClick={(e) => {
          e.preventDefault(); // 👈 阻止默认跳转
          onNextClick?.(); // 安全调用传入的 onclick
        }}
      >
        下一页
      </a>
    </div>
  );
};

export default PageBox;
