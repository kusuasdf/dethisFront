import { probarKNN } from "../../../Config/querys";
const { useMutation } = require("react-query");

const useProbarKNN = (params) => {
    return useMutation(probarKNN, {
        mutationKey: "probarPerceptron",
        onSuccess: (data) => {
            return data;
        },
    });
};

export default useProbarKNN;
