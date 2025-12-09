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
import Page3 from "../components/Sections/Singer/SectionRight/Page3";
import Page4 from "../components/Sections/Singer/SectionRight/Page4";
import Page5 from "../components/Sections/Singer/SectionRight/Page5";
import Page6 from "../components/Sections/Singer/SectionRight/Page6";
import Page7 from "../components/Sections/Singer/SectionRight/Page7";
import Page8 from "../components/Sections/Singer/SectionRight/Page8";
import Page9 from "../components/Sections/Singer/SectionRight/Page9";
import Page10 from "../components/Sections/Singer/SectionRight/Page10";
import Page11 from "../components/Sections/Singer/SectionRight/Page11";
import Page12 from "../components/Sections/Singer/SectionRight/Page12";
import Page13 from "../components/Sections/Singer/SectionRight/Page13";
import Page14 from "../components/Sections/Singer/SectionRight/Page14";
import Page15 from "../components/Sections/Singer/SectionRight/Page15";
import Page16 from "../components/Sections/Singer/SectionRight/Page16";
import Page17 from "../components/Sections/Singer/SectionRight/Page17";
import Djradio from "../views/Djradio";

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
          { path: "cat1", element: <Page3 /> },
          { path: "cat2", element: <Page4 /> },
          { path: "cat3", element: <Page5 /> },
          { path: "cat4", element: <Page6 /> },
          { path: "cat5", element: <Page7 /> },
          { path: "cat6", element: <Page8 /> },
          { path: "cat7", element: <Page9 /> },
          { path: "cat8", element: <Page10 /> },
          { path: "cat9", element: <Page11 /> },
          { path: "cat10", element: <Page12 /> },
          { path: "cat11", element: <Page13 /> },
          { path: "cat12", element: <Page14 /> },
          { path: "cat13", element: <Page15 /> },
          { path: "cat14", element: <Page16 /> },
          { path: "cat15", element: <Page17 /> },
        ],
      },
      { path: "djradio", element: <Djradio /> },
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
