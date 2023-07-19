import G6 from '@antv/g6'
import { EDGE_COLOR, EDGE_HORIZONTAL } from '../../constant';
import drawWdgwState from './edge-state'

G6.registerEdge(EDGE_HORIZONTAL, {
  drawShape(cfg, group) {
    const { startPoint, endPoint } = cfg;
    const endArrow = {
      path: 'M 0,0 L 6,3 L 6,0 L 6,-3 Z',
      fill: EDGE_COLOR.default,
      d: 0,
    };

    const Ydiff = endPoint.y - startPoint.y;

    const cpOffset = 8;
    const offset = Ydiff < 0 ? cpOffset : -cpOffset;

    let path = [
      [ 'M', startPoint.x, startPoint.y ],
      [ 'L', (startPoint.x + endPoint.x) / 2 - cpOffset, startPoint.y ],
      [ 'Q',
        (startPoint.x + endPoint.x) / 2,
        startPoint.y,
        (startPoint.x + endPoint.x) / 2,
        startPoint.y- offset,
      ],
      [ 'L', (startPoint.x + endPoint.x) / 2, endPoint.y + offset ],
      [ 'Q',
        (startPoint.x + endPoint.x) / 2,
        endPoint.y,
        (startPoint.x + endPoint.x) / 2+ cpOffset,
        endPoint.y,
      ],
      [ 'L', endPoint.x, endPoint.y ],
    ];

    if (Math.abs(Ydiff) <= 5) {
      path = [
        [ 'M', startPoint.x, startPoint.y ],
        [ 'L', endPoint.x, endPoint.y ],
      ];
    }
    const shape=group.addShape('path', {
      attrs: {
        lineWidth: 1,
        lineAppendWidth: 5,
        stroke: EDGE_COLOR.default,
        endArrow,
        path
      }
    })
    return shape;
  },
  setState(name, value, item) {
    drawWdgwState(name, value, item)
  }
})