
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const QuantitySelect = ({quantity, setValue , value}) => {
   

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const menuItems = [];
  for (let i = 0; i <= quantity; i++) {
    menuItems.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
  }
    return (
      <Box sx={{ minWidth: 50 }}>
        <FormControl fullWidth>
          <InputLabel id="quantity-select">Qty</InputLabel>
          <Select
            value={value}
            label="Qty"
            onChange={handleChange}
            sx={{ minHeight: 'unset', maxHeight: '35px' }}
          >
            {menuItems}

            
          </Select>
        </FormControl>
      </Box>
    );
  }


export default QuantitySelect