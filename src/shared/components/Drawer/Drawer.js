import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import cn from 'classnames';
import useMountTransition from '@hooks/useMountTransition';

function createPortalRoot(myDocument) {
  const drawerRoot = myDocument && document.createElement('div');
  myDocument && drawerRoot.setAttribute('id', 'drawer-root');

  return drawerRoot;
}
const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = 'right',
  removeWhenClosed = true
}) => {
  const [myDocument, setMyDocument] = useState(null);
  const bodyRef = useRef(myDocument && document.querySelector('body'));
  const portalRootRef = useRef(
    (myDocument && document.getElementById('drawer-root')) ||
      createPortalRoot(myDocument)
  );
  const isTransitioning = useMountTransition(isOpen, 300);

  // Append portal root on mount
  useEffect(() => {
    setMyDocument(document);
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;

    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
      // Ensure scroll overflow is removed
      bodyEl.style.overflow = '';
    };
  }, []);

  // Prevent page scrolling when the drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = '';
      }
    };

    updatePageScroll();
  }, [isOpen]);

  // Allow Escape key to dismiss the drawer
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  return createPortal(
    <FocusTrap active={isOpen}>
      <div
        aria-hidden={isOpen ? 'false' : 'true'}
        className={cn('drawer-container', {
          open: isOpen,
          in: isTransitioning,
          className
        })}
      >
        <div className={cn('drawer', position)} role="dialog">
          {children}
        </div>
        <div className="backdrop" onClick={onClose} />
      </div>
    </FocusTrap>,
    portalRootRef.current
  );
};

export default Drawer;
