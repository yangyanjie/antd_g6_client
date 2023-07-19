import G6 from '@antv/g6'

import {
  SHAPE_NODE_UNICODE_MAP, COLOR_SELECTED_MAP, DS_SHAPES, DS_CYCLE_MAP,
  WORK_FLOW_COLOR_MAP, RECTANGLE_NODE_COLOR_MAP
} from '../../../../constants/ops'
import { SIMPLE_NODE, globalStyle, DS_COLOR_MAP } from '../../constant'
import { fittingString } from '../../utils'

const { nodeStyle, iconfontStyle, labelStyle } = globalStyle
const size = [ 184, 32 ]
const nodeOption = {
  drawShape(cfg, group){
    const { schedulerStatus } = cfg;
    const status = schedulerStatus || 1;
    const { simple_label_color, background_color, simple_cycle_text_color, simple_cycle_background_color } = DS_COLOR_MAP[status]
    const keyShape = this.drawWrapper(cfg, group, background_color);
    this.drawIconBg(cfg, group);
    this.drawIconfont(cfg, group);
    this.drawLabel(cfg, group, simple_label_color);
    this.drawCycle(cfg, group, simple_cycle_text_color, simple_cycle_background_color);
    this.drawFoldFlag(cfg, group);

    return keyShape
  },
  drawWrapper(_, group, color){
    const wrapper = group.addShape('rect', {
      name: 'simple-wrapper',
      draggable: true,
      attrs: {
        width: size[0],
        height: size[1],
        x: -(size[0] / 2),
        y: -(size[1] / 2),
        ...nodeStyle,
        // fill: '#fff',
        fill: color,
        cursor: 'move'
      },
    });
    return wrapper;
  },
  drawIconBg(cfg, group){
    const { runStatus, page, categoryParId }=cfg;
    const fill = page === 'process-define' ?
      WORK_FLOW_COLOR_MAP[RECTANGLE_NODE_COLOR_MAP[categoryParId]] :
      COLOR_SELECTED_MAP[runStatus]

    return group.addShape('rect', {
      name: 'simpleIconBg',
      draggable: true,
      attrs: {
        width: 32,
        height: 32,
        x: -(size[0] / 2),
        y: -(size[1] / 2),
        fill,
        textAlign: 'left',
        radius: [ 2, 0, 0, 2 ],
      }
    })
  },
  drawIconfont(cfg, group){
    const { category } = cfg;
    const text = SHAPE_NODE_UNICODE_MAP[category];

    const iconfont = group.addShape('text', {
      name: 'simpleIconfont',
      draggable: true,
      attrs: {
        x: getIconfontX(category),
        y: 8,
        fontFamily: 'iconfont',
        text,
        textAlign: 'left',
        ...iconfontStyle
      },
    });
    return iconfont;
  },
  drawLabel(cfg, group, color){
    const { total, taskName='' } = cfg;

    const text = fittingString(taskName, size[0] - 80 - (total ? 18 : 0)) || '';
    const label = group.addShape('text', {
      name: 'simpleLabe',
      draggable: true,
      attrs: {
        x: -(size[0] / 2 - 32 - 8),
        y: 1, // y + index * 14,
        text,
        textAlign: 'left',
        textBaseline: 'middle',
        ...labelStyle,
        fill: color
      },
    });

    return label;
  },
  drawFoldFlag(cfg, group){
    const { total, cycle } = cfg;
    const text = DS_CYCLE_MAP[cycle];
    const x = size[0] / 2 - 4 - (text?.length > 1 ? 32 : 20) - 14;
    const y = -(size[1] / 2) + 14;
    if(!total) return ;

    group.addShape('text', {
      attrs: {
        x,
        y,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 10,
        fontFamily: 'iconfont',
        text: '\ue61f',
        fill: '#777',
      },
      name:'icon'
    })
  },
  drawCycle(cfg, group, text_color, background_color){
    const { cycle } = cfg;
    const text = DS_CYCLE_MAP[cycle];
    const width = text?.length > 1 ? 32 : 20;
    const x = size[0] / 2 - 4 - width;
    const y = -(size[1] / 2) + 12;
    group.addShape('rect', {
      attrs: {
        x,
        y,
        width,
        height: 16,
        fill: background_color,
        radius: 2,
      },
      name: 'cycle-bg',
    })
    group.addShape('text', {
      attrs: {
        x: x + 4,
        y: y + 2,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        text,
        fill: text_color
      },
      name:'cycle-text'
    })
  }
}

const getIconfontX = (category) => {
  if ([ DS_SHAPES.STARROCKS ].includes(category)) {
    return -(size[0] / 2 - 3);
  }
  if ([ DS_SHAPES.OFFLINE, DS_SHAPES.LOOP, DS_SHAPES.MERGE, DS_SHAPES.BRANCH ].includes(category)) {
    return -(size[0] / 2 - 8);
  }
  if ([ DS_SHAPES.DDSSQL, DS_SHAPES.VIRTUAL ].includes(category)) {
    return -(size[0] / 2 - 8);
  }

  return -(size[0] / 2 - 6);
}
G6.registerNode(SIMPLE_NODE, nodeOption, 'single-node')