import './css/index.css'
import React from 'react'
import { AppProvider } from './components/AppProvider'
import Home from './components/Home'


const Index = () => {
    
    return (
        <AppProvider>
            <Home />
        </AppProvider>
    )
}

export default Index
