// 参数 development- 开发  production- 生产
var env = "development";
var host = env == "development" ? "http://localhost" : "http://localhost";
var port = env == "development" ? "9080" : "9080";

window.BASE_CONF = {
    /****************** 基础配置 **********************/ 
    path: host + ":" + port,        // 接口请求地址
    axios_timeout: 30000,           // ajax 请求超时 30 s
    project_name: "项目管理",

    /**************** Ocr 地址配置 ****************/
    ocr_path: "http://localhost:8888",
    api_name: "/ocrSearch", 
    // 系统支持的 ocr 参数类别
    ocr_support_type: "10200, 10202, 10203, 10100, 10101, 10102, 10103",
    // ocr 类别中 属于行程的
    ocr_travel_type: "10100, 10101, 10102, 10103",
    // ocr 类别中 属于其他的
    ocr_other_type: "10200, 10202, 10203",

    /**************** auth config ******************/ 
    login_times: 2 * 3600 * 1000,       // 登录有效时常 时间戳
    isAuthed: true,                 // 是否开启登录校验 本地校验
    
    /**************** sidebar config ******************/ 
    // 基础路由
    routeApp: '1',
    // 参数作为菜单默认选中的配置，若当前配置则始终按照当前配置为准，若未配置则根据历史记录控制
    defaultSelectedKeys: '1-1' ,  // 初始化展示路由，路由配置文件中对应的id
    defaultOpenKeys: '1-3',       // 展开的二级菜单 配置：menuList 下id
}