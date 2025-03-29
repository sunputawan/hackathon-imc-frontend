
type gachaProps = {
    isSpinning: boolean;
    sizeMultiplier: number;
    setIsSpinning: React.Dispatch<React.SetStateAction<boolean>>;
}
const Machine = ({isSpinning, setIsSpinning, sizeMultiplier}: gachaProps) => {
    return (
        <img 
            src={isSpinning ? "/images/machine.gif" : "/images/machine.png"}
            width={440}
            height={440}
            style={{
                transform: `scale(${sizeMultiplier})`,
            }}
        />
    )
}

export default Machine