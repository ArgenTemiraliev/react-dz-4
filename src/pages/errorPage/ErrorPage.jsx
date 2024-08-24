import React, { useEffect, useState } from 'react'

function ErrorPage({user}) {
    const [state , setState] = useState({askName: '', askSurname: ''})

    useEffect(() => {
        setState({name:user.askName,surname:user.askSurname})
    }, [user])
  return (
    <>
    <h1>туда нильзя тебе {state.name} {state.surname}! </h1>
    </>
  )
}

export default ErrorPage