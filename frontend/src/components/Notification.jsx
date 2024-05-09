import { Alert, Box } from '@mui/material';

const Notification = ({ message, type }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <Alert variant="filled" severity={type}  sx={{position: 'absolute',}}>
        {message}
      </Alert>
    </Box>
  );
};

export default Notification;
