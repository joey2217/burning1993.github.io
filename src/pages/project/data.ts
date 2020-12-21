export interface Project {
  imgUrl: string;
  name: string;
  tags: string[];
  desc: string;
  demoUrl?: string;
  sourceCodeUrl?: string;
}

export interface ProjectItem {
  year: string;
  projects: Project[];
}

const projectList: ProjectItem[] = [
  {
    year: "2020",
    projects: [
      {
        imgUrl: require('./images/vue-element-admin-plus.jpeg').default,
        name: "VueElementAdminPlus",
        tags: ["Vue3.0", 'ElementPlus'],
        desc: "Vue3 + Element+ 管理系统",
        demoUrl: "https://vue-element-admin-plus.vercel.app/",
        sourceCodeUrl: "https://github.com/BurNing1993/vue-element-admin-plus"
      },
      {
        imgUrl: require('./images/vant-components.jpeg').default,
        name: "VantComponents",
        tags: ["Vue.js", 'Vant'],
        desc: "Vant 的扩展和封装,方便使用",
        demoUrl: "https://www.npmjs.com/package/vant-components",
        sourceCodeUrl: "https://github.com/BurNing1993/vant-components"
      },
    ]
  },
  {
    year: "2019",
    projects: [
      {
        imgUrl: require('./images/vue-print-plugin.jpeg').default,
        name: "VuePrintPlugin",
        tags: ["Vue.js", 'Plugin'],
        desc: "Vue.js打印插件,支持打印特定区域.",
        demoUrl: "https://burning1993.github.io/vue-print-plugin",
        sourceCodeUrl: "https://github.com/BurNing1993/vue-print-plugin"
      },
      {
        imgUrl: require('./images/react-antd-admin.jpeg').default,
        name: "ReactAntdAdmin",
        tags: ["React", 'Antd'],
        desc: "React + Antd 后台管理系统",
        demoUrl: "https://react-antd-admin-green.now.sh/",
        sourceCodeUrl: "https://github.com/BurNing1993/react-antd-admin"
      },
    ]
  }
];
export default projectList;