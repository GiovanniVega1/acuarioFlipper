import { Button, Grid, TextField, Typography } from "@mui/material";


export const Comments = () => {
    return (
      <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: '#003049', padding: 4 }}>

        <Grid item 
          className="box-shadow"
          xs={ 3 }
          sx={{ 
            width: { md: 800 } ,
            backgroundColor: '#EAE2B7',
            padding: 3,
            borderRadius: 2 }}>

            <Typography variant="h3" sx={{ mb: 1 }} >Comentarios</Typography>
            <Typography variant="h4" sx={{ mb: 1 }} >Queremos conocer tu opinion</Typography>
            <form>
              <Grid container>
                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Exhibiciones y Habitantes Marinos:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                />
                </Grid>

                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Experiencias y Servicios:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                />
                </Grid>

                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Educación y Programas Educativos:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                />
                </Grid>

                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Sostenibilidad y Conservación:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  <Grid item xs={ 12 }>
                    <Button variant="contained" fullWidth>
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
                
        </Grid>

      </Grid>
    );
  };
  