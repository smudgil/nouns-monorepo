import classes from "./VoteProgressBar.module.css";

const VoteProgresBar: React.FC<{
    variant: string;
    percentage: number;
  }> = props => {
    const { variant, percentage } = props;

    let progressBarColor;
    let backgroundColor;
    switch (variant) {
        case 'for':
            progressBarColor = 'var(--brand-color-green)'
            backgroundColor = 'var(--brand-color-green-translucent)'
            break;
        case 'aginst':
            progressBarColor = 'var(--brand-color-red)'
            backgroundColor = 'var(--brand-color-red-translucent)'
            break;
        default:
            progressBarColor = 'var(--brand-gray-light-text)'
            backgroundColor = 'var(--brand-gray-light-text-translucent)'
            break;
    }

    return (
        <div className={classes.wrapper} style={{backgroundColor: backgroundColor}}>
            <div style={{
                width: `${percentage}%`,
                backgroundColor: progressBarColor,
            }} className={classes.progressBar}>
            </div>
        </div>
    );
};

export default VoteProgresBar;