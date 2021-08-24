import Point from './Point';

// A LINE that is tangential to a circle means it only touches the circle at ONE POINT
// to solve this we use <= instead of < when comparing the distance against the radius
// because if the distance is equal to the radius then that point is tangential.

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      if (((Point.x - center.x) * (Point.x - center.x)) + ((Point.y - center.y) * (Point.y - center.y)) <= (radius * radius)) { return true; } else { return false; }
    }
  }
}
