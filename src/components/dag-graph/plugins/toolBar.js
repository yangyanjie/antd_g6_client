import G6 from '@antv/g6'
import { renderToString } from 'react-dom/server'
import { MinusOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons'

import { SIMPLE_PAGE, DIAGRAM_TYPES, INSTANCE_PAGES } from '../constant'

const show_go_back = [ 'cycle-task', 'cycle-test', 'cycle-instance', 'supplement-instance', 'process-define', 'process-instance' ]

const toolBar = new G6.ToolBar({
  className:'dag-graph-toolbar',
  getContent: (e) => {
    const { page } = e.cfg;

    const isGoBack = show_go_back.includes(page);

    return `${renderToString(<BaseContent {...e.cfg} isGoBack={isGoBack} />)}`
  },
  handleClick: (code, graph) => {
    graph.emit('zoomBehaviour', { type: code })
  }
});

const Goback = ({ title, isGoBack }) => {
  if (!isGoBack) return null;
  return (
    <ul>
      <li className="title" code="clearDetail">
        <ArrowLeftOutlined />
        <span>{title}</span>
      </li>
    </ul>
  )
}
const BaseContent = (props) => {
  const { isGoBack, title, page, diagramType, rankdir, lineType } = props
  const disabled = diagramType==='original'
  return (
    <div>
      <div className={`tools-wrap ${isGoBack ? '' : 'tools-wrap-not-goback'}`}>
        <Goback isGoBack={isGoBack} title={title} />
        <ul className="tools-wrap_right">
          {
            SIMPLE_PAGE.includes(page) &&
          <>
            <li code="diagramType" className="diagram-type">
              <span>{DIAGRAM_TYPES.find(item=>item.value==diagramType)?.label}</span>
              <DownOutlined />
            </li>
            <li code="rankdir" title="布局切换" className={`${disabled?'disabled':''}`}>
              <i className={`iconfont icon-${rankdir}`} />
            </li>
            <li code="lineType" title="连线切换" className={`${disabled?'disabled':''}`}>
              <i className={`iconfont icon-${lineType}`} />
            </li>
          </>
          }
          <li code="refresh" title="刷新"><i className="iconfont icon-refresh" /></li>
          <li code="plus" title="放大"><i className="uxcfont uxcicon-plus"/></li>
          <li code="minus" title="缩小"><MinusOutlined /></li>
          <li code="adapterView" title="适配屏幕"><i className="iconfont icon-adapt-screen" /></li>
          <li code="clearZoom" title="1:1"><span className="anticon">1:1</span></li>
          {
            INSTANCE_PAGES.includes(page)&&
        <li code="legend" className="legend-icon">
          <span className="icon uxcfont">&#xe6ab;</span>
        </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default toolBar