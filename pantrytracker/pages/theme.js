import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: 
    {
        primary:
        {
            main: '#5C305C'
        },
            secondary: 
            {
                main: '#7765E3'
            },       
    
                itemBackground: {
                    main: '#8BD1FB'
                },
     },

            typography: 
            {
                fontFamily: 'Roboto, Arial', 
            
                    h2:
                    {
                        fontSize: '40px',
                        fontWeight: '500px'
                    },
                        h3:
                        {
                            fontSize: '24px',
                            fontWeight: '400px'
                        },
            },
});

export default theme;