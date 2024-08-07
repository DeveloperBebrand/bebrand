"use client"
import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

// Utility function for smooth scrolling to an element
const scrollToElement = (id: string, offset: number = 0) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth'
    })
  } else {
    console.error(`Element with id ${id} not found`)
  }
}

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [pageHeight, setPageHeight] = useState(0)
  const navbarHeight = 60 // Adjust this value to match your navbar height

  // Update page height when resizing
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => resizePageHeight(entries))
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current)
    }
    return () => resizeObserver.disconnect()
  }, [resizePageHeight])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const spring = useSpring(transform, { damping: 15, mass: 0.27, stiffness: 55 })

  // Handle anchor link clicks
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault()
        const id = target.getAttribute('href')?.substring(1)
        if (id) {
          console.log(`Scrolling to element with id: ${id}`)
          scrollToElement(id, navbarHeight)
        } else {
          console.error('No id found in href attribute')
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [navbarHeight])

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default SmoothScroll