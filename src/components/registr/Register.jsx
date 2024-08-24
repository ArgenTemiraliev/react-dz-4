import React, { useEffect, useState } from 'react'
import MainPage from '../../pages/mainpage/MainPage'
import ErrorPage from '../../pages/errorPage/ErrorPage'



function Register() {
    
    const [user, setUser] = useState( {askName: '', askSurname: ''})
    const [isAuthorized, setisAuthorized] = useState(null)
    
    useEffect(() => {
        const askName = prompt("write the name")
        const askSurname = prompt("write your last name")

        setUser({askName, askSurname})

        if(askName === "John" && askSurname === "Johns" ){
                return setisAuthorized(true)
        }else{
            setisAuthorized(false)
        }
    }, [])

    

    if(isAuthorized === null) {
         <p>проверка данных...</p>
    }

  return isAuthorized ? <MainPage user={user}/> : <ErrorPage user={user}/>



}

export default Register