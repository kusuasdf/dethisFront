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
import ModeloPerceptron from "./components/ModeloPerceptron";
import tablaPerceptron from "./components/TablaModel.png";
import codePerceptron from "./components/codePerceptron";
import useProbarPerceptron from "./components/useProbarPerceptron";
import { useEffect, useState } from "react";

const Perceptron = () => {
    const queryPerceptron = useProbarPerceptron();
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
        if (queryPerceptron?.data?.data?.status === "ok") {
            let responseData = queryPerceptron.data.data;
            responseData.prediction = JSON.parse(
                queryPerceptron?.data?.data?.prediction
                    ?.replace("[[", "[")
                    ?.replace("]]", "]")
            );
            setPrediction(responseData);
        }
    }, [queryPerceptron.isLoading]);

    const handleOnSubmit = (event) => {
        if (selectedFile) {
            let params = new FormData();
            params.append("wav", selectedFile);
            queryPerceptron.mutate(params);
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
                            El Perceptron es una red neuronal propuesta por
                            Frank Rosenblatt, la cual, en su idea original toma
                            un conjunto de decisiones binarias las cuales al ser
                            ponderadas por una función de activación, por las
                            cuales esta red puede tomar una decision, en este
                            caso, entrega una clasificación de acento.
                            <br /> La estructura de la red es la siguiente:
                            <Grid container justifyContent={"center"}>
                                <img src={tablaPerceptron} />
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={10} pb={1}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="h6">
                                Representación gráfica
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container mt={1} justifyContent={"center"}>
                                <ModeloPerceptron />
                            </Grid>
                        </AccordionDetails>
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
                                {queryPerceptron.isSuccess ? (
                                    <AccentSpeedometer
                                        value={
                                            prediction?.predictionIndex ?? null
                                        }
                                    />
                                ) : queryPerceptron.isLoading ? (
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
                                text={codePerceptron}
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

export default Perceptron;
