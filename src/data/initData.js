export const initialData = {
  nodes: [
    {
      id: 2904,
      taskName: 'ceshi11',
      businessName: 'test-sjf',
      liableName: '寇姝玲',
      category: 'spark-hive',
      categoryParId: 23,
      cron: '00 22 00 1 * ?',
      cycle: 5
    },
    {
      id: 2896,// 根节点
      taskName: 'start',
      businessName: 'test-sjf',
      liableName: '杨艳杰',
      category: 'shell',
      categoryParId: 4,
      cron: '00 22 00 1 * ?',
      cycle: 3
    },
  ],
  edges: [
    {
      source: 2896,
      target: 2904
    }
  ]
}