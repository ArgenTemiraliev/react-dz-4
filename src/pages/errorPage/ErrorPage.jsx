import React, { useEffect, useState } from 'react'
import errorStyle from './errorPage.module.css'

function ErrorPage({user}) {
    const [state , setState] = useState({askName: '', askSurname: ''})

    useEffect(() => {
        setState({name:user.askName,surname:user.askSurname})
    }, [user])
  return (
    <>
    <h1 className={errorStyle.title}>туда нильзя тебе {state.name} {state.surname}! </h1>
    </>
  )
}

export default ErrorPage