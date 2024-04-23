import MioHome from './pages/home'
import methods from './utils'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h2>hello electron</h2>
      <h3>print {methods.addNum(1, 2)} </h3>
      <MioHome />
    </>
  )
}

export default App
