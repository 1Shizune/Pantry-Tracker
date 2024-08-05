import { Box, Typography, Button } from '@mui/material';
import theme from './theme';
import fruitImage from '../covers/1.png'
import candyImage from '../covers/2.png'
import drinksImage from '../covers/3.png';

const MainPage = ({ onNavigate }) => {

    return (

        <Box 
            sx=
            {{
                bgcolor:'#EAEBED',
                width:"100vw",
                height:"100vh",
                margin:"0",
                padding:"0",
                display:"flex",
                flexDirection:"column"
            }}
            
        >
        
        <Box
            width="100vw"
            height="9vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            bgcolor='#F453AD'
        >
            <Typography variant='h2' color="white" >Check Your Inventory Below!</Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={onNavigate}
                sx={{ mt: 2 }}
            >
                View or Add Inventory Items Here!
            </Button>
        </Box>

            
           <Box
            display="flex"
            justifyContent="space-between"
            width="100vw"
            height="89vh"
            mt={3} 
           > 
            
            <Box
                display="flex"
                flexDirection="column"
                width="33.3%"
                height="100%"
            >  
                
                <Typography fontWeight="700" align="center" mt={2}> Fruits </Typography>
                   
                <Box
                    flex={1}
                    style=
                    {{
                        backgroundImage: `url(${fruitImage.src})`,  
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                /></Box>
                                        
                <Box 
                    display="flex"
                    flexDirection="column" 
                    width="33.3%"
                    height="100%"                  
                >
                    <Typography fontWeight="700" align="center" mt={2}> Candy </Typography>
                    <Box
                        flex={1}
                        style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${candyImage.src})`,
                        backgroundPosition: 'center'
                        }}                  
                    /></Box>   
                    
            
                    <Box
                        display="flex"
                        flexDirection="column"
                        width="33.3%"
                        height="100%"
                    >    
                        <Typography fontWeight="700" align="center" mt={2}> Drinks </Typography>
                        
                    <Box
                         flex={1}
                         style=
                         {{
                            backgroundImage: `url(${drinksImage.src})`,  
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}                      
                    /></Box>              
                    
                    </Box>       
                   </Box>                              
);
}
export default MainPage;