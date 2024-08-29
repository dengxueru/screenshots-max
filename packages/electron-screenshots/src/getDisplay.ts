import { Rectangle, screen } from 'electron'

export interface Display extends Rectangle {
  id: number;
  scaleFactor: number;
}

export default (): Display => {
  const point = screen.getCursorScreenPoint()
  const { id, bounds, scaleFactor } = screen.getDisplayNearestPoint(point)
  return {
    id,
    scaleFactor,
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height
  }
}
