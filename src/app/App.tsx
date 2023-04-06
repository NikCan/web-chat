import React, {FC} from 'react'
import {Footer} from '../components/footer'
import {Header} from '../components/header'
import {Chat} from '../components/chat'
import s from './App.module.css'

export const App: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.app}>
        <Header/>
        <Chat/>
        <Footer/>
      </div>
    </div>

  )
}