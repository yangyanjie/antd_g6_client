import React from 'react'
import { Menu } from 'antd'
import { LINE_TYPES, INSTANCE_PAGES } from '../constant'

const LineTypes = (props) => {
  const { isLineTypeMenu, page, lineType, setIsLineTypeMenu, onSetLineType } = props;

  if (!isLineTypeMenu) return null;

  const handleMenuClick = e=>{
    const { key } = e ||{}

    onSetLineType(key)
    setIsLineTypeMenu(false)
  }

  return (
    <Menu
      onClick={handleMenuClick}
      selectedKeys={[ lineType ]}
      className={`dag-graph-line-type-menu ${INSTANCE_PAGES.includes(page) ? 'dag-graph-line-type-menu':''}`}
    >
      {LINE_TYPES.map(item => {
        return (
          <Menu.Item key={item.id}>
            <i className={`iconfont icon-${item.icon}`} />
            <span>{item.text}</span>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
export default LineTypes