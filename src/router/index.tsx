import Index from "../views/Index";
import Ranking from "../views/Ranking";

// Navigatec重定向组件
// 懒加载的模式需要我们给他添加一个Loading组件
import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Song from "../views/Song";
import Album from "../views/Album";

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
