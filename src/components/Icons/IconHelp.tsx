import React from 'react';

import { IconWrapper } from 'components/Icons/IconWrapper';
import { IconProps } from 'types/baseTypes';
import { colors } from 'styles/themeDefault';

export const IconHelp: React.FC<IconProps> = ({ color = colors.defaultIcon() }) => {
    return (
        <IconWrapper viewBox="0 0 515.556 515.556">
            <path
                fill={color}
                d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm32.222 418.889h-64.444v-64.444h64.444zm32.222-147.769-32.222 32.222v18.88h-64.444v-32.222c0-8.543 3.398-16.74 9.44-22.782l41.662-41.662c8.48-8.48 13.342-20.233 13.342-32.222 0-17.763-14.459-32.222-32.222-32.222s-32.222 14.459-32.222 32.222v32.222h-64.444v-32.222c0-53.305 43.361-96.667 96.667-96.667s96.667 43.361 96.667 96.667c-.001 29.39-11.44 57.018-32.224 77.786z"
            />
        </IconWrapper>
    );
};
