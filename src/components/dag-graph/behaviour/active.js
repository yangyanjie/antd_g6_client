import G6 from '@antv/g6';

import { ItemState } from '../constant'

G6.registerBehavior('active-edge', {
  getEvents() {
    return {
      'edge:mouseenter': 'setStates',
      'edge:mouseleave': 'clearStates',
      'edge:mouseout': 'clearStates',
      'node:mouseenter': 'setStates',
      'node:mousemove': 'setStates',
      'node:mouseover': 'setStates',
      'node:mouseleave': 'clearStates',
      'node:mouseout': 'clearStates'
    };
  },
  setStates(ev) {
    const { item } = ev;
    const selected = item.hasState(ItemState.Selected);
    const hover = item.hasState(ItemState.Active);

    if (!selected && !hover) {
      item.setState(ItemState.Active, true);
    }
  },
  clearStates(ev) {
    const { item } = ev;
    const selected = item.hasState(ItemState.Selected)

    if (!selected) {
      item.clearStates(ItemState.Active);
    }
  }
})