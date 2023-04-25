import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'

import { useHistory } from 'react-router-dom'


function Base ({title, description, children}) {
    const history = useHistory();
    return (
        <div className='main-component base-component'>

             <AppBar position='static'>
               <Toolbar variant='dense'>
                <Button 
                color='inherit'
                onClick={()=>history.push("/dashboard")}>
                 <span className="icon">🏚</span> 
                 <span className="nav-name">DashBoard</span>
                </Button>
                <Button 
                color='inherit' 
                onClick={()=>history.push("/details")}>
                   <span className="icon">🏚</span> 
                   <span className="nav-name">ADMIN</span>
                   </Button> 
                     <Button 
                color='inherit'
                 onClick={()=>history.push("/add-data")}>
                  <span className="icon">🏚</span>
                  <span className="nav-name">Students-Portal</span> 
                     </Button>
               </Toolbar>
            </AppBar>
            <header>
                <h1 className='heading'>{title}</h1>
            </header>
            <main className='main-segment'>
               <h2>{description}</h2>
               <div>
                  {children}
               </div>
            </main>
        </div>
    )
}

export default Base