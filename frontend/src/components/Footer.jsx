import { Typography } from '@mui/material';
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1976d2',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        marginTop:'10px',
        bottom: '0',
        width: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Proshop
      </Typography>
      <Typography variant="subtitle1" component="p">
        &copy; {currentYear} Proshop. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
