'use client';

import { createPortal } from 'react-dom'
import { useState, useLayoutEffect } from 'react'

const createWrapperAndAppendToBody = (wrapperId) => {
      const wrapperElement = document.createElement('div')
      wrapperElement.setAttribute("id", wrapperId)
      document.body.appendChild(wrapperElement)
      return wrapperElement
    }

const ReactPortal = ({ children, wrapperId = "react-portal-wrapper" }) => {
    const [wrapperElement, setWrapperElement] = useState(null)

    useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element)

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) return null

    let element = document.getElementById(wrapperId)

    if (!element) {
        element = createWrapperAndAppendToBody(wrapperId)
    }

    return createPortal(children, element)
}

export default ReactPortal