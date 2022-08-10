const { useMutation } = require("react-query");
const { probarPerceptron } = require("../../../Config/querys");

const useProbarPerceptron = (params) => {
    return useMutation(probarPerceptron, {
        mutationKey: "probarPerceptron",
        onSuccess: (data) => {
            return data;
        },
    });
};

export default useProbarPerceptron;
