import { Alert, Box } from '@mui/material';

const Notification = ({ message, type }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'right',
      }}
    >
      <Alert
        variant="filled"
        severity={type}
        sx={{ position: 'fixed', top: 0, right: 0, zIndex: 9999 }}
      >
        {message}
      </Alert>
    </Box>
  );
};

export default Notification;
