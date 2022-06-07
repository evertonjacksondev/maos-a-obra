import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from "react";


const Compromisso = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });

  }

  const resetForm = () => {
    setFormData({});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cheguei");
    resetForm();

  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent={'center'} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent={'center'}>
            <img src="https://sinergiabahia.com.br/wp-content/uploads/2018/10/compromisso.png" />
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid container spacing={1}>

            <Grid item xs={12}>
              <TextField
                name="date"
                autoFocus
                value={formData.date || ''}
                type='date'
                onChange={handleChange}
                fullWidth
                placeholder='DATA' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                type='text'
                onChange={handleChange}
                value={formData.description || ''}
                fullWidth
                placeholder='DESCRIÇÃO'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="responsible"
                onChange={handleChange}
                fullWidth
                value={formData.responsible || ''}
                type='text'
                placeholder='RESPONSÁVEL'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                name='phone'
                fullWidth
                value={formData.phone || ''}
                type='tel'
                placeholder='TELEFONE' />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant='contained'
                type='submit'
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </form>
  )
}

export default Compromisso;