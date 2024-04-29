import MioTopBar from './components/top-bar'
import { AppDiv } from './css'
import MioPlayBar from './components/play-bar'
import MioContain from './components/contain'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <AppDiv>
      <MioTopBar />
      <MioContain />
      <MioPlayBar />
    </AppDiv>
  )
}

export default App
