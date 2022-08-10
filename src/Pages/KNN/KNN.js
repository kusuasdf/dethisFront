import { ExpandMore, Send } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Button,
    CircularProgress,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { CopyBlock, monokai } from "react-code-blocks";
import AccentSpeedometer from "../Components/AccentSpeedometer";
import { useEffect, useState } from "react";
import codeKNN from "./components/codeKNN";
import useProbarKNN from "./components/useProbarKNN";

const KNN = () => {
    const queryKNN = useProbarKNN();
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const handleChange = (event) => {
        if (event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        } else {
            setSelectedFile(null);
        }
    };

    useEffect(() => {
        if (queryKNN?.data?.data?.status === "ok") {
            let responseData = queryKNN.data.data;
            setPrediction(responseData);
        }
    }, [queryKNN.isLoading]);

    const handleOnSubmit = (event) => {
        if (selectedFile) {
            let params = new FormData();
            params.append("wav", selectedFile);
            queryKNN.mutate(params);
        }
    };

    return (
        <>
            <Grid container justifyContent={"center"}>
                <Grid item xs={10} pb={1}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="h6">
                                Información del modelo
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            El algoritmo de K vecinos más cercanos es un
                            algoritmo de machine learning que se utiliza para
                            clasificar una muestra de datos, esto se realiza
                            mediante la búsqueda de los K valores más cercanos
                            al input y asignándole la misma clasificación.
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={10} pb={1}>
                    <Accordion disabled>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography
                                variant="h6"
                                sx={{ textDecoration: "line-through" }}
                            >
                                Representación gráfica
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={10} pb={1}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="h6">Probar modelo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Seleccione una archivo de audio para probar el
                            modelo:
                            <Grid
                                container
                                mt={2}
                                mb={2}
                                justifyContent={"center"}
                            >
                                <Paper elevation={3}>
                                    <Grid item xs={12} mb={2} p={1}>
                                        <form>
                                            <input
                                                type={"file"}
                                                accept={"audio/wav"}
                                                onChange={handleChange}
                                            ></input>
                                        </form>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button
                                            variant="contained"
                                            onClick={handleOnSubmit}
                                            endIcon={<Send />}
                                        >
                                            Enviar
                                        </Button>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid
                                container
                                mt={1}
                                pt={2}
                                justifyContent={"center"}
                            >
                                {queryKNN.isSuccess ? (
                                    <AccentSpeedometer
                                        value={
                                            prediction?.predictionIndex ?? null
                                        }
                                    />
                                ) : queryKNN.isLoading ? (
                                    <CircularProgress />
                                ) : (
                                    <Alert severity="info">
                                        Envía una grabación para ver su
                                        predicción.
                                    </Alert>
                                )}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={10} pb={1}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="h6">Código</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CopyBlock
                                text={codeKNN}
                                language={"py"}
                                showLineNumbers={true}
                                theme={monokai}
                                codeBlock
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
    );
};

export default KNN;
