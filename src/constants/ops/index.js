export const OVERTIME_MAP = {
  1: '系统默认',
  2: '指定时间',
}

export const RETRY_STATUS_MAP = {
  YES: true,
  NO: false
}
export const STAUS_RETRY = {
  [RETRY_STATUS_MAP.YES]: '重跑',
  [RETRY_STATUS_MAP.NO]: '不重跑',
}

// 执行状态 ,0待运行，1运行中，2运行成功，3运行失败，4暂停，5空跑，6质量算子运行，7质量算子失败，8过期, 9孤立节点
export const STATUS_MAP = {
  WAIT: -1,
  READY: 0,
  RUNNING: 1,
  SUCCESS: 2,
  FAILURE: 3,
  PAUSE: 4,
  EMPTY_RUN: 5,
  MASS_OPERATOR_RUN: 6,
  MASS_OPERATOR_FAILURE: 7,
  EXPIRE: 8,
  ISOLATED: 9
}
export const NOE_SET_SUCCESS_STATUS = [ STATUS_MAP.SUCCESS ]

export const STATUS_TEXT_MAP = {
  [STATUS_MAP.WAIT]: '等待资源',
  [STATUS_MAP.READY]: '未运行',
  [STATUS_MAP.RUNNING]: '运行中',
  [STATUS_MAP.SUCCESS]: '运行成功',
  [STATUS_MAP.FAILURE]: '运行失败',
  [STATUS_MAP.PAUSE]: '未运行',
  [STATUS_MAP.EMPTY_RUN]: '运行成功',
  [STATUS_MAP.MASS_OPERATOR_RUN]: '运行中',
  [STATUS_MAP.MASS_OPERATOR_FAILURE]: '运行失败',
  [STATUS_MAP.EXPIRE]: '未运行',
  [STATUS_MAP.ISOLATED]:'运行失败'
};

export const ICON_MAP = {
  [STATUS_MAP.WAIT]: 'wait',
  [STATUS_MAP.READY]: 'ready1',
  [STATUS_MAP.RUNNING]: 'running2',
  [STATUS_MAP.SUCCESS]: 'finished',
  [STATUS_MAP.FAILURE]: 'fail1',
  [STATUS_MAP.PAUSE]: 'ready1',
  [STATUS_MAP.EMPTY_RUN]: 'finished',
  [STATUS_MAP.MASS_OPERATOR_RUN]: 'running2',
  [STATUS_MAP.MASS_OPERATOR_FAILURE]: 'fail1',
  [STATUS_MAP.EXPIRE]: 'ready1',
  [STATUS_MAP.ISOLATED]:'fail1'
}

export const COLOR_SELECTED_MAP = {
  [STATUS_MAP.WAIT]: '#c2c7d1',
  [STATUS_MAP.READY]: '#c2c7d1',
  [STATUS_MAP.RUNNING]: '#47A1FF',
  [STATUS_MAP.SUCCESS]: '#59CB74',
  [STATUS_MAP.FAILURE]: '#E37474',
  [STATUS_MAP.PAUSE]: '#c2c7d1',
  [STATUS_MAP.EMPTY_RUN]: '#59CB74',
  [STATUS_MAP.MASS_OPERATOR_RUN]: '#47A1FF',
  [STATUS_MAP.MASS_OPERATOR_FAILURE]: '#E37474',
  [STATUS_MAP.EXPIRE]: '#c2c7d1',
  [STATUS_MAP.ISOLATED]:'#E37474'
};
export const RUNSTATUS_COLOR = [ '#c2c7d1', '#47A1FF', '#59CB74', '#E37474', '#9861E5' ]
export const REAL_RUNSTATUS_COLOR = [ '#6CD3FF', '#006BFF', '#75C936', '#FE5A52', '#FFB952', '#B3B8C5' ]
export const COLOR_MAP = {
  [STATUS_MAP.WAIT]: '#eeeff2',
  [STATUS_MAP.READY]: '#eeeff2',
  [STATUS_MAP.RUNNING]: '#c7e2ff',
  [STATUS_MAP.SUCCESS]: '#cdefd5',
  [STATUS_MAP.FAILURE]: '#f6d5d5',
  [STATUS_MAP.PAUSE]: '#eeeff2',
  [STATUS_MAP.EMPTY_RUN]: '#cdefd5',
  [STATUS_MAP.MASS_OPERATOR_RUN]: '#c7e2ff',
  [STATUS_MAP.MASS_OPERATOR_FAILURE]: '#f6d5d5',
  [STATUS_MAP.EXPIRE]: '#eeeff2',
  [STATUS_MAP.ISOLATED]:'#f6d5d5'
};
export const SHAPE_UNICODE_MAP = {
  [STATUS_MAP.WAIT]: '\ue673',
  [STATUS_MAP.READY]: '\ue615',
  [STATUS_MAP.RUNNING]: '\ue616',
  [STATUS_MAP.SUCCESS]: '\ue687',
  [STATUS_MAP.FAILURE]: '\ue674',
  [STATUS_MAP.PAUSE]: '\ue615',
  [STATUS_MAP.EMPTY_RUN]: '\ue687',
  [STATUS_MAP.MASS_OPERATOR_RUN]: '\ue616',
  [STATUS_MAP.MASS_OPERATOR_FAILURE]: '\ue674',
  [STATUS_MAP.EXPIRE]: '\ue615',
  [STATUS_MAP.ISOLATED]: '\ue674'

}
// 1 成功失败都重跑 2失败重跑 3都不重跑
export const RETRY_ATTRIBUTE = {
  RETRY_SUCCESS_FAILURE: 1,
  RETRY_FAILURE: 2,
  NORETRY: 3
}
// 默认的每页条数
export const DEFAULT_PAGE_SIZE = 20;

const YMD = 'YYYY-MM-DD';
const YYMMDD = 'YYYYMMDD';
const MD = 'MM-DD';
const HM = 'HH:mm';
const HMS = 'HH:mm:ss';
const HHMMSS = 'hhmmss';
export const TIME_FORMAT = { YMD, HM, YYMMDD, HMS, MD, HHMMSS }
// 运行状态
export const RUN_STATUS = [
  { id: -1, state: '等待资源' },
  { id: 0, state: '未运行' },
  { id: 1, state: '运行中' },
  { id: 2, state: '运行成功' },
  { id: 3, state: '运行失败' }
]

export const OPERATER_MAP = {
  ALARM: 185,
  NORMAL: 184,
  BLOCK: 186,
  RUNNING: 188,
  WAITING: 197,
  FAIL: 201,
}
export const OPERATER_ICON_MAP = {
  [OPERATER_MAP.ALARM]: 'op-alarm',
  [OPERATER_MAP.NORMAL]: 'op-normal',
  [OPERATER_MAP.BLOCK]: 'op-block',
  [OPERATER_MAP.RUNNING]: 'op-running',
  [OPERATER_MAP.WAITING]: 'op-wait',
  [OPERATER_MAP.FAIL]: 'op-fail',
}
export const OPERATER_COLOR_MAP = {
  [OPERATER_MAP.ALARM]: '#FFB952',
  [OPERATER_MAP.NORMAL]: '#59CB74',
  [OPERATER_MAP.BLOCK]: '#939BAE',
  [OPERATER_MAP.RUNNING]: '#47A1FF',
  [OPERATER_MAP.WAITING]: '#C2C7D1',
  [OPERATER_MAP.FAIL]: '#E37474',
}

// 实时同步任务状态
export const REAL_ASYNC_STATUS = [
  {
    text: '启动中',
    value: 0
  },
  {
    text: '运行中',
    value: 1
  }, {
    text: '已完成',
    value: 2
  }, {
    text: '异常',
    value:3
  }, {
    text: '已停止',
    value:4
  }, {
    text: '停止中',
    value: 10
  }
]
// 0启动中 1运行中，3异常，4已停止 10停止中
export const REAL_ASYNC_STATUS_MAP = {
  STARTING: 0,
  RUNNING: 1,
  FINISHED: 2,
  FAILURE: 3,
  PAUSE: 4,
  PAUSING: 10

}

export const REAL_STATUS_TEXT_MAP = {
  [REAL_ASYNC_STATUS_MAP.STARTING]: '启动中',
  [REAL_ASYNC_STATUS_MAP.RUNNING]: '运行中',
  [REAL_ASYNC_STATUS_MAP.FINISHED]: '已完成',
  [REAL_ASYNC_STATUS_MAP.FAILURE]: '异常',
  [REAL_ASYNC_STATUS_MAP.PAUSE]: '已停止',
  [REAL_ASYNC_STATUS_MAP.PAUSING]: '停止中',
};
// real
export const REAL_ASYNC_ICON_MAP = {
  [REAL_ASYNC_STATUS_MAP.STARTING]:'starting',
  [REAL_ASYNC_STATUS_MAP.RUNNING]: 'running1',
  [REAL_ASYNC_STATUS_MAP.FAILURE]: 'fail1',
  [REAL_ASYNC_STATUS_MAP.PAUSE]: 'pause1',
  [REAL_ASYNC_STATUS_MAP.PAUSING]: 'pausing',
  [REAL_ASYNC_STATUS_MAP.FINISHED]: 'finished'
}
export const REAL_ASYNC_COLOR_MAP = {
  [REAL_ASYNC_STATUS_MAP.STARTING]: '#6CB4FF',
  [REAL_ASYNC_STATUS_MAP.RUNNING]: '#006BFF',
  [REAL_ASYNC_STATUS_MAP.FAILURE]: '#FE5A52',
  [REAL_ASYNC_STATUS_MAP.PAUSE]: '#FFB952',
  [REAL_ASYNC_STATUS_MAP.PAUSING]: '#B3B8C5',
  [REAL_ASYNC_STATUS_MAP.FINISHED]:'#75C936'
}

export const PLACEHOLDER = '-'
// 默认间隔时间
export const DEFAULT_INTERVAL_TIME = 1000
// 调度类型
export const DS_MAP = [
  {
    id: 1,
    name: '正常调度'
  }, {
    id: 2,
    name: '空跑调度'
  }, {
    id: 3,
    name: '暂停调度'
  }, {
    id: 4,
    name:'一次性调度'
  }, {
    id: -1,
    name:'一次性调度'
  }
]
export const SCHEDULER_TYPE_TEXT = {
  1: '正常调度',
  4: '一次性调度'
}
// 调度周期
export const DS_CYCLE_MAP = {
  1: '分钟',
  2: '小时',
  3: '日',
  4: '周',
  5: '月',
  6: '年',
}
export const DS_CYCLE_LIST = Object.entries(DS_CYCLE_MAP).reduce((arr, item)=>{
  const [ value, text ] = item;
  arr.push({ text, value })
  return arr;
}, [])
export const TIME_ATTRIBUTE_TAG_MAP = {
  '1': '正常',
  '2': '空跑',
  '3': '暂停',
  '4': '正常', // 一次性调度是正常
  '-1': '正常', // 一次性调度是正常
}
export const TIME_ATTRIBUTE_TAG_COLOR_MAP = {
  '1': '#59cb74',
  '2': '#59cb74',
  '3': '#ffb952',
  '4': '#59cb74',
  '-1': '#59cb74',
}

export const RETRY_ATTRIBUTE_MAP = {
  1: '运行成功或失败后均可重跑',
  2: '运行成功后不可重跑，运行失败后可以重跑',
  3: '运行成功或失败后皆不可重跑',
}

export const DS_SHAPES = {
  OFFLINE: 'offline',
  REALTIME: 'realtime',
  DDSSQL: 'dds-sql',
  MYSQL: 'mysql',
  SPARKHIVE: 'spark-hive',
  STARROCKS: 'starrocks',
  SHELL: 'shell',
  MERGE: 'merge',
  BRANCH: 'branch',
  ASSIGNMENT: 'assignment',
  VIRTUAL: 'virtual',

  DDS: 'dds',
  HIVE: 'hive',
  LOOP: 'loop'
}


export const SHAPE_NODE_UNICODE_MAP = {
  [DS_SHAPES.OFFLINE]: '\ue621',
  [DS_SHAPES.REALTIME]: '\ue622',
  [DS_SHAPES.DDSSQL]: '\ue651',
  [DS_SHAPES.SHELL]: '\ue623',
  [DS_SHAPES.MYSQL]: '\ue624',
  [DS_SHAPES.SPARKHIVE]: '\ue625',
  [DS_SHAPES.STARROCKS]: '\ue64f',
  [DS_SHAPES.MERGE]: '\ue626',
  [DS_SHAPES.BRANCH]: '\ue627',
  [DS_SHAPES.ASSIGNMENT]: '\ue63c',
  [DS_SHAPES.VIRTUAL]: '\ue65e',
  [DS_SHAPES.LOOP]: '\ue646',
}

export const RECTANGLE_NODE_COLOR_MAP = {
  '1': 'blue',
  '4': 'ching',
  '18': 'yellow',
  '19': 'yellow',
  '23': 'green',
  '26': 'blue',
  '28': 'green',
  '27': 'ching',
}
export const WORK_FLOW_COLOR_MAP = {
  'blue': '#47A1FF',
  'ching': '#4DCCCB',
  'yellow': '#FBD54A',
  'purple': '#9F8CF1',
  'green': '#59CB74',
}

export const DRAGBAR_WIDTH = 5;
export const CARD_DEFAULT_HEIGHT = 300;
export const CARD_MIN_HEIGHT = 48;
export const DETAIL_MINUS_WIDTH = 300;
export const REAL_SHAPES = {
  MYSQLBINLOG: 'mysqlbinlog',
  MYSQL: 'mysql',
  KAFKA_READER: 'kafka_reader',
  KAFKA_WRITER: 'kafka_writer',
  STARROCKS: 'starrocks',
  CUSTOMSQL:'customsql'
}

export const REAL_SHAPE_NODE_UNICODE_MAP = {
  [REAL_SHAPES.MYSQLBINLOG]: '\ue65f',
  [REAL_SHAPES.MYSQL]: '\ue660',
  [REAL_SHAPES.KAFKA_READER]: '\ue654',
  [REAL_SHAPES.KAFKA_WRITER]: '\ue654',
  [REAL_SHAPES.STARROCKS]: '\ue661',
  [REAL_SHAPES.CUSTOMSQL]: '\ue65e',
}
export const REAL_SHAPE_NODE_COLOR_MAP = {
  'reader': 'blue',
  'writer': 'green',
  'transform': 'blueGreen'
}

export const WORK_REAL_COLOR_MAP = {
  'blue': '#47A1FF',
  'green': '#59CB74',
  'blueGreen':'#4DCCCB'
}
export const INSTANCE_MAP = {
  1: 'T+1次日生成',
  2: '发布后即时生成',
}
export const TAG_COLOR = {
  'alone': '#9F8CF1',
  'overDue':'#777777'
}
export const PADDING = 32;
export const ATTRIBUTE_MAP = [
  {
    text: '过期',
    value: 1,
  }, {
    text: '孤立',
    value: 2,
  }, {
    text: '正常',
    value: 3,
  }, {
    text: '空跑',
    value: 4,
  }, {
    text: '暂停',
    value: 5,
  },
]

export const SCHEDULE_STATUS_MAP = [
  {
    text: '常规',
    value: 1,
  }, {
    text: '跳过',
    value: 2,
  }, {
    text: '暂停',
    value: 3,
  }
]

export const SCHEDULE_STATUS_TEXT = {
  1: '常规',
  2: '跳过',
  3: '暂停'
}

export const OVER_DUE_MAP = [
  {
    text: '生效',
    value: 0,
  }, {
    text: '失效',
    value: 1,
  }
]

export const OVER_DUE_TEXT = {
  0: '生效',
  1: '失效'
}

export const ALONE_MAP = [
  {
    text: '是',
    value: 1,
  }, {
    text: '否',
    value: 0,
  }
]

export const ALONE_TEXT = {
  0: '否',
  1: '是'
}


export const READ_AUZALLOW = [ 'READ', 'ALL' ]


