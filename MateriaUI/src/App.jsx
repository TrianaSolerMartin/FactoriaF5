import { Button, Container } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function App() {
	return (
	    <>
      <Container sx={{ border: "solid 5rem"}}>
	    <h1>App</h1>
      <Button variant="contained" endIcon={<ArrowCircleRightIcon />}>Mi primer boton</Button>
      </Container>
	    </>
	);
}

