import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface portalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: portalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
