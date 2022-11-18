import PropTypes from 'prop-types';
import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import styled, { css } from 'styled-components';
import '@reach/dialog/styles.css';
import CloseSVG from '../images/cross-icon.svg';

const DialogOverlayComponent = styled(DialogOverlay)`
  background: hsla(0, 0%, 0%, 0.7);
  z-index: 10;
`;

const DialogContentComponent = styled(DialogContent)`
  margin: 30vh auto;
  width: 80vw;
  max-width: 33rem;
  padding: 1rem;
  border: 2px solid hsla(0, 0%, 0%, 0.8);
  ${({ theme }) => css`
    @media ${theme.breakpoints.large} {
      width: 60vw;
    }
  `}
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  width: 1.2rem;
  float: right;
  cursor: pointer;
`;

const Modal = ({ isOpen, onDismiss, children }) => {
  const AnimatedDialogOverlay = animated(DialogOverlayComponent);
  const AnimatedDialogContent = animated(DialogContentComponent);
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  });
  return (
    <div>
      {transitions(
        (styles, item) =>
          item && (
            <AnimatedDialogOverlay style={{ opacity: styles.opacity }} onClick={onDismiss}>
              <AnimatedDialogContent
                style={{
                  transform: styles.y.to((value) => `translate3d(0px, ${value}px, 0px)`),
                }}
              >
                <CloseButton type="button" onClick={onDismiss}>
                  <CloseSVG />
                </CloseButton>
                {children}
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Modal;
