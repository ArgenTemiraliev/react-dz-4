import React, { useEffect, useState } from 'react'
import mainStyle from './mainPage.module.css'

function MainPage({user}) {

  const [state, setState] = useState({askName: '',askSurName: ''})

  useEffect(() => {
    setState({name: user.askName, sureName: user.askSurname})
  }, [user])
  return (
    <>
    <h1 className={mainStyle.title}>Добро пажаловать {state.name} {state.sureName} мы вас очень ждали!</h1>
    </>
  )
}

export default MainPage