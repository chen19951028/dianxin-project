import React from 'react'
import ReactDOM from 'react-dom'

import MediaQuery from 'react-responsive'

import PCIndex from './index/components/pc_index'
import MobileIndex from './index/components/mobile_index'

class root extends React.Component{
    render(){
        return <div> 
                    <MediaQuery query="(min-device-width:1224px)">
                        <PCIndex></PCIndex>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width:1224px)">
                        <MobileIndex></MobileIndex>
                    </MediaQuery>
                    
               </div>
    }
}

ReactDOM.render(
    <Root />,   //渲染谁
    document.getElementById('root')   //渲染到哪
)

//<div id="root"></div>   //根路径，格式固定