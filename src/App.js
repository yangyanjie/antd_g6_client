import DagGraph from './components/dag-graph'
import { initialData } from './data/initData'
import './app.css'
const App = (props) => {
  const { graph: { getGraphDecorator } } = props || {}
  console.log(initialData, 8989)
  return (
    <div className="App">
      {getGraphDecorator({
        initialData,
        // lineType: 'line',
        page: 'process-define',
        title: '测试test',
      })(<DagGraph />)}
    </div>
  );
}

export default DagGraph.create()(App);
