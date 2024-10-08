import { Box, Paper, Typography } from '@mui/material'
import { ErrorMessage } from '@hookform/error-message'

export default function UserForm({ children, title }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}>
      <Typography>{title}</Typography>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: 'flex',
          width: '40%',
          flexDirection: 'column',
          margin: '5px',
        }}>
        {children}
      </Paper>
    </Box>
  )
}

export function ErrMessage({ errors, elementID }) {
  return (
    <ErrorMessage
      errors={errors}
      name={elementID}
      render={({ message }) => <p>{message}</p>}
    />
  )
}
