import { ItemState, EDGE_COLOR } from '../../constant'

export default (name, value, item)=>{
  const keyShape = item.getKeyShape();
  const { attrs } = keyShape;
  const { endArrow } = attrs;

  if ((name == ItemState.Selected||name == ItemState.Active) && value) {
    Object.assign(endArrow, { fill: EDGE_COLOR.selected })

    keyShape.attr({
      ...attrs,
      endArrow,
      stroke: EDGE_COLOR.selected,
    })
  } else {
    Object.assign(endArrow, { fill: EDGE_COLOR.default })

    keyShape.attr({
      ...attrs,
      endArrow,
      stroke: EDGE_COLOR.default,
    })
  }
}