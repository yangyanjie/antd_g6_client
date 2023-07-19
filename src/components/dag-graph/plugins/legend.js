import React from 'react'
import { Menu } from 'antd'
import { ICON_MAP, RUN_STATUS, COLOR_SELECTED_MAP } from '../../../constants/ops';

const Legend = ({ isLegend, page }) => {
  if (!isLegend) return null;

  return (
    <Menu className="dag-graph-legend-wrap">
      {RUN_STATUS.map(item => {
        if(item.id===-1 && page == 'process-instance') return null
        return (
          <Menu.Item key={item.id} className="legend-item">
            <i
              className={`iconfont icon-${ICON_MAP[item.id]}`}
              style={{ color:`${COLOR_SELECTED_MAP[item.id]}` }}/>
            {item.state}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
export default Legend