import React from 'react';

import { IconWrapper } from 'components/Icons/IconWrapper';
import { IconProps } from 'types/baseTypes';
import { colors } from 'styles/themeDefault';

export const IconDownload: React.FC<IconProps> = ({ color = colors.defaultIcon() }) => {
    return (
        <IconWrapper viewBox="0 0 49 49">
            <g>
                <rect fill={color} x="27.5" y="5" width="6" height="10" />
                <path
                    fill={color}
                    d="M39.914,0H0.5v49h48V8.586L39.914,0z M10.5,2h26v16h-26V2z M39.5,47h-31V26h31V47z"
                />
                <path
                    fill={color}
                    d="M13.5,32h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S12.947,32,13.5,32z"
                />
                <path
                    fill={color}
                    d="M13.5,36h10c0.553,0,1-0.447,1-1s-0.447-1-1-1h-10c-0.553,0-1,0.447-1,1S12.947,36,13.5,36z"
                />
                <path
                    fill={color}
                    d="M26.5,36c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71s-0.11-0.521-0.29-0.71c-0.37-0.37-1.04-0.37-1.41,0
                    c-0.19,0.189-0.3,0.439-0.3,0.71c0,0.27,0.109,0.52,0.29,0.71C25.979,35.89,26.229,36,26.5,36z"
                />
            </g>
        </IconWrapper>
    );
};
