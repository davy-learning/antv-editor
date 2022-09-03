import React, { useEffect } from 'react'
import PreviewGraph from './Graph/preview'
import FlowGraph from './Graph'
import '../reset.less'
import '../global.css'
import styles from './index.less'
import lodash from 'lodash'
import '@antv/x6-react-shape'
import {PopoverView} from './components/Actions/PopoverView'

export default function (props: any) {
  const getContainerSize = () => {
    return {
      width: document.body.offsetWidth - 214,
      height: document.body.offsetHeight - 105,
    }
  }
  useEffect(() => {
    const {graph} = FlowGraph
    const previewGraph = PreviewGraph.init()
    const jsons = graph.toJSON()
    jsons.cells.forEach(cell => {
      if(cell.shape === 'custom-rect'){
        cell.shape = 'react-shape'
        lodash.set(cell, 'attrs.body.stroke', 'black')
        cell.component = <PopoverView text={cell.attrs?.label?.textWrap?.text} size={cell.size} />
      }
    })
    previewGraph.fromJSON(jsons)
    const resizeFn = () => {
      const { width, height } = getContainerSize()
      previewGraph.resize(width, height)
    }
    resizeFn()

    window.addEventListener('resize', resizeFn)
    return () => {
      window.removeEventListener('resize', resizeFn)
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <div id="preview" className="x6-graph" />
    </div>
  )
}
