var menuList = [
  { 
    "id": "001", 
    "path": "/dashboard", 
    "icon": "iconhome1", 
    "name": "主页" 
  }, { 
    "id": "002", 
    "path": "/jzbz", 
    "icon": "iconaspjiesuan", 
    "name": "集中报账", 
    "children": [
      { "id": "002001", "path": "/jzbz/expenseAccount", "name": "报销单提交图"},
      { "id": "002002", "path": "/jzbz/sendOrders", "name": "派单图"}
    ]
  }, { 
    "id": "003", 
    "path": "/intelligentFilling",
    "icon": "iconshengyijing", 
    "name": "智能填报" ,
    "children": [
      { "id": "003001", "path": "/bzgl/zntb", "name": "智能填报"},
      { "id": "003002", "path": "/intelligentFilling/businessTravel", "name": "差旅报销"},
      { "id": "003003", "path": "/intelligentFilling/requisition", "name": "出差申请单"},
      { "id": "003004", "path": "/intelligentFilling/requisitionTemplate", "name": "出差申请单模版下载"},
    ]
  }, {
    "id": "004", 
    "path": "/sys-config", 
    "icon": "icontool-hardware", 
    "name": "基础参数配置", 
    "children": [
      { "id": "004001", "path": "/config/createNumber", "name": "自增编号配置" },
      { "id": "004002", "path": "/config/treeSet", "name": "树集维护" },
      { "id": "004003", "path": "/config/codeSet", "name": "值集维护" },
      { "id": "004004", "path": "/config/setTimer", "name": "定时器管理" },
      { "id": "004005", "path": "/config/taskMonitor", "name": "定时任务监控" },
      { "id": "004006", "path": "/config/scenes", "name": "场景设置" }
    ]
  }, {
    "id": "005", 
    "path": "/custom-search", 
    "icon": "icontool-hardware", 
    "name": "自定义查询", 
    "children": [
      { "id": "005001", "path": "/config/datasource", "name": "数据源" },
      { "id": "005002", "path": "/config/group", "name": "组" },
      { "id": "005003", "path": "/config/search", "name": "查询定义" }
    ]
  },{
    "id": "050", 
    "path": "/config", 
    "icon": "icontool-hardware", 
    "name": "系统管理", 
    "children": [
      { "id": "050001", "path": "/config/roleGroup", "name": "角色组" },
      { "id": "050002", "path": "/config/role", "name": "角色" },
      { "id": "050003", "path": "/config/permission", "name": "权限管理" },
    ]
  }, {
    "id": "100", 
    "path": "/template", 
    "icon": "iconSimilarproducts-fill", 
    "name": "功能模版", 
    "children": [
      {"id": "100001", "path": "/template/searchTable", "name": "表格查询模版"},
      {"id": "100002", "path": "/template/test", "name": "测试"}
    ]
  }
]

/** ******************************************************************************************
 *  ******************************注意：不允许使用单引号 “'” *************************************
 *  ******************************************************************************************
 *  当前菜单的控制，  
 *  当前菜单在 base.conf.js 中通过配置 routeApp 控制显示那个模快的菜单，
 *  设置初中考虑 基于模版不变的情况下进行功能整体切换，（预留之后考虑并完善）
 *  基于当前菜单切换 考虑点：1、api 和 app 的拆分，  2、功能项目系统、功能管理系统 拆分
 * id:        必选 - 当前行的标识，菜单默认选中，及二级菜单默认展开的指定行
 * path:      必选 - 路由导航的路径
 * name:      必选 - 当前菜单展示的中文
 * icon:      可选 - 路由菜单的图标，当前仅对一级路由有效
 * component: 可选 - 当前路由针对功能的绝对地址，路径文件已配置到src下，并且功能项目功能要求放到views下，所以默认为 views/.../**
 * children:  可选 - 子菜单功能推荐最多使用到三级
 * **/
// 基础路由配置文件，当前参数不允许修改，路由参数补充在上面 menuList 参数列表中维护
window.ROUTE_CONF = [
  { id: "1", path: "/", icon: "", component: "", name: "app", children: menuList },
  { id: "991", path: "/login", icon: "", component: "", name: "登录" },
  { id: "999", path: "/404", icon: "", component: "", name: "异常报警" },
]