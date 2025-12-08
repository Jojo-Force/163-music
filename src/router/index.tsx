import Index from "../views/Index";
import Ranking from "../views/Ranking";

// Navigatec重定向组件
// 懒加载的模式需要我们给他添加一个Loading组件
import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Song from "../views/Song";
import Album from "../views/Album";
import Singer from "../views/Singer";
import Page1 from "../components/Sections/Singer/SectionRight/Page1";
import Page2 from "../components/Sections/Singer/SectionRight/Page2";

const routes = [
  // 嵌套路由开始
  {
    path: "/",
    element: <Index />,
    children: [
      { index: true, element: <Home /> },
      { path: "ranking", element: <Ranking /> },
      { path: "song", element: <Song /> },
      { path: "album", element: <Album /> },
      {
        path: "singer",
        element: <Singer />,
        children: [
          { index: true, element: <Page1 /> },
          { path: "signed", element: <Page2 /> },
        ],
      },
    ],
  },
  // 嵌套路由结束
  // 访问其余路径的时候直接跳到首页
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
