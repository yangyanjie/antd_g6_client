import React, { useRef, useEffect, useState } from 'react'
import G6 from '@antv/g6'

import './shape/edges/edge-vertical'
import './shape/edges/edge-horizontal'
import './shape/nodes/simple-node'
import './shape/nodes/node'
import './shape/combos/complex-combo'
import './behaviour'

import { isFunction } from 'lodash'
// import { isFunction } from 'utils'
import { toolBar, Legend, DiagramTypes, Rankdir, LineTypes } from './plugins'
import {
  CARD_NODE, SIMPLE_NODE, globalStyle, LINE_MAP,
  DIAGRAM_MAP, RANKDIR_MAP, NODE_STATE_STYLES } from './constant'
import { getInitialData } from './utils';
import { comboData } from '../../data/initData';

import './style.less'

const initData = {
  __graph: null,
  scale: 1,
  scaleStep: 0.1,
  data: {},
  errorCallback: null
}

function bind(context, func) {
  return (...props) => func.call(context, ...props)
}

const DagGraph = (props) => {
  const ref = useRef(null)

  const {
    initialData, rowId, diagramType, page, rankdir, lineType,
    updateData:_updateData, onSetDiagramType, onSetRankdir, onSetLineType } = props
  const [ nodeModel, setNodeModel ] = useState({ id: rowId })
  const [ isLegend, setIslegend ] = useState(false)
  const [ isDiagram, setIsDiagram ] = useState(false)
  const [ isRankdirMenu, setIsRankdirMenu ] = useState(false)
  const [ isLineTypeMenu, setIsLineTypeMenu ]= useState(false)

  const handleSetNodeModel = (item) => {
    setNodeModel(item);
  }

  props = {
    ...props, nodeId: nodeModel.id, handleSetNodeModel, setIslegend, setIsDiagram, setIsRankdirMenu, setIsLineTypeMenu }

  useEffect(() => {
    init(props, ref)

    return () => {
      initData.__graph && initData.__graph.clear()
    }
  }, [])

  // useEffect(()=>{
  //   const resetProps = { lineType, page, rankdir, diagramType }
  //   _updateData(initialData, resetProps)
  // }, [ initialData, lineType, rankdir, diagramType ])
  useEffect(() => {
    defaultSelectedNode({ handleSetNodeModel, rowId: nodeModel.id })
  }, [ nodeModel, initialData ])

  return (
    <div ref={ref} id="dagGraphMountNode">
      <Legend isLegend={isLegend} page={page}/>
      <DiagramTypes
        page={page}
        isDiagram={isDiagram}
        diagramType={diagramType}
        setIsDiagram={setIsDiagram}
        onSetDiagramType={onSetDiagramType}
      />
      <Rankdir
        page={page}
        rankdir={rankdir}
        isRankdirMenu={isRankdirMenu}
        onSetRankdir={onSetRankdir}
        setIsRankdirMenu={setIsRankdirMenu}
      />
      <LineTypes
        page={page}
        lineType={lineType}
        isLineTypeMenu={isLineTypeMenu}
        onSetLineType={onSetLineType}
        setIsLineTypeMenu={setIsLineTypeMenu}
      />
    </div>
  )
}

export default DagGraph

DagGraph.create = create

function create({ mapPropsToGraph } = {}) {
  const _graph = { ...initData }
  _graph.zoom = bind(_graph, zoom)

  const graph = {
    getGraphDecorator: bind(_graph, getGraphDecorator),
  }

  return (WrappedComponent) => {
    return class extends React.Component {
      constructor(props) {
        super(props)
        if (isFunction(mapPropsToGraph)) {
          _graph.data = mapPropsToGraph(props)
        }
      }

      render() {
        return <WrappedComponent {...this.props} graph={graph} />
      }
    }
  }
}

function getGraphDecorator(graphDecorator) {
  const {
    status, initialData, onDbClickNode, onContextMenu, onRefresh, rowId, onGetDetailData, onQualityData,
    onDetail, onUpdateTopoStatus, onCardState, page, title, diagramType, lineType, rankdir,
    onSetDiagramType, onSetRankdir, onSetLineType } = graphDecorator //  onClickNode,

  const _child = { lineType, rankdir, status, rowId, page, title, diagramType }
  onRefresh && Object.assign(_child, { onRefresh: bind(this, onRefresh) })
  onDbClickNode && Object.assign(_child, { onDbClickNode: bind(this, onDbClickNode) })
  onCardState && Object.assign(_child, { onCardState: bind(this, onCardState) })
  onGetDetailData && Object.assign(_child, { onGetDetailData: bind(this, onGetDetailData) })
  onUpdateTopoStatus && Object.assign(_child, { onUpdateTopoStatus: bind(this, onUpdateTopoStatus) })
  onDetail && Object.assign(_child, { onDetail: bind(this, onDetail) })
  onContextMenu && Object.assign(_child, { onContextMenu: bind(this, onContextMenu) })
  onQualityData && Object.assign(_child, { onQualityData: bind(this, onQualityData) })
  onSetDiagramType && Object.assign(_child, { onSetDiagramType: bind(this, onSetDiagramType) })
  onSetRankdir && Object.assign(_child, { onSetRankdir: bind(this, onSetRankdir) })
  onSetLineType && Object.assign(_child, { onSetLineType: bind(this, onSetLineType) })

  return (GraphComponent) => React.Children.map(GraphComponent,
    (child) => React.cloneElement(child, {
      initialData,
      init: bind(this, init),
      zoomIn: bind(this, zoomIn),
      zoomOut: bind(this, zoomOut),
      fitView: bind(this, fitView),
      clearZoom: bind(this, clearZoom),
      updateData: bind(this, updateData),
      ..._child
    })
  )
}

function init(props, ref) {
  const { initialData, page, title, diagramType, rankdir, lineType } = props
  const extraConfig=extraGraphConfig({ page, diagramType, lineType, rankdir });
  const wrapper = document.querySelector('#dagGraphMountNode')
  const { width = 700, height = 700 } = ref.current?.getBoundingClientRect();
  initData.__graph = new G6.Graph({
    // renderer: 'svg',
    container: 'dagGraphMountNode',
    height,
    width,
    page,
    title,
    rankdir,
    lineType,
    diagramType,
    plugins: [ toolBar ],
    modes: {
      default: [
        // { type: 'drag-canvas', allowDragOnItem: true }, // 可拖拽
        'zoom-canvas', // 可缩放
        'active-edge',
        'click-selected',
        'drag-combo'
      ],
    },
    fitCenter: true,
    ...extraConfig
  })
  initData.__graph.data(getInitialData(initialData || initData.data))
  initData.__graph.render();
  // initData.center = initData.__graph.getViewPortCenterPoint()
  contextMenuEvent(initData.__graph, props)
  // onBehaviour(initData.__graph, props)
  // defaultSelectedNode(props)

  // resizeWraper(initData.__graph, wrapper)
}

function extraGraphConfig(params) {
  const { edgeType } =nodeEdgeLayoutParams(params)

  const defaultEdge = {
    type: edgeType,
    style: {
      ...globalStyle.edgeStyle,
      endArrow: {
        ...globalStyle.endArrow
      }
    },
  }
  const defaultCombo = {
    type: 'complexCombo',
    anchorPoints: [
      [0.5, 1],
      [0.5, 0],
    ],
    // fixSize: [320, 110],
    fixCollapseSize: [200, 30],
    labelCfg: {
      /* label's offset to the keyShape */
      // refY: 10,
      /* label's position, options: center, top, bottom, left, right */
      position: 'top',
      /* label's style */
      style: {
        fontSize: 14,
      },
    },

  }
  return {
    layout: {
      type: 'comboCombined',
      sortByCombo: true,
      onLayoutEnd: () => {   // 可选
        console.log('combo force layout done');
      },
      innerLayout: new G6.Layout['grid']({
        // width: 300,
        beign: [0, 0],
        rows: 3,// 行
        cols: 10,// 列,列优先于行
        // beign: [0, 0], // 网格布局开始的位置
        preventOverlap: true, // 是否防止重叠
        nodeSize: 30,
        preventOverlapPadding: 20,
        condense: true,
        style: {
          fill: 'red'
        }
  
      }),
      outerLayout: new G6.Layout['dagre']({
        rankdir: 'TB',
        begin: [50, 50],
        nodesep: 80,
        ranksep: 50,
      })
    },
    nodeStateStyles:NODE_STATE_STYLES,
    defaultEdge,
    defaultCombo,
    defaultNode: {
      type:CARD_NODE,
      anchorPoints: [
        [ 0.5, 1 ],
        [ 0.5, 0 ],
      ],
      page: 'process-define',
    },
  }
}

function contextMenuEvent(graph, props) {
  const { onContextMenu, initialData } = props

  graph.on('node:contextmenu', evt => {
    evt.preventDefault()
    const { canvasX, canvasY, item } = evt
    const itemModel=item?.getModel() || {}

    onContextMenu && onContextMenu({ show: true, ...itemModel, x: canvasX, y: canvasY })
  })
  graph.on('combo:click', (e) => {
    console.log(graph, 888)
    const target = e.target.get('name');
    if (target === 'combo-collapse-expand') {// 展开折叠combo
      graph.collapseExpandCombo(e.item);
      if (graph.get('layout')) {
        graph.layout()
      } else graph.refreshPositions();
    }
    if (target === 'combo-right-flip') {// 翻页
      Object.assign(initialData, {combos: [ comboData ]});
      graph.changeData(getInitialData(initialData));
    }
  })
}

function defaultSelectedNode(props) {
  const { rowId, handleSetNodeModel } = props
  const graph = initData.__graph

  if (!rowId || !graph) return

  const item = graph.findById(rowId)
  const model = item?.getModel()

  if (!model) return
  handleSetNodeModel(model)
  graph.setItemState(item, 'selecte', true)
}

// function onBehaviour(graph, props) {
//   // eslint-disable-next-line no-shadow
//   const { fitView, clearZoom, zoomIn, zoomOut, handleSetNodeModel, onQualityData,
//     onCardState, onContextMenu, setIslegend, diagramType, setIsDiagram,
//     setIsRankdirMenu, setIsLineTypeMenu, onGetDetailData, onUpdateTopoStatus, onDetail } = props
//   graph.on('nodeClick', e => {
//     const { model = {} } = e;
//     const { total } = model;
//     if (total && diagramType !==DIAGRAM_MAP.original) {
//       onCardState('down')
//       return;
//     };

//     handleSetNodeModel(model)
//     onGetDetailData(model)
//     onContextMenu && onContextMenu({ show: false })
//   })
//   graph.on('canvasClick', () => {
//     onContextMenu && onContextMenu({ show: false })
//     onCardState('down')
//   })
//   graph.on('zoomBehaviour', e => {
//     const { type } = e
//     setIsDiagram(false)
//     setIslegend(false)
//     setIsRankdirMenu(false)
//     setIsLineTypeMenu(false)

//     type == 'plus' && zoomIn();
//     type == 'minus' && zoomOut();
//     type == 'adapterView' && fitView();
//     type == 'clearZoom' && clearZoom();
//     type === 'legend' && setIslegend(prevLegend => !prevLegend);
//     type ==='clearDetail' && onDetail({ show:false })
//     type === 'diagramType' && setIsDiagram(prevLegend => !prevLegend);
//     type === 'rankdir' && diagramType !==DIAGRAM_MAP.original && setIsRankdirMenu(prevRankdir => !prevRankdir);
//     type === 'lineType' && diagramType !==DIAGRAM_MAP.original && setIsLineTypeMenu(prevRankdir => !prevRankdir);

//     if (type == 'refresh') {
//       onUpdateTopoStatus && onUpdateTopoStatus()
//       fitView()
//       clearZoom()
//     }
//   })
//   graph.on('nodeDbClick', (e) => {
//     const { model } = e;
//     const { total } = model;
//     if (total && diagramType !== DIAGRAM_MAP.original) return onCardState('down')

//     onCardState('')
//     handleSetNodeModel(model)
//     onGetDetailData(model)
//   })
//   graph.on('operator:mouseenter', e => {
//     const { canvasX, canvasY, item } = e
//     const itemModel = item?.getModel() || {}
//     onQualityData && onQualityData({ show:true, ...itemModel, x:canvasX, y:canvasY, })
//   })
//   graph.on('operator:mouseleave', () => {
//     onQualityData && onQualityData({ show:false })
//   })
// }

// 缩放控制
function zoom(scale) {
  const { center, __graph: graph } = initData
  if (!graph) return
  graph.zoomTo(scale, center)
  initData.scale = graph.getZoom()
}
function zoomIn() {
  this.scale += this.scaleStep
  this.zoom(this.scale)
}
function zoomOut() {
  this.scale -= this.scaleStep
  this.zoom(this.scale)
}
function clearZoom() {
  this.scale = 1
  this.zoom(this.scale)
}
function fitView() {
  const graph = initData.__graph
  if (!graph) return
  graph.fitView()
  this.scale = graph.getZoom()
}
function updateData(data, resetParams) {
  const graph = initData.__graph
  if (!graph) return
  const { page, lineType, rankdir, diagramType } = resetParams
  const processPages =[ 'process-define', 'process-instance' ]

  if(processPages.includes(page) && diagramType !== DIAGRAM_MAP.original){
    const rankdirParams ={ graph, rankdir, diagramType, page, lineType }
    const edgeParams ={ graph, lineType, rankdir, diagramType }

    updateEdge(edgeParams)
    updateRankdir(rankdirParams)
  }

  graph.data(data)
  graph.render()
}
function updateEdge(params) {
  const { graph } = params
  const { edgeType } = nodeEdgeLayoutParams(params)

  graph.edge((edge) => {
    return {
      id: edge.id,
      type: edgeType,
      style: {
        ...globalStyle.edgeStyle,
        endArrow: {
          ...globalStyle.endArrow
        }
      },
    };
  });
}
function setSpace(params) {
  const { diagramType, rankdir } = params
  if(diagramType == DIAGRAM_MAP.detail){
    if(rankdir === RANKDIR_MAP.vertical){
      return { ranksep: 30, nodesep: 80 }
    }
    return { ranksep: 80, nodesep: 30 }
  }
  if(rankdir === RANKDIR_MAP.vertical){
    return { ranksep:20, nodesep:60 }
  }
  return { ranksep:70, nodesep:20 }

}
function nodeEdgeLayoutParams(params) {
  const { lineType = 'polyline', rankdir = 'vertical', diagramType } = params
  const nodeType = diagramType === DIAGRAM_MAP.simple? SIMPLE_NODE: CARD_NODE
  const anchorPoints = RANKDIR_MAP.horizontal == rankdir?[ [ 0, 0.5 ], [ 1, 0.5 ] ]: [ [ 0.5, 1 ], [ 0.5, 0 ] ]
  const _rankdir = RANKDIR_MAP.horizontal == rankdir ? 'LR' : 'TB'
  const _lineType = lineType ==='polyline' ?`${lineType}${_rankdir}`:lineType
  const edgeType = LINE_MAP[_lineType] || 'line'

  return { anchorPoints, _rankdir, edgeType, nodeType }
}
function updateRankdir(params) {
  const { graph, rankdir, diagramType, page } = params
  const { nodeType, anchorPoints, _rankdir } = nodeEdgeLayoutParams(params)
  const sep = setSpace({ diagramType, rankdir })

  graph.node((node) => {
    return {
      id: node.id,
      type:nodeType,
      anchorPoints,
      page,
    };
  })
  graph.updateLayout({
    type: 'dagre',
    rankdir:_rankdir,
    ...sep
  })
}

function resizeWraper(graph, wraper) {
  const robserver= new ResizeObserver(entries => {
    entries.forEach((entry) => {
      const { clientWidth, clientHeight } = entry.target;
      graph.changeSize(clientWidth, clientHeight)
    })
  });
  robserver.observe(wraper)
}
