import DagGraph from './components/dag-graph'
import { initialData } from './data/initData'
import './app.css'
const App = (props) => {
  const { graph: { getGraphDecorator } } = props || {}
  console.log(111)
  return (
    <div className="App">
      {getGraphDecorator({
        initialData,
        page: 'cycle-task',
        title: '测试test'
      })(<DagGraph />)}
    </div>
  );
}

export default DagGraph.create()(App);
