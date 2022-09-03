import React, { useState, useEffect } from 'react'
import FlowGraph from './Graph'
import ToolBar from './components/ToolBar'
import '../reset.less'
import '../global.css'
import styles from './index.less'
import ConfigPanel from './components/ConfigPanel'
import './Graph/shape'

export default function () {
  const [isReady, setIsReady] = useState(false)

  const getContainerSize = () => {
    return {
      width: document.body.offsetWidth - 214,
      height: document.body.offsetHeight - 105,
    }
  }

  useEffect(() => {
    const graph = FlowGraph.init()
    setIsReady(true)
    const resizeFn = () => {
      const { width, height } = getContainerSize()
      graph.resize(width, height)
    }
    resizeFn()

    window.addEventListener('resize', resizeFn)
    return () => {
      window.removeEventListener('resize', resizeFn)
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>{isReady && <ToolBar />}</div>
      <div className={styles.content}>
        <div>
           <div id="stencil" className={styles.shapes}></div>
            {isReady && <ConfigPanel /> }
        </div>
        <div id="container" className="x6-graph" />
      </div>
    </div>
  )
}
