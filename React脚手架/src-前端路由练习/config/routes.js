import Timeline from "../pages/Timeline";
import Frontend from "../pages/Timeline/components/Frontend";
import Backend from "../pages/Timeline/components/Backend";
import Pins from "../pages/Pins";
import Following from "../pages/Pins/components/Following";
import Hot from "../pages/Pins/components/Hot";
import Books from "../pages/Books";
import BlockChain from "../pages/Books/components/BlockChain";
import Mobile from "../pages/Books/components/Mobile";
const routes = [
  {
    path: "/timeline",
    component: Timeline,
    name: "首页",
    children: [
      {
        path: "/timeline/frontend",
        component: Frontend,
        name: "前端",
      },
      {
        path: "/timeline/backend",
        component: Backend,
        name: "后端",
      },
    ],
  },
  {
    path: "/pins",
    component: Pins,
    name: "沸点",
    children: [
      {
        path: "/pins/following",
        component: Following,
        name: "关注",
      },
      {
        path: "/pins/hot",
        component: Hot,
        name: "热门",
      },
    ],
  },
  {
    path: "/books",
    component: Books,
    name: "小册",
    children: [
      {
        path: "/books/blockChain",
        component: BlockChain,
        name: "区块链",
      },
      {
        path: "/books/mobile",
        component: Mobile,
        name: "移动开发",
      },
    ],
  },
];

export default routes;
