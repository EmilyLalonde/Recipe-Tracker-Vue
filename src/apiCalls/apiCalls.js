export const findRecipies = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
  const response = await fetch(url)
  if(!response) {
    throw Error('Error returning your data')
  }
  const data = await response.json()
  return data.meals
}