import {todayDishes} from './dishes'
import {todayCooks} from './cooks'
import {systemErrorMessageStyle, systemInfoMessageStyle, systemSuccessMessageStyle, fontBold} from './styles'

console.log(`%c Today's offer:`, systemInfoMessageStyle)

todayDishes.forEach(dish => {
  console.log(
    ` Name of the dish: %c ${dish.name}`,
    fontBold,
    '\n',
    dish.description,
    '\n',
    `Ingredients: ${dish.ingredients.map( ingredient => ingredient.name).join(', ')}`,
    '\n',
    dish.getPrice(),
  )
})

console.log(`%c Cooks on duty today:`, systemInfoMessageStyle)

todayCooks.forEach(cook => console.log(cook.name))

console.log(`%c To order something use order('Name of the dish') function in console`, systemInfoMessageStyle)

window.order = function(dishName) {
  if(!todayDishes.some( dish => dish.name === dishName)){
    console.log(`%c No dishes like that found. Try to copy and paste name of the dish.`, systemErrorMessageStyle)
    return
  }

  const [ lessBusiestCook ] = todayCooks.sort( (a,b) => a.getCookingDishesCount() - b.getCookingDishesCount())

  try{
    const dishToCook = todayDishes.find( dish => dish.name === dishName)
    lessBusiestCook.cook(dishToCook)
    const estimatedTime = lessBusiestCook.getCookingEstimation()
    console.log(`%c You ordered ${dishName} from ${lessBusiestCook.name} and estimated time is ${estimatedTime}`, systemSuccessMessageStyle)
  }catch (e) {
    console.log('%c All cooks are busy', systemErrorMessageStyle)
  }

}


