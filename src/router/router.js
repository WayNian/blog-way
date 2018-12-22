import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const staticRoute = [
  {
    path: "/error/404",
    component: () => import("../views/404")
  },
  {
    path: "/",
    component: () => import("../views/Home")
  },
  {
    path: "/",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "one-read",
        component: () => import("../views/OneRead")
      },
      {
        path: "article",
        component: () => import("../views/Article")
      },

      {
        path: "archives",
        component: () => import("../views/Archives")
      },
      {
        path: "tag",
        component: () => import("../views/Tag")
      },
      {
        path: "link",
        component: () => import("../views/Link")
      },
      {
        path: "about",
        component: () => import("../views/About")
      },
      {
        path: "comments",
        component: () => import("../views/Comments")
      }
    ]
  },
  {
    path: "article-info/:id",
    name: "article-info",
    component: () => import("../views/ArticleInfo")
  },
  {
    path: "/login",
    component: () => import("../views/manage/Login")
  },
  {
    path: "/manage",
    component: () => import("../views/manage/Layout"),
    children: [
      {
        path: "dashboard",
        component: () => import("../views/manage/Dashboard")
      },
      {
        path: "create",
        component: () => import("../views/manage/ArticleCreate")
      },
      {
        path: "mManage",
        component: () => import("../views/manage/ArticleManage")
      },
      {
        path: "link",
        component: () => import("../views/manage/LinkManage")
      },
      {
        path: "tag",
        component: () => import("../views/manage/TagManage")
      }
    ]
  },
  {
    path: "*",
    redirect: "/error/404"
  }
];

const router = new Router({
  routes: staticRoute
});

router.beforeEach((to, from, next) => {
  if (to.path.indexOf("/manage") >= 0) {
    next({
      path: "/login",
      replace: true
    });
  } else if (to.path.indexOf("/error") >= 0) {
    next();
  } else {
    next();
  }
});

export default router;
