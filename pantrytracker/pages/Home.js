import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import MainPage from './MainPage';
import InventoryPage from './InventoryPage';
import theme from './theme'

export default function Home(){

    const [showInventory, setShowInventory] = useState(false);

    const handleNavigate = () => 
    {
        setShowInventory(true);
    }; 

        return(
            <ThemeProvider theme={theme}>
                {showInventory ? <InventoryPage/> : <MainPage onNavigate={handleNavigate}/>}
            </ThemeProvider>
        );
} 