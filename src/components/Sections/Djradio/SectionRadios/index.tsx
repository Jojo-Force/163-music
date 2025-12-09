import SectionRadio from "../SectionRadio";

const imgsOrigin = [
  {
    title: "音乐播客",
    imgs: [
      {
        imgSrc: "img/djradio/radio/1.jpg",
        songName: "民谣时光",
        title: "跟随翟翊，一同走进民谣的发展脉络",
      },
      {
        imgSrc: "img/djradio/radio/2.jpg",
        songName: "杨丞琳·有且",
        title: "跟随@杨丞琳的播客，遇见独一无二的自己",
      },
      {
        imgSrc: "img/djradio/radio/3.jpg",
        songName: "希音海绵",
        title: "跟着金曲歌后孙盛希，吸纳世界好音乐~",
      },
      {
        imgSrc: "img/djradio/radio/4.jpg",
        songName: "音乐默班车",
        title: "一起乘坐这趟穿越深夜的「默班车」",
      },
    ],
  },
  {
    title: "生活",
    imgs: [
      {
        imgSrc: "img/djradio/radio/5.jpg",
        songName: "海鸥公园",
        title: "第一视角沉浸式“听”世界！",
      },
      {
        imgSrc: "img/djradio/radio/6.jpg",
        songName: "徐徐的",
        title: "NHK制作人带你一起领略日本生活方式",
      },
      {
        imgSrc: "img/djradio/radio/7.jpg",
        songName: "河童打扰了！",
        title: "一档超有趣的日本生活方式播客",
      },
      {
        imgSrc: "img/djradio/radio/8.jpg",
        songName: "世界好好吃",
        title: "世界各地的都市丽人都爱吃",
      },
    ],
  },
  //
  {
    title: "情感",
    imgs: [
      {
        imgSrc: "img/djradio/radio/9.jpg",
        songName: "你，静不下来",
        title: "李静的播客",
      },
      {
        imgSrc: "img/djradio/radio/10.jpg",
        songName: "大宇的小宇宙",
        title: "没有华丽剧本，只有真诚唠嗑",
      },
      {
        imgSrc: "img/djradio/radio/11.jpg",
        songName: "非典型sisters| 大厂不卷指南！",
        title: "超酷的姐姐和她的朋友关于职场，自我成长的探索",
      },
      {
        imgSrc: "img/djradio/radio/12.jpg",
        songName: "爱的表达式",
        title: "和你一起面对情感、成长等人生每一个命题",
      },
    ],
  },

  {
    title: "情感",
    imgs: [
      {
        imgSrc: "img/djradio/radio/13.jpg",
        songName: "沉浸式流金电台丨治愈时刻",
        title: "沉浸式氛围空间",
      },
      {
        imgSrc: "img/djradio/radio/14.jpg",
        songName: "爱抽烟屁的彦祖",
        title: "让小哥哥的迷人低音炮治愈你",
      },
      {
        imgSrc: "img/djradio/radio/15.jpg",
        songName: "顔人中的隔壁小窝",
        title: "住在你家隔壁，吵闹的唱歌男孩",
      },
      {
        imgSrc: "img/djradio/radio/16.jpg",
        songName: "王巨星的电台",
        title: "你一定会爱上的惊艳男声翻唱",
      },
    ],
  },

  {
    title: "知识",
    imgs: [
      {
        imgSrc: "img/djradio/radio/17.jpg",
        songName: "陈平眉山论剑",
        title: "跨界碰撞，新思锐见！",
      },
      {
        imgSrc: "img/djradio/radio/18.jpg",
        songName: "罗永浩的十字路口",
        title: "罗永浩的播客",
      },
      {
        imgSrc: "img/djradio/radio/19.jpg",
        songName: "寻欢作乐 play pray love",
        title: "跟两位时髦女性一起轻松聊天",
      },
      {
        imgSrc: "img/djradio/radio/20.jpg",
        songName: "自然选择NaturalSelection",
        title: "听资深科普人聊聊问AI得不到答案的问题",
      },
    ],
  },
];

const SectionRadios = () => {
  return (
    <>
      {imgsOrigin.map((item, index) => (
        <SectionRadio imgs={item.imgs} title={item.title} />
      ))}
    </>
  );
};

export default SectionRadios;
