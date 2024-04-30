import MioTopBar from './components/top-bar'
import { AppDiv } from './css'
import MioPlayBar from './components/play-bar'
import MioContain from './components/contain'
import BackGround from '../../../resources/KiTa.mp4'
import { useEffect, useRef } from 'react'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play()
  }, [])

  return (
    <AppDiv>
      <div className="bg">
        <video src={BackGround} ref={videoRef} loop />
      </div>
      <MioTopBar />
      <MioContain />
      <MioPlayBar />
    </AppDiv>
  )
}

export default App
