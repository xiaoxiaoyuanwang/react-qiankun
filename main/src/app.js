// import React, { useState, useRef } from 'react';
// export default function useQiankunStateForSlave() {
  //   const [globalState, setGlobalState] = useState({});
  
  //   return {
    //     globalState,
    //     setGlobalState,
    //   }
    // }
// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = new Promise((resolve,reject)=>{
  resolve([
    {
      name: 'app1',
      entry: 'http://192.168.1.119:8001',
      activeRule: '/app1'
    },
    {
      name: 'app2',
      entry: 'http://192.168.1.119:8002',
      activeRule: '/app2'
    },
  ])
})
.then(apps => ({
  apps,
  fetch: url => {
    console.log('静态资源fetch覆盖')
    return fetch(url)
  }
}));