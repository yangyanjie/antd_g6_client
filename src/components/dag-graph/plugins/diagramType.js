import React from 'react'
import { Menu } from 'antd'
import { DIAGRAM_TYPES, INSTANCE_PAGES } from '../constant'

const DiagramTypes = (props) => {
  const { isDiagram, diagramType, setIsDiagram, onSetDiagramType, page } = props

  if (!isDiagram) return null;

  const handleMenuClick = e=>{
    const { key } = e ||{}

    onSetDiagramType(key)
    setIsDiagram(false)
  }
  return (
    <Menu
      selectedKeys={[ diagramType ]}
      className={`dag-graph-diagram-menu ${INSTANCE_PAGES.includes(page) ? 'dag-graph-diagram-menu_add':''}`}
      onClick={handleMenuClick}>
      {DIAGRAM_TYPES.map(item => {
        return (
          <Menu.Item key={item.value}>
            {item.label}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
export default DiagramTypes