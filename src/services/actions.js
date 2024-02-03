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

export async function fetchCountryList() {
  const response = await fetch(`${BASE_URL}/list.php?a=list`)
  const data = await response.json()

  return data
}

export async function fetchIngredientList() {
  const response = await fetch(`${BASE_URL}/list.php?i=list`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipeById(id) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipesBySearch(word) {
  const response = await fetch(`${BASE_URL}/search.php?s=${word}`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipesByFirstLetter(letter) {
  const response = await fetch(`${BASE_URL}/search.php?f=${letter}`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipesByMainIngredient(ingredient) {
  const response = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipesByCategory(category) {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`)
  const data = await response.json()

  return data
}

export async function fetchMealRecipesByCountry(country) {
  const response = await fetch(`${BASE_URL}/filter.php?a=${country}`)
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
