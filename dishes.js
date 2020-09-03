import {
  carrot,
  apple,
  flour,
  sugar,
  rice,
  egg,
  potato,
  butter,
  fish,
  steak,
  shrimp
} from './ingredients'

class Dish {
  constructor(name, description, ingredients, estimatedTime){
    this._percentageOfMarkup = 20
    this._currencyType = '$'
    this.name = name
    this.description = description
    this.ingredients = ingredients
    this.estimatedTime = estimatedTime
  }
  getPrice(){
    const nettoPrice = this.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    const onePercent = nettoPrice / 100
    const bruttoPrice = (nettoPrice + onePercent * this._percentageOfMarkup).toFixed(2)
    return `${bruttoPrice}${this._currencyType}`
  }
}

export const todayDishes = [
  new Dish(
    'Carrot cake',
    'Carrot cake is cake that contains carrots mixed into the batter.',
    [carrot, flour, sugar, butter],
    20
  ),
  new Dish(
    'Apple cake',
    'Apple cake is a popular dessert produced with the main ingredient of apples.',
    [apple, flour, sugar, butter],
    20
  ),
  new Dish(
    'Fish with mashed potato',
    'The dish is sometimes referred to as "fisherman\'s pie" because the topping is similar to that of shepherd\'s pie, in that it uses mashed potatoes.',
    [fish, potato, butter],
    25
  ),
  new Dish(
    'Fried rise with shrimps',
    'Yeung chow (or Yangzhou) fried rice consists of generous portions of shrimp and scrambled egg.',
    [shrimp, egg, rice],
    15
  ),
  new Dish(
    'Beef steak',
    'A beefsteak, often called just steak, is a flat cut of beef with parallel faces, usually cut perpendicular to the muscle fibers.',
    [steak, butter],
    10
  ),
]