
interface StepsProps {
    stepNumber: number
}

const Steps = ({ stepNumber }: StepsProps) => {
  return (
        stepNumber === 2 ?
        <ul className="steps">
            <li className="step step-primary">Conectá</li>
            <li className="step step-primary">Elegí</li>
            <li className="step">Comprá</li>
            <li className="step">Listo</li>
        </ul>
        :
        stepNumber === 3 ?
        <ul className="steps">
            <li className="step step-primary">Conectá</li>
            <li className="step step-primary">Elegí</li>
            <li className="step step-primary">Comprá</li>
            <li className="step">Listo</li>
        </ul>
        :
        <ul className="steps">
            <li className="step step-primary">Conectá</li>
            <li className="step step-primary">Elegí</li>
            <li className="step step-primary">Comprá</li>
            <li className="step step-primary">Listo</li>
        </ul>
  )
}

export default Steps