import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import { PureComponent } from 'react';
// const data = [
//   { State: 'WY', 小于5岁: 25635, '5至13岁': 1890, '14至17岁': 9314 },
//   { State: 'DC', 小于5岁: 30352, '5至13岁': 20439, '14至17岁': 10225 },
//   { State: 'VT', 小于5岁: 38253, '5至13岁': 42538, '14至17岁': 15757 },
//   { State: 'ND', 小于5岁: 51896, '5至13岁': 67358, '14至17岁': 18794 },
//   { State: 'AK', 小于5岁: 72083, '5至13岁': 85640, '14至17岁': 22153 },
// ];
const data = [
  { year: '2014', type: 'Sales', sales: 1000 },
  { year: '2015', type: 'Sales', sales: 1170 },
  { year: '2016', type: 'Sales', sales: 660 },
  { year: '2017', type: 'Sales', sales: 1030 },
  { year: '2014', type: 'Expenses', sales: 400 },
  { year: '2015', type: 'Expenses', sales: 460 },
  { year: '2016', type: 'Expenses', sales: 1120 },
  { year: '2017', type: 'Expenses', sales: 540 },
  { year: '2014', type: 'Profit', sales: 300 },
  { year: '2015', type: 'Profit', sales: 300 },
  { year: '2016', type: 'Profit', sales: 300 },
  { year: '2017', type: 'Profit', sales: 350 },
];

export default class extends PureComponent {
  // componentDidMount() {
  //   console.log(11111)
  //   const ds = new DataSet();
  //   const dv = ds.createView().source(data);
  //   dv.transform({
  //     type: 'fold',
  //     fields: ['小于5岁', '5至13岁', '14至17岁'], // 展开字段集
  //     key: '年龄段', // key字段
  //     value: '人口数量', // value字段
  //     retains: ['State'], // 保留字段集，默认为除fields以外的所有字段
  //   });
  //   // 数据被加工成 {State: 'WY', 年龄段: '小于5岁', 人口数量: 25635}

  //   const chart = new Chart({
  //     container: 'echart',
  //     autoFit: true,
  //     width: 500,
  //     height: 500,
  //   });
  //   chart.coordinate().transpose();

  //   chart.data(dv.rows);
  //   chart.scale('人口数量', { nice: true });

  //   chart.axis('State', {
  //     label: {
  //       offset: 12,
  //     },
  //   });

  //   chart.tooltip({
  //     shared: true,
  //     showMarkers: false,
  //   });

  //   chart
  //     .interval()
  //     .adjust('stack')
  //     .position('State*人口数量')
  //     .color('年龄段');

  //   chart.interaction('active-region');

  //   chart.render();

  // }
  componentDidMount() {
    const chart = new Chart({
      container: 'echart',
      autoFit: true,
      height: 500,
      padding: 50,
    });
    chart.coordinate().transpose();
    chart.data(data);
    chart.scale({
      sales: {
        max: 2400,
        tickInterval: 600,
        nice: true,
      },
    });
    
    const axisCfg = {
      title: null,
      label: {
        style: {
          fontFamily: 'Monospace',
          fontWeight: 700,
          fontSize: 14,
          fill: '#545454',
        },
      },
      grid: {
        line: {
          style: {
            lineDash: null,
            stroke: '#545454',
          },
        },
      },
      line: {
        style: {
          lineDash: null,
          stroke: '#545454',
        },
      },
    };
    
    chart.axis('year', axisCfg);
    chart.axis('sales', { ...axisCfg, line: null });
    
    chart.tooltip({
      showMarkers: false
    });
    
    chart
      .interval()
      .position('year*sales')
      .color('type')
      .size(35)
      .shape('type', (val) => {
        if (val === 'Profit') {
          // 顶部圆角
          return 'bottom';
        } else if (val === 'Sales') {
          // 底部圆角
          return 'top';
        }
      })
      .style({
        stroke: '#545454',
        lineWidth: 2,
      })
      .adjust('stack');
    
    // chart.interaction('element-single-selected');
    chart.on('click', (params) => {
      console.log(params.data.data, 123)
    })
    chart.render();
  }
  render() {

    return (
      <div id="echart" />
    )
  }
}