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
