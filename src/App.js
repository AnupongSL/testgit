import React, { useState } from 'react'
import UseStateDemo1 from "./components/1.UseState"
import UseStateDemo2 from "./components/2.UseState-Object"
import UseStateDemo3 from "./components/3.UseState-Array"
import UseEffectDemo1 from './components/4.useEffect-Update-init'
import UseEffectDemo2 from './components/5.useEffect-Destroy-Listener'
import UseEffectDemo3 from './components/6.useEffect-setInterval'
import UseEffectDemo4 from './components/7.useEffect-feedJSON-Axios'
import UseContextDemo1 from './components/8.useContext-SharingGlobalValue'
import UseMemoDemo1 from './components/9.useMemo-CachingData'
import UseCallbackDemo1 from './components/10.useCallback'

export default function App() {

  const [isShow, setIsShow] = useState(true)

  return (
    <div style={{ textAlign: "center"}}>
      {/* <UseStateDemo1/> */}
      {/* <UseStateDemo2/> */}
      {/* <UseStateDemo3/> */}
      {/* <UseEffectDemo1/> */}
      {/* {isShow && <UseEffectDemo2/>}
      <button onClick={()=>setIsShow(false)}>Hide</button> */}
      {/* <UseEffectDemo3/> */}
      {/* <UseEffectDemo4/> */}
      {/* <UseContextDemo1/> */}
      {/* <UseMemoDemo1/> */}
      {/* <UseCallbackDemo1/> */}
    </div>
  )
}
