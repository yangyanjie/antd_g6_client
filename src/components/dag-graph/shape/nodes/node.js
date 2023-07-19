import G6 from '@antv/g6'
import {
  SHAPE_UNICODE_MAP, COLOR_SELECTED_MAP, TIME_ATTRIBUTE_TAG_COLOR_MAP,
  DS_CYCLE_MAP, SHAPE_NODE_UNICODE_MAP, WORK_FLOW_COLOR_MAP, RECTANGLE_NODE_COLOR_MAP, SCHEDULE_STATUS_TEXT } from '../../../../constants/ops'
import { fittingString, hexToRgba } from '../../utils'
import { CARD_NODE, globalStyle, TEXT_COLOR, DS_COLOR_MAP } from '../../constant'

const { nodeStyle } = globalStyle
const TASK_ARR = [ 'cycle-task', 'process-define' ]

const nodeOption = {
  drawShape(cfg, group) {
    const { schedulerStatus, overDue = 0, alone = 1, page, total, runningTotal, successTotal, failTotal } = cfg;
    const status = schedulerStatus || 1;
    const { background_color, title_color, catefoey_title_color, over_due_text_color, over_due_bg_color } = DS_COLOR_MAP[status]
    const shape = this.drawWrap(group, background_color)
    this.drawIconWrap(cfg, group)
    this.drawIcon(cfg, group)
    this.drawTitle(cfg, group, title_color)
    this.drawCategory(cfg, group, catefoey_title_color)
    this.drawOperator(cfg, group)
    this.drawBottomWrap(group)
    if (total) {
      const runningParams = { count: runningTotal, iconNum: 1 }
      const successParams = { count: successTotal, iconNum: 2 }
      const failParams = { count: failTotal, iconNum: 3 }
      const totalParams = { count: total, iconNum: 4 }

      this.drawStatusIcons(group, runningParams)
      this.drawStatusIcons(group, successParams)
      this.drawStatusIcons(group, failParams)
      this.drawStatusIcons(group, totalParams)
    } else {
      this.drawTagWrap(group, background_color)
      TASK_ARR.includes(page) && this.drawLiableName(cfg, group, title_color)
      const overDueLocate = 8;
      const aloneLocate = (overDue&& page!='supplement-instance') ? overDueLocate + 32 + 6 : overDueLocate;
      const attributeLocate = alone ? aloneLocate + 32 + 6 : aloneLocate;
      const attributeText = SCHEDULE_STATUS_TEXT[status];

      const attributeColor = TIME_ATTRIBUTE_TAG_COLOR_MAP[status];

      (overDue && page != 'supplement-instance') &&
      this.drawTag(group, overDueLocate, '失效', over_due_text_color, over_due_bg_color, 'overDue'); // 过期 == 生效，失效
      alone && this.drawTag(group, aloneLocate, '孤立', '#9F8CF1', hexToRgba('#9F8CF1', 0.1), 'alone');//
      this.drawTag(group, attributeLocate, attributeText, attributeColor, hexToRgba(attributeColor, 0.1), 'timeAttribute')
      this.drawDate(cfg, group)
    }

    return shape
  },
  drawWrap(group, color) {
    const r = 4

    const keyShape = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 220,
        height: 88,
        lineWidth: 1,
        ...nodeStyle,
        // fill: '#fff',
        fill: color,
        radius: r,
        cursor: 'move'
      },
      name: 'main-box',
      draggable: true,
    })
    return keyShape
  },
  drawIconWrap(cfg, group) {
    const { runStatus, categoryParId, page } = cfg
    const r = 2
    const fill = TASK_ARR.includes(page) ?
      WORK_FLOW_COLOR_MAP[RECTANGLE_NODE_COLOR_MAP[categoryParId]] : COLOR_SELECTED_MAP[runStatus];

    group.addShape('rect', {
      attrs: {
        x: 8,
        y: 10,
        width: 32,
        height: 32,
        fill,
        radius: r,
      },
      name: 'icon-wrap',
      draggable: true,
    })
  },
  drawIcon(cfg, group) {
    const { runStatus, page, category } = cfg
    let[ fontSize, text, x, y ]=[ 24, SHAPE_UNICODE_MAP[runStatus], 12, 14 ]
    if (TASK_ARR.includes(page)) {
      text = SHAPE_NODE_UNICODE_MAP[category];
      x = (32 - text?.length * 16) / 2 + 8 - 2;
      y = 18;
      fontSize = 16;
    }

    group.addShape('text', {
      attrs: {
        x,
        y,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize,
        fontFamily: 'iconfont',
        text,
        fill: '#fff',
      },
      name:'icon'
    })
  },
  drawTitle(cfg, group, color) {
    const { taskName } = cfg;
    group.addShape('text', {
      attrs: {
        x: 54,
        y: 10,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        text: fittingString(taskName, 130, 12),
        fill: color,
        // fill:  '#202020',
      },
      name:'title'
    })
  },
  drawCategory(cfg, group, color) {
    const { page, categoryTitle, businessName } = cfg
    const text = TASK_ARR.includes(page) ? (businessName || '-') : (categoryTitle || '-')
    group.addShape('text', {
      attrs: {
        x: 54,
        y: 30,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        text: fittingString(text, 140, 12),
        fill: color
        // fill: '#67728C',
      },
      name: 'category'
    })
  },
  drawOperator(cfg, group) {
    const { qualitySessionIds, qualityIds, page } = cfg;
    const isShow = TASK_ARR.includes(page) ? qualityIds : qualitySessionIds;
    if (!isShow) return null;

    group.addShape('text', {
      attrs: {
        x: 200,
        y: 8,
        textBaseline: 'top',
        lineHeight: 12,
        fontSize: 14,
        fontFamily: 'iconfont',
        text: '\ue613',
        fill: '#006BFF',
        cursor: 'pointer',
      },
      name:'operator'
    })
  },
  drawTagWrap(group, color) {
    group.addShape('rect', {
      attrs: {
        x: 1,
        y: 46,
        width: 218,
        height: 16,
        fill: color
      },
      name: 'title-box-date-wrap',
      draggable: true,
    })
  },
  drawTag(group, locate, text, color, bgColor, tag) {
    group.addShape('rect', {
      attrs: {
        x: locate,
        y: 48,
        width: 32,
        height: 18,
        fill: bgColor,
        radius: 2,
      },
      name: `tag-wrap-${tag}`,
    })
    group.addShape('text', {
      attrs: {
        x: locate+4,
        y: 51,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        text,
        fill:  color
      },
      name:`tag-text-${tag}`
    })
  },
  drawLiableName(cfg, group, color) {
    const { liableName } = cfg;
    const text = liableName||''
    const x = 218 - text.length * 12 - 6;

    group.addShape('text', {
      attrs: {
        x,
        y: 50,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        text,
        fill: color
        // fill:  '#939BAE'
      },
      name:'liableName'
    })
  },
  drawBottomWrap(group) {
    group.addShape('rect', {
      attrs: {
        x: 1,
        y: 70,
        width: 218,
        height: 17.5,
        fill: '#FBFCFE',
        radius: [ 0, 0, 4, 4 ]
      },
      name: 'bottom-wrap'
    })
  },
  drawDate(cfg, group) {
    const { cycle, queueTime, page, cron } = cfg;
    const text = `${(TASK_ARR.includes(page) ? cron : queueTime) || '-'}  |  ${DS_CYCLE_MAP[cycle] || '-'}`

    group.addShape('text', {
      attrs: {
        x: 8,
        y: 73,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        text,
        fill:  '#939BAE'
      },
      name:'date'
    })
  },
  drawStatusIcons(group, params) {
    const { count, iconNum } = params;
    const y = 73;
    const x = (iconNum - 1) * 53 + 8;
    const textX = x + 14;
    group.addShape('text', {
      attrs: {
        x, y,
        textBaseline: 'top',
        lineHeight: 24,
        fontSize: 12,
        cursor: 'move',
        fontFamily: 'iconfont',
        text: iconNum==4?'\ue638':SHAPE_UNICODE_MAP[iconNum],
        fill: iconNum==4? COLOR_SELECTED_MAP[8]:COLOR_SELECTED_MAP[iconNum],
      },
      name: `running-icon-${iconNum}`,
    })

    group.addShape('text', {
      attrs: {
        y, x: textX,
        fontSize: 12,
        textBaseline: 'top',
        lineHeight: 24,
        text: `${count}个`,
        fill: TEXT_COLOR.desc,
      },
      name: `running-count-${iconNum}`,
    })
  },
}

G6.registerNode(CARD_NODE, nodeOption, 'single-node')
