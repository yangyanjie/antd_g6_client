export const CARD_NODE = 'cardNode';
export const SIMPLE_NODE ='simpleNode'
export const EDGE_VERTICAL = 'likePolyLineVertical';
export const EDGE_HORIZONTAL = 'likePolyLineHorizontal';
export const ItemState = {
  Active: 'hover',
  Selected: 'selecte'
};

export const TEXT_COLOR = {
  title: '#202020',
  desc: '#67728C',
  default:'#fff'
}

export const EDGE_COLOR = {
  default: '#BDC6D3',
  selected: '#006BFF'
}

export const BACKGROUND_COLOR = '#fff'

export const globalStyle = {
  // 节点样式
  nodeStyle: {
    stroke: 'transparent',
    fill: '#fff',
    lineWidth: 1,
    cursor: 'default',
    shadowOffsetX: 0,
    shadowOffsetY: 3,
    shadowBlur: 9,
    shadowColor: 'rgba(103, 114, 140, 0.15)', // '#67728C',
    radius: 2,
  },
  iconfontStyle: {
    fontSize: 16,
    fontFamily: 'iconfont',
    fill: '#fff',
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 12,
    fill: '#2F3440',
    cursor: 'move',
  },
  edgeStyle: {
    stroke: EDGE_COLOR.default,
    lineWidth: 1,
    lineAppendWidth: 5,
    endArrow: {
      path: 'M 0,0 L 6,3 L 6,0 L 6,-3 Z',
      d: 0,
      fill: EDGE_COLOR.default,
    },
    cursor: 'default',
  },
  // 鼠标悬浮边
  edgeActivedStyle: {
    stroke: EDGE_COLOR.selected,
    lineWidth: 1,
    cursor: 'grab',
    lineAppendWidth: 5,
    endArrow: {
      // path: 'M 0,0 L -6,-3 L -6,3 Z',
      path: 'M 0,0 L 6,3 L 6,0 L 6,-3 Z',
      d: 0,
      fill: EDGE_COLOR.selected,
    },
    // strokeOpacity: 0.92,
  },
  edgeTargetHighlight: {
    stroke: 'rgba(0, 107, 255, 0.6)',
    fill: 'rgba(243, 247, 255, 0.6)',
  },
  edgeSourceHighlight: {
    stroke: 'rgba(0, 107, 255, 0.6)',
    fill: 'rgba(243, 247, 255, 0.6)',
  },
  // 箭头半径
  arrowRadius: 6,
  endArrow: {
    // path: 'M 0,0 L -6,-3 L -6,3 Z',
    path: 'M 0,0 L 6,3 L 6,0 L 6,-3 Z',
    d: 0,
    fill: '#8F98AB',
  }
}
export const NODE_STATE_STYLES = {
  [ItemState.Selected]: {
    stroke: '#006BFF',
    // fill: '#F2F7FF',
    // 'title-box-date-wrap': { fill: '#F2F7FF' },
    'bottom-wrap': { fill: '#F2F7FF' },
  },
  [ItemState.Active]: { stroke: '#006BFF' }
};
export const EDGE_STATE_STYLES = {
  [ItemState.Selected]: {
    ...globalStyle.edgeActivedStyle
  }
}

export const SIMPLE_PAGE = [ 'process-define', 'process-instance' ]

export const INSTANCE_PAGES = [ 'cycle-instance', 'supplement-instance', 'cycle-test', 'manual-instance', 'process-instance' ]
export const DIAGRAM_MAP = {
  original :'original',
  simple:'simple',
  detail:'detail'
}
export const DIAGRAM_TYPES = [
  {
    value:DIAGRAM_MAP.original,
    label:'开发原图'
  },
  {
    value:DIAGRAM_MAP.simple,
    label:'简略图'
  },
  {
    value:DIAGRAM_MAP.detail,
    label:'详细图'
  },
]
export const RANKDIR_MAP = {
  horizontal:'horizontal',
  vertical:'vertical'
}
export const RANKDIR = [
  {
    text:'横向',
    icon:RANKDIR_MAP.horizontal,
    id:RANKDIR_MAP.horizontal,
  },
  {
    text:'纵向',
    icon:RANKDIR_MAP.vertical,
    id:RANKDIR_MAP.vertical,
  }
]

export const LINE_MAP = {
  straight:'line',
  cubic:'cubic',
  polylineTB:EDGE_VERTICAL,
  polylineLR:EDGE_HORIZONTAL
}
export const LINE_TYPES = [
  {
    id:'straight',
    text:'直线',
    icon:'straight'
  },
  {
    id:'cubic',
    text:'曲线',
    icon:'cubic'
  },
  {
    id:'polyline',
    text:'三折线',
    icon:'polyline'
  },
]


const color_map_1 = {
  background_color: '#fff',
  title_color: '#202020',
  select_background_color: '#F2F7FF',
  catefoey_title_color: '#67728C',
  over_due_text_color: '#777777',
  over_due_bg_color: 'rgba(119,119, 119, 0.1)',
  simple_label_color: '#2F3400',
  simple_cycle_text_color: '#006BFF',
  simple_cycle_background_color: 'rgba(119,119, 119, 0.1)'
}
const color_map_2 = {
  background_color: '#C8F1AC',
  title_color: '#202020',
  catefoey_title_color: '#67728C',
  over_due_text_color: '#777777',
  over_due_bg_color: 'rgba(119,119, 119, 0.1)',
  simple_label_color: '#2F3400',
  simple_cycle_text_color: '#006BFF',
  simple_cycle_background_color: 'rgba(119,119, 119, 0.1)'
}
const color_map_3 = {
  background_color: '#9BA7BA',
  title_color: '#fff',
  catefoey_title_color: '#fff',
  over_due_text_color: '#EDEFF3',
  over_due_bg_color: 'rgba(255, 255, 255, 0.1)',
  simple_label_color: '#fff',
  simple_cycle_text_color: '#fff',
  simple_cycle_background_color: 'rgba(255, 255, 255, 0.1)'
}

export const DS_COLOR_MAP = {
  1: color_map_1,
  2: color_map_2,
  3: color_map_3
}



