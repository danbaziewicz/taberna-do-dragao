import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CardProd from '../../components/CardProd/CardProd'

const Cardapio = () => {
  return (
    <div>
      <Button variant="contained" startIcon={<DeleteIcon />}>Deletar</Button>
      <CardProd></CardProd>
    </div>

  )
}

export default Cardapio