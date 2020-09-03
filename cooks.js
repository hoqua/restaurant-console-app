class Cook {
  constructor(name){
    this.name = name
    this._cookingQueue = []
    this._maxDishes = 5
    this._estimationIn = 'min'
  }

  getCookingDishesCount(){
    return this._cookingQueue.length
  }

  cook(dish){
    if(this._cookingQueue.length >= this._maxDishes) throw Error(`Can't get more dishes`)
    this._cookingQueue.push(dish)
  }

  getCookingEstimation(){
    const dishCookingTimeSum = this._cookingQueue.reduce((acc, dish) => acc + dish.estimatedTime, 0)
    return `${dishCookingTimeSum}${this._estimationIn}`
  }
}

export const todayCooks = [
  new Cook('John'),
  new Cook('Sam'),
  new Cook('Don')
]