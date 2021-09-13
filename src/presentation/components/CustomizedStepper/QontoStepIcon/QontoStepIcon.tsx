import { useQontoStepIconStyles } from './qonto-step-icon.style';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FC } from 'react';

const QontoStepIcon: FC<any> = (props) => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

export default QontoStepIcon;