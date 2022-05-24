
interface StepsProps {
    stepNumber: number
}

const Steps = ({ stepNumber }: StepsProps) => {
  return (
        stepNumber === 2 ?
        <ul className="steps">
            <li className="step step-primary">Ingreso</li>
            <li className="step step-primary">Selección de evento</li>
            <li className="step">Preferencias</li>
            <li className="step">Pago</li>
        </ul>
        :
        stepNumber === 3 ?
        <ul className="steps">
            <li className="step step-primary">Ingreso</li>
            <li className="step step-primary">Selección de evento</li>
            <li className="step step-primary">Preferencias</li>
            <li className="step">Pago</li>
        </ul>
        :
        <ul className="steps">
            <li className="step step-primary">Ingreso</li>
            <li className="step step-primary">Selección de evento</li>
            <li className="step step-primary">Preferencias</li>
            <li className="step step-primary">Pago</li>
        </ul>
  )
}

export default Steps