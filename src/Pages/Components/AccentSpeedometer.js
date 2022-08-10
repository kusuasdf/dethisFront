import ReactSpeedometer, {
    CustomSegmentLabelPosition,
} from "react-d3-speedometer";

const AccentSpeedometer = ({ value = 0 }) => {
    const acentos = [
        "mexicano",
        "americacentral",
        "andino",
        "caribe",
        "centrosurpeninsular",
        "rioplatense",
        "chileno",
        "surpeninsular",
        "nortepeninsular",
        "canario",
        "filipinas",
    ];
    const segmentos = acentos.map((acento) => {
        return {
            text: acento.toUpperCase(),
            position: CustomSegmentLabelPosition.Outside,
        };
    });
    return (
        <ReactSpeedometer
            customSegmentLabels={segmentos}
            width={800}
            height={500}
            maxValue={acentos.length + 0.5}
            segments={acentos.length}
            value={value + 1}
            labelFontSize={"12px"}
            currentValueText={`El acento es: ${
                acentos[value] ?? "Envía un archivo para probar"
            }`}
            customSegmentStops={[
                0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5,
            ]}
            minValue={0.5}
        />
    );
};

export default AccentSpeedometer;
