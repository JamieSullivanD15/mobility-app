import React from 'react';
import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Font.module.scss';

import type { FontColour } from './Text';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IconBaseProps {
  icon: IconDefinition;
  colour?: FontColour;
}

interface IconProps extends IconBaseProps {
  classNames?: string;
}

export const Icon = ({
  icon,
  colour = 'white',
  classNames = '',
}: IconProps) => {
  const classes: string = clsx({
    [styles['font-sm']]: true,
    [styles['font-dark']]: colour === 'dark',
    [styles['font-gray-dark']]: colour === 'gray',
    [styles['font-white']]: colour === 'white',
    [classNames]: true,
  });

  return (
    <FontAwesomeIcon
      icon={icon}
      className={classes}
    />
  );
};
