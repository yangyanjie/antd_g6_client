import React from 'react'
import { Menu } from 'antd'
import { RANKDIR, INSTANCE_PAGES } from '../constant'

const Rankdir = ({ rankdir, isRankdirMenu, onSetRankdir, setIsRankdirMenu, page }) => {
  if (!isRankdirMenu) return null;

  const handleMenuClick = e=>{
    const { key } = e ||{}

    onSetRankdir(key)
    setIsRankdirMenu(false)
  }

  return (
    <Menu
      onClick={handleMenuClick}
      selectedKeys={[ rankdir ]}
      className={`dag-graph-rankdir-menu ${INSTANCE_PAGES.includes(page) ? 'dag-graph-rankdir-menu_add':''}`}
    >
      {RANKDIR.map(item => {
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
export default Rankdir