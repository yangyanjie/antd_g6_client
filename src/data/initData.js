export const initialData = {
  nodes: [
    {
      id: 2896,// 根节点
      taskName: 'test-root',
      businessName: 'test-sjf',
      liableName: '杨艳杰',
      category: 'shell',
      categoryParId: 4,
      cron: '00 22 00 1 * ?',
      cycle: 3,
      type: 'cardNode'
    },
    {
      id: 2904,
      taskName: '测试-1',
      businessName: 'test-sjf',
      liableName: '寇姝玲',
      category: 'spark-hive',
      categoryParId: 23,
      cron: '00 22 00 1 * ?',
      cycle: 5,
      type: 'cardNode'
    },
    {
      id: 2908,
      taskName: '测试-3',
      businessName: 'test-sjf',
      liableName: '杨小杨',
      category: 'spark-hive',
      categoryParId: 23,
      cron: '00 22 00 1 * ?',
      cycle: 5,
      type: 'cardNode'
    },
    {
      id: 3000,
      label: '1',
      taskName: '111',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: 3001,
      label: '2',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: 3002,
      label: '3',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: 3003,
      label: '4',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: 3004,
      label: '5',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: 3005,
      label: '6',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: 3007,
      label: '7',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: 3008,
      label: '8',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: 3009,
      label: '9',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: 3010,
      label: '10',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: 3011,
      label: '11',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }

    
  ],
  edges: [
    {
      source: 2896,
      target: 2904
    },
    {
      source: 2896,
      target: 'comboA'
    },
    {
      source: 2896,
      target: 2908
    },
  ],
  combos: [
    {
      id: 'comboA',
      label: 'aaa(23)ODPS SQL',
      collapseLabel: '288周期ODPS SQL',
      expandLabel: 'aaa(23)ODPS SQL',
      nodeLabel: 'aaa',
      collapsed: false,
      padding: [40, 10, 20, 10], // 上，右，下，左,
      page: '1/10',
      // size: [200, 100],
      x: 750,
      y: 350,
      // type: 'rect',
      style: {
        // fill: "#fff",
        // stroke: '#e0e2f0'
      }
    }
  ]
}