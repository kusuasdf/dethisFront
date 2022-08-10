import { Download } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
const Resumen = () => {
    const linkDrive =
        "https://drive.google.com/file/d/1ETA95KgJIsOoXuBbi7K5shxmIhPO0CtN/view?usp=sharing";
    return (
        <>
            <Grid container justifyContent={"center"}>
                <Grid item xs={10} pb={1} mb={2}>
                    <Typography variant="h6">Resumen</Typography>
                    <Divider />
                    <Typography variant="body1" mb={1}>
                        Este proyecto se presenta para dar conformidad a los
                        requisitos exigidos por la Universidad de Bío-Bío en el
                        proceso de titulación para a la carrera de Ingeniería
                        civil Informática. “Detección de acento en
                        Hispanohablantes, una aplicación de machine learning” es
                        un proyecto enfocado en las nuevas tecnologías y en los
                        avances de las inteligencias artificiales dentro de las
                        ciencias de la computación.
                    </Typography>
                    <Typography variant="body1">
                        La presente web es el prototipo que permite la detección
                        de acento en una muestra de audio, utilizando un modelo
                        de machine learning.
                    </Typography>
                </Grid>
                <Grid item xs={10} pb={1}>
                    <Typography variant="h6">Audios de prueba</Typography>
                    <Divider />
                    <Typography variant="body1" mb={1}>
                        Los audios de prueba fueron extraídos aleatoriamente
                        desde Common Voice 7.0 Español y puedes descargarlos
                        desde Google Drive haciendo click en el siguiente botón:
                    </Typography>
                    <Button
                        startIcon={<Download />}
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(linkDrive, "_blank")}
                    >
                        Descargar audios
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
export default Resumen;
