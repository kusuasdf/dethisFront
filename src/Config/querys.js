import axios from "axios";

const probarPerceptron = (params) => {
    const data = axios.post("http://localhost:8000/api/perceptron/", params);
    return data;
};

const probarKNN = (params) => {
    const data = axios.post("http://localhost:8000/api/knn/", params);
    return data;
};

const probarCNN = (params) => {
    const data = axios.post("http://localhost:8000/api/convolutional/", params);
    return data;
};

export { probarPerceptron, probarKNN, probarCNN };
