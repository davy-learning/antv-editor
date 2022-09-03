import { Graph } from '@antv/x6'
// import './shape'
export default class FlowGraph {
  public static graph: Graph
  public static init() {
    this.graph = new Graph({
      container: document.getElementById('preview')!,
      width: 1000,
      height: 800,
      panning: {
        enabled: true,
        eventTypes: ['leftMouseDown', 'rightMouseDown', 'mouseWheel'],
        modifiers: 'ctrl',
      },
      mousewheel: {
        enabled: true,
        zoomAtMousePosition: true,
        modifiers: 'ctrl',
        minScale: 0.5,
        maxScale: 3,
      },
      connecting: {
        router: 'manhattan',
        connector: {
          name: 'rounded',
          args: {
            radius: 8,
          },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: {
          radius: 20,
        }
      }
    })
    return this.graph
  }
}
