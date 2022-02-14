export default function Food({ food }) {
    return(
    <ul>
      {food.map(foodItem => <li key={foodItem}>{foodItem}</li>)}
    </ul>
    )
  }