import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';


const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  height: 380,
  bgcolor: '#edf6fc',
  border: '1px solid #119dfa',
  borderRadius:"50%",
  boxShadow: 24,
  p: 4,
  display:"flex",
  alignItems:"center"

};

export default function MemModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
useEffect(()=>{

const current = props.status;
    return setOpen(current);

},[props.status]);

  return (
    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div>
          <Typography id="modal-modal-title"  sx={{color:"#119dfa", textAlign:"center", fontSize:"25px"}} >
          Cheers!! Core Memory Stored! 
          </Typography><br/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Check Out Memories Page to Relive
          </Typography>
          </div>
      
        </Box>
      </Modal>
    </div>
  );
}