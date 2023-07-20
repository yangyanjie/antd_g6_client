import G6 from '@antv/g6'

const getBytesLength = (str) => {
  let byteLen = 0;
  if (str) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      if (str.charCodeAt(i) > 255) {
        byteLen += 2;
      } else {
        byteLen++;
      }
    }
    return byteLen;
  }
  return 0;
}

G6.registerCombo(
  'complexCombo',
  {
    drawWrapper(cfg, group) {
      const padding = cfg.padding || [0, 0, 0, 0];
      const style = this.getShapeStyle(cfg);
      const wrapper = group.addShape('rect', {
        attrs: {
          ...style,
          x: 65 - padding[0],
          y: -150 - padding[3],
          width: 320,
          height: 110,
          fill: '#fff',
          radius: [2, 4]
        },
        name: 'combo-keyShape',
      })
      return wrapper;
    },
    drawComplexCombo(cfg, group) {
      const { page } = cfg;
      const padding = cfg.padding || [0, 0, 0, 0];
      const l = getBytesLength(page);
      const w = l * 6;
      // 画外部的包容容器；
      group.addShape('rect', {
        attrs: {
          x: -160,
          y: -65,
          width: 320,
          height: 110,
          fill: 'red',
          stroke: '',
          radius: [10,10]
        },
        name: 'complex-rect'
      })
      // 增加右翻
      group.addShape('text', {
        attrs: {
          x: 150-padding[1],
          y: -30-padding[0] + 10,
          text: '\ue69e',
          fontFamily: 'iconfont',
          fontSize: 10,
          textAlign: 'left',
          textBaseline: 'top',
          fontWeight: 400,
          fill: '#000'
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'combo-right-flip',
      });
      // 增加页码
      group.addShape('text', {
        attrs: {
          x: 150-padding[1]-w-2,
          y: -30-padding[0] + 10,
          width: w,
          text: page,
          textAlign: 'left',
          textBaseline: 'top',
          fontWeight: 400,
          fill: 'green'
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'combo-page-number',
      });
      //左侧翻页
      group.addShape('text', {
        attrs: {
          x: 150-padding[1]-w - 16,
          y: -30-padding[0] + 10,
          text: '\ue6d0',
          fontFamily: 'iconfont',
          fontSize: 10,
          textAlign: 'left',
          textBaseline: 'top',
          fontWeight: 400,
          fill: '#000'
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'combo-left-flip',
      });
      // 排序
      group.addShape('text', {
        attrs: {
          x: 150-padding[1]-w - 28,
          y: -30-padding[0] + 12,
          text: '\ue636',
          fontFamily: 'iconfont',
          fontSize: 9,
          textAlign: 'left',
          textBaseline: 'top',
          fontWeight: 400,
          fill: '#000'
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'combo-sort',
      });
      // 收起折叠
      group.addShape('text', {
        attrs: {
          x: 150-padding[1]-w -28,
          y: -30-padding[0] + 12,
          width: 12,
          height: 12,
          text: '\ue61e',
          fontSize: 8,
          fontFamily: 'iconfont',
          textAlign: 'left',
          textBaseline: 'top',
          fontWeight: 400,
          fill: '#000'
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'combo-collapse-expand',
      });

    },
    drawSimpleCombo(cfg, group) {
      const padding = cfg.padding || [0, 0, 0, 0];
      const style = this.getShapeStyle(cfg);
      group.addShape('rect', {
        attrs: {
          x: -100 + padding[3],
          y: -15 - padding[0],
          width: 200,
          height: 30,
          fill: '#fff',
          stroke: 'orange',
          radius: [4, 4]
        },
        name: 'combo-simple-rect'
      })
      group.addShape('text', {
        attrs: {
          x: -100 + padding[3] + 6,
          y: - 32,
          text: cfg.nodeLabel,
          fill: "#000",
          textBaseline: 'top',
          textAlign: 'left'
        },
        name: 'combo-simple-text'
      })
    },
    drawShape: function drawShape(cfg, group) {
      const keyShape = this.drawWrapper(cfg, group);
      this.drawComplexCombo(cfg, group);
      this.drawSimpleCombo(cfg, group);
      return keyShape;
    },
    changeComboCollapseexpand(cfg, combo) {
      const { page } = cfg;
      const padding = cfg.padding || [0, 0, 0, 0];
      const style = this.getShapeStyle(cfg);
      const l = getBytesLength(page);
      const w = l * 6;
      const group = combo.get('group');
      const comboKeyShape = group.find((ele) => ele.get('name') === 'combo-keyShape');
      console.log(comboKeyShape.getBBox(), 1234)
      const comboCollapseExpand = group.find((ele) => ele.get('name') === 'combo-collapse-expand'); // // 修改展开折叠按钮
      const position = cfg.collapsed ? 
      { 
        x: 100 - padding[1], 
        y: -15 -padding[0] + 10
      } 
      : { 
        x: 150-padding[1]-w -40,
        y: -30-padding[0] + 12, 
      }
      comboCollapseExpand.attr({
        ...position,
        text: cfg.collapsed ? '\ue61f': '\ue61e',
        textBaseline: 'top',
      })
      const wAndh = cfg.collapsed? {
        width: 220,
        height: 90
      }: {
        width: 320,
        height:110
      }

      comboKeyShape.attr({
        ...wAndh
      })
      console.log(wAndh, comboKeyShape, 99)

    },
    changeToolBar(cfg, combo) {
      const { collapseLabel, expandLabel, collapsed } = cfg;
      // 修改标签
      combo.getModel().label = collapsed ? collapseLabel : expandLabel;
      this.changeShapeVisible(combo, 'combo-sort', collapsed);
      this.changeShapeVisible(combo, 'combo-left-flip', collapsed);
      this.changeShapeVisible(combo, 'combo-page-number', collapsed);
      this.changeShapeVisible(combo, 'combo-right-flip', collapsed);
    },
    changeShapeVisible(combo, name, collapsed) {
      const group = combo.get('group');
      const shape = group.find((ele) => ele.get('name') === name);
      shape.set('visible', !collapsed)
    },
    changeSimpleCombo(cfg, combo) {
      const { collapsed } = cfg;
      const padding = cfg.padding || [0, 0, 0, 0];
      const style = this.getShapeStyle(cfg);
      const group = combo.get('group');
      const comboSimpleRect = group.find((ele) => ele.get('name') === 'combo-simple-rect');
      const comboSimpleText = group.find((ele) => ele.get('name') === 'combo-simple-text');
      comboSimpleRect.attr({
        x: -100,
        y: -10,
        width: 200,
        height: 30,
        fill: '#fff',
        stroke: 'orange',
        radius: [4, 4]
      })

      comboSimpleText.attr({
        x: -100 + padding[3] + 6,
        y: 0,
        text: cfg.nodeLabel,
        fill: "#000",
        textBaseline: 'top',
        textAlign: 'left'
      })
      this.changeShapeVisible(combo, 'combo-simple-rect', !collapsed);
      this.changeShapeVisible(combo, 'combo-simple-text', !collapsed);
    },
    // 定义新增的右侧圆的位置更新逻辑
    afterUpdate: function afterUpdate(cfg, combo) {
      this.changeComboCollapseexpand(cfg, combo);
      this.changeToolBar(cfg, combo);
      this.changeSimpleCombo(cfg, combo);
    },
  },
  'rect',
);