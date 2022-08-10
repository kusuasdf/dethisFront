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
import TablaModelo from "./components/TablaModel.png";
import DiagramaCNN from "./components/modeloConvolitional.png";
import { useEffect, useState } from "react";
import useProbarCNN from "./components/useProbarCNN";
import codeCNN from "./components/codeCNN";

const Convolutional = () => {
    const queryConvolutional = useProbarCNN();
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
        if (queryConvolutional?.data?.data?.status === "ok") {
            let responseData = queryConvolutional.data.data;
            responseData.prediction = JSON.parse(
                queryConvolutional?.data?.data?.prediction
                    ?.replace("[[", "[")
                    ?.replace("]]", "]")
            );
            setPrediction(responseData);
        }
    }, [queryConvolutional.isLoading]);

    const handleOnSubmit = (event) => {
        if (selectedFile) {
            let params = new FormData();
            params.append("wav", selectedFile);
            queryConvolutional.mutate(params);
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
                            Las redes neuronales convolucionales son redes
                            especialmente buenas encontrando patrones en
                            imágenes, esto mediante el uso de una estructura
                            compuesta por tres tipos de capas distintas, las
                            convolucionales, las de agrupación y las densas o
                            totalmente conectada
                            <br />
                            La estructura de la red es la siguiente:
                            <Grid container justifyContent={"center"}>
                                <img src={TablaModelo} />
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
                            <Grid
                                container
                                mt={1}
                                style={{ overflow: "scroll" }}
                            >
                                <img src={DiagramaCNN} />
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
                                {queryConvolutional.isSuccess ? (
                                    <AccentSpeedometer
                                        value={
                                            prediction?.predictionIndex ?? null
                                        }
                                    />
                                ) : queryConvolutional.isLoading ? (
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
                                text={codeCNN}
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

export default Convolutional;
