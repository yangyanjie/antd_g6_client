import { PLACEHOLDER } from '../../constants/ops';
import G6 from '@antv/g6';

export function executeBatch(graph, execute) {
  graph.setAutoPaint(false);

  execute();

  graph.paint();
  graph.setAutoPaint(true);
}

export function getInitialData(initData) {
  const { nodes = [], edges = [] } = initData || {};
  const nodeData = []; const ids=[];
  nodes.forEach(node => {
    node.id += '';
    if (!ids.includes(node.id)) {
      ids.push(node.id)
      nodeData.push(node)
    }
  });

  edges.forEach(edge => {
    edge.source += '';
    edge.target += '';
  });

  return { nodes: nodeData, edges }

}

export function returnPlaceholder(value) {
  return value || PLACEHOLDER
};

export const fittingString = (str, maxWidth, fontSize = 12) => {
  let currentWidth = 0;
  let res = str;
  const pattern = new RegExp('[\u4E00-\u9FA5]+'); // distinguish the Chinese charactors and letters
  str.split('').forEach((letter, i) => {
    if (currentWidth > maxWidth) return;
    if (pattern.test(letter)) {
      // Chinese charactors
      currentWidth += fontSize;
    } else {
      // get the width of single letter according to the fontSize
      currentWidth += G6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth) {
      // res = `${str.substr(0, i)}\n${str.substr(i)}`;
      // res = `${str.substr(0, i)}\n${fittingString(str.substr(i), maxWidth)}`;
      res = `${str.substr(0, i)}...`;
    }
  });
  return res;
};
export function hexToRgba(hex, opacity) {
  if (!hex || !opacity) return null
  return `rgba(${parseInt(`0x${hex.slice(1, 3)}`)},${parseInt(`0x${hex.slice(3, 5)}`)},${parseInt(`0x${hex.slice(5, 7)}`)},${opacity})`
}