import DagGraph from './components/dag-graph'
import { initialData } from './data/initData'
// import { comboData } from './data/initCombo'
import './app.css'
const App = (props) => {
  const { graph: { getGraphDecorator } } = props || {}
  // const data = { ...initialData, ...comboData }
  // console.log(data, '000')
  return (
    <div className="App">
      {getGraphDecorator({
        initialData,
        page: 'process-define',
        title: '测试test',
        lineType: 'line'
      })(<DagGraph />)}
    </div>
  );
}

export default DagGraph.create()(App);
