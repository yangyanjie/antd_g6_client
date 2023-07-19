import G6 from '@antv/g6'
import { EDGE_COLOR, EDGE_VERTICAL } from '../../constant';
import drawWdgwState from './edge-state'

G6.registerEdge(EDGE_VERTICAL, {
  drawShape(cfg, group) {
    const { startPoint } = cfg;
    const { endPoint } = cfg;
    const endArrow = {
      path: 'M 0,0 L 6,3 L 6,0 L 6,-3 Z',
      fill: EDGE_COLOR.default,
      d: 0,
    };
    let path = [
      [ 'M', startPoint.x, startPoint.y ],
      [ 'L', endPoint.x, endPoint.y ]
    ];

    if (startPoint.x > endPoint.x || startPoint.x < endPoint.x) {
      const Xdiff = endPoint.x - startPoint.x;

      const cpOffset = 8;
      const offset = Xdiff < 0 ? cpOffset : -cpOffset;

      path = [
        [ 'M', startPoint.x, startPoint.y ],
        [ 'L', startPoint.x, (startPoint.y + endPoint.y) / 2 - cpOffset ],
        [ 'Q',
          startPoint.x,
          (startPoint.y + endPoint.y) / 2,
          startPoint.x- offset,
          (startPoint.y + endPoint.y) / 2,
        ],
        [ 'L', endPoint.x + offset, (startPoint.y + endPoint.y) / 2 ],
        [ 'Q',
          endPoint.x,
          (startPoint.y + endPoint.y) / 2,
          endPoint.x,
          (startPoint.y + endPoint.y) / 2+ cpOffset,
        ],
        [ 'L', endPoint.x, endPoint.y ],
      ]
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