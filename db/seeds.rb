# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Restaurant.find_or_create_by(name: 'Herzog') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Herzog'
  rest.food_type = 'Vegan'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'https://www.facebook.com/Hertzog-%D7%94%D7%A8%D7%A6%D7%95%D7%92-669239419823508/ '
  rest.description = "Herzog has great food!!! opens at 12:30 and there is an anonying waiter."
  rest.rank = 5
  rest.address = "Ibn Gabirol 48 tel aviv"
end

Restaurant.find_or_create_by(name: 'Giraffe') do |rest|
  rest.speed = 'Slow'
  rest.name = 'Giraffe'
  rest.food_type = 'Asian'
  rest.ten_bis = true
  rest.delivery = true
  rest.link = 'https://www.giraffe.co.il/'
  rest.description = "Giraffe - nothing more to say"
  rest.rank = 4
  rest.address = "Ibn Gabirol 49 tel aviv"
end

Restaurant.find_or_create_by(name: 'River') do |rest|
  rest.speed = 'Slow'
  rest.name = 'River'
  rest.food_type = 'Asian'
  rest.ten_bis = true
  rest.delivery = true
  rest.link = 'http://river-bar.co.il/'
  rest.description = ""
  rest.rank = 2
  rest.address = "Ibn Gabirol 30 tel aviv"
end

Restaurant.find_or_create_by(name: 'Fresh') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Fresh'
  rest.food_type = 'Salad'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'http://www.freshkitchen.co.il/'
  rest.description = "Looks great, tastes bad."
  rest.rank = 1
  rest.address = "Ibn Gabirol 30 tel aviv"
end

Restaurant.find_or_create_by(name: 'Salsalat') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Salsalat'
  rest.food_type = 'Salad'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'https://www.youtube.com'
  rest.description = "Pretty good salads"
  rest.rank = 3
  rest.address = "Ibn Gabirol 30 tel aviv"
end

Restaurant.find_or_create_by(name: 'Goocha Diner') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Goocha Diner'
  rest.food_type = 'Dinner'
  rest.ten_bis = true
  rest.delivery = true
  rest.link = 'http://www.thediner.co.il/'
  rest.description = "A great burger"
  rest.rank = 3
  rest.address = "Ibn Gabirol 14 tel aviv"
end


Restaurant.find_or_create_by(name: 'Heder Ochel') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Heder Ochel'
  rest.food_type = 'Dinner'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'http://dininghall.rest.co.il/'
  rest.description = ""
  rest.rank = 3
  rest.address = "shaul hamelech 23 tel aviv"
end


Restaurant.find_or_create_by(name: 'Indira') do |rest|
  rest.speed = 'Slow'
  rest.name = 'Indira'
  rest.food_type = 'Asian'
  rest.ten_bis = true
  rest.delivery = true
  rest.link = 'http://www.indira.co.il/'
  rest.description = ""
  rest.rank = 3
  rest.address = "Shaul hamelech 4 tel aviv"
end

Restaurant.find_or_create_by(name: 'Rustico') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Rustico'
  rest.food_type = 'Italian'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'http://rustico.co.il/piazza/menus.html'
  rest.description = ""
  rest.rank = 4
  rest.address = "Kaplan 22 tel aviv"
end


Restaurant.find_or_create_by(name: 'Oban Koban') do |rest|
  rest.speed = 'Slow'
  rest.name = 'Oban Koban'
  rest.food_type = 'Asian'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'http://obankoban.rest.co.il/'
  rest.description = ""
  rest.rank = 3
  rest.address = "Haarbaa 4rus tel aviv"
end


Restaurant.find_or_create_by(name: 'HaMiznon') do |rest|
  rest.speed = 'Fast'
  rest.name = 'HaMiznon'
  rest.food_type = 'Pita'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'http://www.hamiznon.co.il/'
  rest.description = "Eyal Shani"
  rest.rank = 3
  rest.address = "Ibn Gabirol 23 tel aviv"
end

Restaurant.find_or_create_by(name: 'Shishi') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Shishi'
  rest.food_type = 'Sushi'
  rest.ten_bis = false
  rest.delivery = true
  rest.link = 'http://shi-shi.co.il/'
  rest.description = "Shoshana palce, no ten bis."
  rest.rank = 3
  rest.address = "Ibn Gabirol 33 tel aviv"
end

Restaurant.find_or_create_by(name: 'Vitrina') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Vitrina'
  rest.food_type = 'Hamburger'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'https://www.youtube.com'
  rest.description = "Considered to be Tel Avivs best burgers"
  rest.rank = 5
  rest.address = "Ibn Gabirol 54 tel aviv"
end

Restaurant.find_or_create_by(name: 'Ad HaEzem Express') do |rest|
  rest.speed = 'Fast'
  rest.name = 'Ad HaEzem Express'
  rest.food_type = 'Hamburger'
  rest.ten_bis = true
  rest.delivery = false
  rest.link = 'http://www.adhaetzemex.co.il/'
  rest.description = "Pretty good salads"
  rest.rank = 4
  rest.address = "Ibn Gabirol 21 tel aviv"
end

Restaurant.find_or_create_by(name: "Wolfenight's") do |rest|
  rest.speed = 'Fast'
  rest.name = "Wolfenight's"
  rest.food_type = 'Hamburger'
  rest.ten_bis = true
  rest.delivery = true
  rest.link = 'http://www.wolfnights.co.il/m'
  rest.description = "Great American Burgers"
  rest.rank = 4
  rest.address = "Ibn Gabirol 67 tel aviv"
end