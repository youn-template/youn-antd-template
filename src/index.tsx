import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App'
// 兼容
import 'core-js/es';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import { HashRouter } from 'react-router-dom'
import 'antd/dist/antd.less'
// iconfont 引入
import 'assets/iconfont/iconfont.css';
import 'assets/styles/index.css';

// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn'

moment.locale('zh-cn');

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
  , document.getElementById('root')
)