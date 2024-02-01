import { getRandomItemsFromArray } from '@/utils/getRandomItems'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function fetchRandomMeal() {
  const response = await fetch(`${BASE_URL}/random.php`)
  const data = await response.json()

  return data
}

export async function fetchCategoryList() {
  const response = await fetch(`${BASE_URL}/categories.php`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipeById(id) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await response.json()

  return data
}

export async function fetchMealListForReview() {
  const response = await fetch(`${BASE_URL}/filter.php?a=Canadian`)
  const data = await response.json()

  let randomMeals = []
  if (data?.meals?.length > 5) {
    randomMeals = getRandomItemsFromArray(data?.meals, 11)
    return randomMeals
  } else {
    // return null
  }
}

export async function fetchRandomPeopleForReview() {
  const response = await fetch('https://randomuser.me/api/?results=11')
  const data = await response.json()

  return data
}
