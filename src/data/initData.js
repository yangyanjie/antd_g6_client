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
      },
      data: [
        {
          id: '3000',
          label: '1',
          taskName: '111',
          comboId: 'comboA',
          type: 'circle'
        },
        {
          id: '3001',
          label: '2',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },
        {
          id: '3002',
          label: '3',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },{
          id: '3003',
          label: '4',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },{
          id: '3004',
          label: '5',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },{
          id: '3005',
          label: '6',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        }
        ,{
          id: '3007',
          label: '7',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },{
          id: '3008',
          label: '8',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },{
          id: '3009',
          label: '9',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },
        {
          id: '3010',
          label: '10',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        }
        ,{
          id: '3011',
          label: '11',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },
        {
          id: '3012',
          label: '12',
          taskName: '222',
          comboId: 'comboA',
          type: 'circle'
        },
        // {
        //   id: '3013',
        //   label: '13',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3014',
        //   label: '14',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3015',
        //   label: '15',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // }
        // ,{
        //   id: '3016',
        //   label: '16',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3017',
        //   label: '17',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3018',
        //   label: '18',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
        // {
        //   id: '3019',
        //   label: '19',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
        // {
        //   id: '3020',
        //   label: '20',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
        // {
        //   id: '3021',
        //   label: '21',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
        // {
        //   id: '3022',
        //   label: '22',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3023',
        //   label: '23',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3024',
        //   label: '24',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3025',
        //   label: '25',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // }
        // ,{
        //   id: '3026',
        //   label: '26',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3027',
        //   label: '27',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },{
        //   id: '3028',
        //   label: '28',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
        // {
        //   id: '3029',
        //   label: '29',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
        // {
        //   id: '3030',
        //   label: '30',
        //   taskName: '222',
        //   comboId: 'comboA',
        //   type: 'circle'
        // },
      ]
    }
  ]
}

export const comboData = {
  id: 'comboA',
  label: 'aaa(23)ODPS SQL',
  collapseLabel: '288周期ODPS SQL',
  expandLabel: 'aaa(23)ODPS SQL',
  nodeLabel: 'aaa',
  collapsed: false,
  padding: [40, 10, 20, 10], // 上，右，下，左,
  page: '2/10',
  // size: [200, 100],
  x: 750,
  y: 350,
  // type: 'rect',
  style: {
    // fill: "#fff",
    // stroke: '#e0e2f0'
  },
  data: [
    {
      id: '3031',
      label: '31',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3032',
      label: '32',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3033',
      label: '33',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3034',
      label: '34',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3035',
      label: '35',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: '3036',
      label: '36',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3037',
      label: '37',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3038',
      label: '18',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3039',
      label: '39',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3040',
      label: '40',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3041',
      label: '41',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3042',
      label: '42',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3043',
      label: '43',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3044',
      label: '44',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3045',
      label: '45',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: '3046',
      label: '46',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3047',
      label: '47',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3048',
      label: '48',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3049',
      label: '49',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3050',
      label: '50',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3051',
      label: '51',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3052',
      label: '52',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3053',
      label: '53',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3054',
      label: '54',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3055',
      label: '45',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: '3056',
      label: '46',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3057',
      label: '57',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3058',
      label: '58',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3059',
      label: '59',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3060',
      label: '60',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
  ]
}
export const comboData2 = {
  id: 'comboA',
  label: 'aaa(23)ODPS SQL',
  collapseLabel: '288周期ODPS SQL',
  expandLabel: 'aaa(23)ODPS SQL',
  nodeLabel: 'aaa',
  collapsed: false,
  padding: [40, 10, 20, 10], // 上，右，下，左,
  page: '2/10',
  // size: [200, 100],
  x: 750,
  y: 350,
  // type: 'rect',
  style: {
    // fill: "#fff",
    // stroke: '#e0e2f0'
  },
  data: [
    {
      id: '3031',
      label: '31',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3032',
      label: '32',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3033',
      label: '33',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3034',
      label: '34',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3035',
      label: '35',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: '3036',
      label: '36',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3037',
      label: '37',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3038',
      label: '18',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3039',
      label: '39',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3040',
      label: '40',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3041',
      label: '41',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3042',
      label: '42',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3043',
      label: '43',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3044',
      label: '44',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3045',
      label: '45',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: '3046',
      label: '46',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3047',
      label: '47',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3048',
      label: '48',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3049',
      label: '49',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3050',
      label: '50',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3051',
      label: '51',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3052',
      label: '52',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3053',
      label: '53',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3054',
      label: '54',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3055',
      label: '45',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    }
    ,{
      id: '3056',
      label: '46',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3057',
      label: '57',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },{
      id: '3058',
      label: '58',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3059',
      label: '59',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
    {
      id: '3060',
      label: '60',
      taskName: '222',
      comboId: 'comboA',
      type: 'circle'
    },
  ]
}