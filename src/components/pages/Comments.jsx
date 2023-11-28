import { Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewComent } from '../../store/flipper/thunks';
import { TurnedInNot } from "@mui/icons-material";
import { useForm } from "../../hooks";


export const Comments = () => {

    const dispatch = useDispatch();
    const { isSaving, comments } = useSelector( state => state.flipper );
    const { quest1, quest2, quest3, quest4, onInputChange } = useForm({
      quest1: '',
      quest2: '',
      quest3: '',
      quest4: '',
    });

    const  onClickNewComment = () => {
      dispatch( startNewComent({ quest1, quest2, quest3, quest4 }) );
      location.reload();
    }

    return (
      <>
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
                name='quest1'
                value={ quest1 }
                onChange={ onInputChange }
                />
                </Grid>

                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Experiencias y Servicios:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                name='quest2'
                value={ quest2 }
                onChange={ onInputChange }
                />
                </Grid>

                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Educación y Programas Educativos:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                name='quest3'
                value={ quest3 }
                onChange={ onInputChange }
                />
                </Grid>

                <Grid backgroundColor="#FFFFFF" item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="Sostenibilidad y Conservación:" 
                type="text" 
                placeholder="Tu respuesta" 
                fullWidth
                name='quest4'
                value={ quest4 }
                onChange={ onInputChange }
                />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  <Grid item xs={ 12 }>
                    <Button 
                    disabled={ isSaving }
                    onClick={ onClickNewComment }
                    variant="contained" 
                    fullWidth>
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>  
        </Grid>
      </Grid>

      <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: '#003049', padding: 4 }}>

        <Grid item 
          className="box-shadow"
          xs={ 3 }
          sx={{ 
            width: { md: 800 } ,
            backgroundColor: '#EAE2B7',
            padding: 3,
            borderRadius: 2 }}>

            <Typography variant="h3" sx={{ mb: 1 }} >Comentarios</Typography>
            <Typography variant="h4" sx={{ mb: 1 }} >Comentarios realizados</Typography>

            <List>
              {
                comments.map( comment => (
                  <ListItem key={ comment.id } disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <TurnedInNot />
                      </ListItemIcon>
                      <Grid container>
                        <ListItemText primary={ 'Comentarios:' } />
                        <ListItemText secondary={ 
                          <div>
                            Respuesta a pregunta 1: {comment.quest1}
                            <br />
                            Respuesta a pregunta 2: {comment.quest2}
                            <br />
                            Respuesta a pregunta 3: {comment.quest3}
                            <br />
                            Respuesta a pregunta 4: {comment.quest4}
                          </div>
                          } />
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                ) )
              }
            </List>
                
        </Grid>

      </Grid>
      </>
    );
  };
  