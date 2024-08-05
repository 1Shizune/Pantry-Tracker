import { Box, Stack, Typography, Modal, TextField, Button, ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';
import { firestore } from '../app/firebase';
import { collection, getDocs, setDoc, getDoc, deleteDoc, doc, query } from 'firebase/firestore';
import theme from './theme';
import pantryImage from '../covers/pantry.jpg';

const InventoryPage = () => {
  
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const updateInventory = async () => 
    {
      console.log("Updating inventory...");
      const snapshot = query(collection(firestore, 'inventory'))
      const docs = await getDocs(snapshot)
      const inventoryList = []
      docs.forEach((doc)=> {
        inventoryList.push({
          name: doc.id,
          ...doc.data(), 
        });
      });
      console.log("Inventory list:", inventoryList);  
      setInventory(inventoryList);
    };

      const addItem = async (item) =>{
        console.log("Adding item:", item);
        const docRef = doc(collection(firestore, 'inventory'), item)
      const docSnap = await getDoc(docRef)
      
      if(docSnap.exists())
      {
        const {quantity} = docSnap.data()
        await setDoc(docRef, {quantity: quantity + 1});
        console.log("Item exists, updated quantity:", quantity + 1);
      }
        else
        {
          await setDoc(docRef, {quantity:1});
          console.log("Item does not exist, set quantity to 1");
        }  
      
      await updateInventory();
    
    };
    
    
      const removeItem = async (item) =>{
        console.log("Removing item:", item);
        const docRef = doc(collection(firestore, 'inventory'), item)
      const docSnap = await getDoc(docRef)
      
      if(docSnap.exists())
      {
        const {quantity} = docSnap.data()
        if(quantity===1)
        {
          await deleteDoc(docRef); 
          console.log("Item quantity is 1, deleted item");
        }
          else{
            await setDoc(docRef, {quantity: quantity - 1});
            console.log("Decreased item quantity:", quantity - 1);
          }
          
        }
        await updateInventory();
    };
    
      useEffect(() =>{
        updateInventory()
      }, []);

        const handleOpen = () => setOpen(true);
        const handleCLose= () => setOpen(false);
      
        const filteredInventory = inventory.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
        return( 
    
    <ThemeProvider theme={theme}>
    <Box width="100vw" 
    height="100vh" 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    gap={2} 
    flexDirection="column"
    sx=
    {{
        backgroundImage: `url(${pantryImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    >
     
      
      <Modal  open={open} onClose={handleCLose}>
       <Box position="absolute" 
       top="50%" 
       left="50%" 
       width={400} 
       bgcolor="white" 
       border="2px solid #000" 
       boxShadow={24}
       p={4} 
       display="flex" 
       flexDirection="column" 
       gap={3}
       sx={{transform: 'translate(-50%,-50%)'}}
       > 
        
        <Typography variant="h6" color="black"> Add Item </Typography>
        <Stack width="100%" direction="row" spacing={2} >
          
          <TextField variant='outlined' fullWidth value={itemName} onChange={(e) =>{
            setItemName(e.target.value)
          }}
          /> 
          <Button variant="outlined" 
          onClick={()=>{ addItem(itemName), setItemName(''), handleCLose() }
          }> Add </Button>
        </Stack>
       </Box>     
      </Modal>
      <Button variant="contained" onClick={handleOpen}> Add New Item</Button>
      <TextField
        variant='outlined'
        fullWidth
        placeholder='Search for items'  
        value={searchQuery}  
        onChange={(e)=> setSearchQuery(e.target.value)}
        sx=
        {{
          width: "800px",
          marginBottom: '20px',
          backgroundColor: '#5C305C'
        }}      
        
        InputProps={{
          style: {
            fontWeight: '700',
            color: '#FFFFFF',
            '::placeholder': {
              color: '#FFFFFF',   
            
            }
          }
        }}   
      />
      
      
      <Box 
        border='5px solid #123'
          width="800px"
      >
        <Box width = "800px" height="100px" bgcolor="#DEDEE3" alignItems="center" justifyContent="center" display="flex">
          <Typography variant='h2' color='#333'> Inventory Items</Typography>
        </Box>
      
    <Stack spacing={1} padding={2}>
      {
        filteredInventory.map(({name, quantity }) => (
          <Box key={name} 
          width='100%' 
          minHeight="50px" 
          display="flex" 
          alignItems="center" 
          justifyContent="space-between" 
          bgcolor="#E6D5BD" 
          padding={1} 
          border= "1px solid #333"
          sx={{
            margin: 0,
            padding: '0 16px',
            boxSizing: 'border-box'
          }}
          > <Typography variant='h3' color='#333' textAlign='center' sx={{ margin: 0 }}> {name.charAt(0).toUpperCase()+ name.slice(1)} </Typography>
            <Typography padding={2} variant='h3' color='#333' textAlign='center' sx={{ margin: 0 }}> {quantity} </Typography>
            <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={() => addItem(name)}> Add Item </Button>
            <Button variant="contained" onClick={() => removeItem(name)}> Remove Item </Button>                      
            </Stack>
          </Box>
        ))
      }
     </Stack>
    </Box>
   </Box>
  </ThemeProvider>
)

}

export default InventoryPage;
