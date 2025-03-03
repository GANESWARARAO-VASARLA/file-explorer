import { SideNav, BottomNav } from './components/Nav/'
import style from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import { NavigatePersist } from './supports/Persistence'
import { EditorPage } from './pages/editor'
import { ExplorerPage } from './pages/explorer'
import 'antd/dist/reset.css'
import { useWindowSize } from 'react-use'


function App() {
  const { width } = useWindowSize()
  const isWideScreen = width > 600

  return (
    <div className={style.container}>
      {
        isWideScreen && <SideNav className={style.sideNav}/>
      }
      <main className={style.main}>
        <Routes>
          <Route path='/' element={<EditorPage />} />
          <Route path='/editor' element={<EditorPage />} />
          <Route path='/editor/:parentId/:folderId' element={<EditorPage />} />
          <Route path='/editor/:parentId/:folderId/:fileId' element={<EditorPage />} />
          <Route path='/explorer/' element={<ExplorerPage />} />
          <Route path='/explorer/:parentId/:folderId' element={<ExplorerPage />} />
        </Routes>
      </main>
      {
        !isWideScreen && <BottomNav className={style.bottomNav}/>
      }
      
    </div>
  )
}

export default App
