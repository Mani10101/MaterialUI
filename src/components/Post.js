import React from 'react'
import Feed from './Feed'
import { Box } from '@mui/material'
function Post() {
  return (
    <Box flex={4} >
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
    </Box>
  )
}

export default Post