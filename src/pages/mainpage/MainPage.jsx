import React, { useEffect, useState } from 'react'

function MainPage({user}) {

  const [state, setState] = useState({askName: '',askSurName: ''})

  useEffect(() => {
    setState({name: user.askName, sureName: user.askSurname})
  }, [user])
  return (
    <>
    <h1>Добро пажаловать {state.name} {state.sureName} мы вас очень ждали!</h1>
    </>
  )
}

export default MainPage