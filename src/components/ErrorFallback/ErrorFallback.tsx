import { 
    Box,
    Container,
    Grid,
      } from "@material-ui/core";
import { FC } from 'react';

const ErrorFallback: FC<any> = ({error}) => {
    return (
        <Container maxWidth='lg'>
            <Grid container  >
                <Box mt={10}>
                    <Grid item xs={12} lg={12} >
                        <h1>Oops Something went wrong.</h1>
                    </Grid>
                </Box>
                <Grid item xs={12} lg={12} >
                    <p>More Details:</p>
                    <pre>{error}</pre>
                    <pre>{error.message}</pre>
                </Grid>
            </Grid>
        </Container>
    )
  }

  export default ErrorFallback;