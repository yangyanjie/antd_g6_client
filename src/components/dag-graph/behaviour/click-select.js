import G6 from '@antv/g6'

import { ItemState } from '../constant'
import { executeBatch } from '../utils';

G6.registerBehavior('click-selected', {
  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'node:dblclick': 'handleNodeDbClick',
      'edge:click': 'handleEdgeClick',
      'canvas:click': 'handleCanvasClick'
    };
  },

  handleNodeClick(ev) {
    const { graph } = this;
    const { item } = ev;
    const edgeItems = item.getInEdges() || [];
    const sonEdgeItems = item.getOutEdges() || [];
    const model = item.getModel();

    graph.emit('nodeClick', { model })

    this.clearSelectedState();
    this.findParents(edgeItems);
    this.findSons(sonEdgeItems);

    graph.setItemState(item, ItemState.Active, false);
    graph.setItemState(item, ItemState.Selected, true);
  },

  handleEdgeClick(e) {
    const { item } = e;
    const { graph } = this;

    this.clearSelectedState();

    item.toFront();
    graph.setItemState(item, ItemState.Selected, true);
  },

  handleCanvasClick() {
    const { graph } = this;

    this.clearSelectedState();
    graph.emit('canvasClick');
  },

  handleNodeDbClick(e) {
    const { graph } = this;

    const { item } = e;
    const model = item.getModel();

    graph.emit('nodeDbClick', { model });
  },

  clearSelectedState(shouldUpdate = () => true) {
    const { graph } = this;

    const selectedNodes = graph.findAllByState('node', ItemState.Selected);
    const selectedEdges = graph.findAllByState('edge', ItemState.Selected);

    executeBatch(graph, () => {
      [ ...selectedNodes, ...selectedEdges ].forEach(item => {
        if (shouldUpdate(item)) {
          graph.setItemState(item, ItemState.Selected, false);
          graph.setItemState(item, ItemState.Active, false);
        }
      })
    });
  },

  findParents(edgeItems) {
    const { graph } = this;

    edgeItems.length &&
    edgeItems.forEach((edgeItem) => {
      edgeItem.toFront();
      graph.setItemState(edgeItem, ItemState.Selected, true);
    })
  },

  findSons(edgeItems) {
    const { graph } = this;

    edgeItems.length &&
      edgeItems.forEach((edgeItem) => {
        edgeItem.toFront();
        graph.setItemState(edgeItem, ItemState.Selected, true);
      })
  }
})
