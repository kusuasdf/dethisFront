import { probarCNN } from "../../../Config/querys";
const { useMutation } = require("react-query");

const useProbarCNN = (params) => {
    return useMutation(probarCNN, {
        mutationKey: "probarPerceptron",
        onSuccess: (data) => {
            return data;
        },
    });
};

export default useProbarCNN;
