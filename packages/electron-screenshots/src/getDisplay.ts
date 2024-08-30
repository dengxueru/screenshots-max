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
    x: Math.floor(bounds.x * scaleFactor),
    y: Math.floor(bounds.y * scaleFactor),
    width: Math.floor(bounds.width * scaleFactor),
    height: Math.floor(bounds.height * scaleFactor)
  }
}
