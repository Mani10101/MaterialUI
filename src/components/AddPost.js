import styled from "@emotion/styled";
import { Add, Image, PersonAdd, VideoCallOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const CreatePostModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProfileDisplay = styled(Box)({

  display:"flex",
  gap:"10px",
  alignItems:"center",
  marginBottom:"10px"
  
});
const CustomTextField = styled(TextField)({
  marginTop:"10px"
})
function AddPostButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(!open);
        }}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 70,
          left: { xs: "calc(45%)", md: 100 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <CreatePostModal
        open={open}
        onClose={(e) => {
          setOpen(!open);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box height={300}  borderRadius={5} width={450}    p={3} bgcolor="background.default" color="text.primary">
          <Typography variant="h6" textAlign="center" color="grey">Create Post</Typography> 
          <ProfileDisplay>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
          <Typography fontWeight={400} variant="span">Mavin</Typography>
          </ProfileDisplay>
          <CustomTextField
          id="standard-multiline-flexible"
          label="Tell Us What,s On Your Mind"
          multiline
          rows={2}
          defaultValue=""
          fullWidth={true}
        />
        <Stack direction="row" gap={1} mt={1}>
        <IconButton><EmojiEmotionsIcon color="warning"/></IconButton>
        <IconButton><Image color="primary"/></IconButton>
        <IconButton><VideoCallOutlined color="primary" fontSize="large"/></IconButton>
        <IconButton ><PersonAdd color="primary"/></IconButton>
        </Stack>
        <Button variant="contained" sx={{width:"100%",mt:"10px"}} >Post</Button>
        </Box> 
      </CreatePostModal>
    </>
  );
}

export default AddPostButton;
