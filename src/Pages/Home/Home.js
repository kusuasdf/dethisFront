import { LensBlur } from "@mui/icons-material";
import { Grid, Tabs, Tab, Typography, Divider } from "@mui/material";
import { useState } from "react";
import Convolutional from "../Convolutional/Convolutional";
import KNN from "../KNN/KNN";
import Perceptron from "../Perceptron/Perceptron";
import Resumen from "./Compontents/Resumen";

const Home = () => {
    const [tabSelected, setTabSelected] = useState(0);
    const [toRender, setToRender] = useState(<Resumen />);
    const handleChangeTab = (event, newValue) => {
        setTabSelected(newValue);
        switch (newValue) {
            case 0:
                setToRender(<Resumen />);
                break;
            case 1:
                setToRender(<KNN />);
                break;
            case 2:
                setToRender(<Perceptron />);
                break;
            case 3:
                setToRender(<Convolutional />);
                break;
            default:
                setToRender(<Resumen />);
        }
    };
    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <LensBlur
                        sx={{ height: "10vh", width: "auto" }}
                        color="blue"
                    />
                </Grid>
                <Grid
                    item
                    xs={8}
                    display="flex"
                    justifyContent="center"
                    //alignItems="center"
                >
                    <Tabs
                        value={tabSelected}
                        onChange={handleChangeTab}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        sx={{ marginBottom: "8px" }}
                    >
                        <Tab
                            value={0}
                            label={
                                <Typography variant="subtitle1" p={1}>
                                    Home
                                </Typography>
                            }
                        />
                        <Tab
                            value={1}
                            label={
                                <Typography variant="subtitle1" p={1}>
                                    KNN
                                </Typography>
                            }
                        />
                        <Tab
                            value={2}
                            label={
                                <Typography variant="subtitle1" p={1}>
                                    Perceptron
                                </Typography>
                            }
                        />
                        <Tab
                            value={3}
                            label={
                                <Typography variant="subtitle1" p={1}>
                                    Convolutional Neural Network
                                </Typography>
                            }
                        />
                    </Tabs>
                    <Divider flexItem />
                </Grid>
            </Grid>
            {toRender}
        </>
    );
};

export default Home;
