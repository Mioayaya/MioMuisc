import { useRoutes } from 'react-router'
import router from './router'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const routes = useRoutes(router)

  return (
    <>
      <h1>Top Bar</h1>
      {routes}
      <h2>play Bar</h2>
    </>
  )
}

export default App
