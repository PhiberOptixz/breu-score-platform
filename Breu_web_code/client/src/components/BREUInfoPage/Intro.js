import * as React from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button'
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 20,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(33 207 242) 0%,rgb(82 64 233) 50%,rgb(26 220 227) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(33 207 242) 0%,rgb(82 64 233) 50%,rgb(26 220 227) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(56 88 209) 0%, rgb(120 171 236) 50%, rgb(158 179 244) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(56 88 209) 0%, rgb(120 171 236) 50%, rgb(158 179 244) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <h1 onClick={() => console.log("click on B")}>B</h1>,
        2: <h1 onClick={() => console.log("click on R")}>R</h1>,
        3: <h1 onClick={() => console.log("click on E")}>E</h1>,
        4: <h1 onClick={() => console.log("click on U")}>U</h1>,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Believablility', 'Reliability', 'Emotion', 'Understandability'];

export default function intro() {
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                // controls
                // url={video}
                width="100%"
                height="100%"
                playing={true}
            />
            <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon} >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}