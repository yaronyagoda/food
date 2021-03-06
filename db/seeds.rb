# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities => City.create([{ 'name': 'Chicago' }, { 'name': 'Copenhagen' }])
#   Mayor.create('name': 'Emanuel', city: cities.first)


rest1 = Restaurant.find_or_initialize_by('name': 'Herzog')
rest1.update_attributes(
    'speed' => 'Fast',
    'name' =>'Herzog',
    'food_type' => 'Vegan',
    'ten_bis' => true,
    'delivery' => false,
    'link' => 'https://www.facebook.com/Hertzog-%D7%94%D7%A8%D7%A6%D7%95%D7%92-669239419823508/ ',
    'description' =>"Herzog has great food!!! opens at 12:30 and there is an anonying waiter.",
    'rank' => 5,
    'address' => "Ibn Gabirol 48 tel aviv",
    'lat' => "32.0770713",
    'lang'=> "34.781474600000024")

rest1 = Restaurant.find_or_initialize_by('name': 'Giraffe')
rest1.update_attributes(
  'speed' => 'Slow',
  'name' => 'Giraffe',
  'food_type' => 'Asian',
  'ten_bis' => true,
  'delivery' => true,
  'link' => 'https://www.giraffe.co.il/',
  'description' => "Giraffe - nothing more to say",
  'rank' => 4,
  'address' => "Ibn Gabirol 49 tel aviv",
  'lat' => "32.0770739",
  'lang' => "34.78132240000002"
)

rest1 = Restaurant.find_or_initialize_by('name': 'River')
rest1.update_attributes(
  'speed' => 'Slow',
  'name' => 'River',
  'food_type' => 'Asian',
  'ten_bis' => true,
  'delivery' => true,
  'link' => 'http://river-bar.co.il/',
  'description' => "",
  'rank' => 2,
  'address' => "Ibn Gabirol 30 tel aviv",
  'lat' => "32.0749746",
      'lang' => "34.7817986"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Fresh')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Fresh',
  'food_type' => 'Salad',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'http://www.freshkitchen.co.il/',
  'description' => "Looks great, tastes bad.",
  'rank' => 1,
  'address' => "Ibn Gabirol 30 tel aviv",
  'lat' => "32.0749746",
      'lang' => "34.7817986"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Salsalat')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Salsalat',
  'food_type' => 'Salad',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'https://www.youtube.com',
  'description' => "Pretty good salads",
  'rank' => 3,
  'address' => "Ibn Gabirol 30 tel aviv",
  'lat' => "32.0749746",
      'lang' => "34.7817986"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Goocha Diner')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Goocha Diner',
  'food_type' => 'Dinner',
  'ten_bis' => true,
  'delivery' => true,
  'link' => 'http://www.thediner.co.il/',
  'description' => "A great burger",
  'rank' => 3,
  'address' => "Ibn Gabirol 14 tel aviv",
  'lat' => "32.0727065",
      'lang' => "34.78192469999999"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Heder Ochel')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Heder Ochel',
  'food_type' => 'Dinner',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'http://dininghall.co.il/',
  'description' => "",
  'rank' => 3,
  'address' => "shaul hamelech 23 tel aviv",
  'lat' => "32.0761591",
      'lang' => "34.78628309999999"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Indira')
rest1.update_attributes(
  'speed' => 'Slow',
  'name' => 'Indira',
  'food_type' => 'Asian',
  'ten_bis' => true,
  'delivery' => true,
  'link' => 'http://www.indira.co.il/',
  'description' => "",
  'rank' => 3,
  'address' => "Shaul hamelech 4 tel aviv",
  'lat' => "32.0755259",
      'lang' => "34.78257940000003"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Rustico')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Rustico',
  'food_type' => 'Italian',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'http://rustico.co.il/piazza/menus.html',
  'description' => "",
  'rank' => 4,
  'address' => "sarona tel aviv",
  'lat' => "32.086443",
      'lang' => "34.86826169999995"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Oban Koban')
rest1.update_attributes(
  'speed' => 'Slow',
  'name' => 'Oban Koban',
  'food_type' => 'Asian',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'http://obankoban.co.il/',
  'description' => "",
  'rank' => 3,
  'address' => "Haarbaa 4 tel aviv",
  'lat' => "32.0703637",
      'lang' => "34.78301550000003"
)

rest1 = Restaurant.find_or_initialize_by('name': 'HaMiznon')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'HaMiznon',
  'food_type' => 'Pita',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'http://www.hamiznon.co.il/',
  'description' => "Eyal Shani",
  'rank' => 3,
  'address' => "Ibn Gabirol 23 tel aviv",
  'lat' => "32.0736769",
      'lang' => "34.781730599999946"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Shishi')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Shishi',
  'food_type' => 'Sushi',
  'ten_bis' => false,
  'delivery' => true,
  'link' => 'http://shi-shi.co.il/',
  'description' => "Shoshana palce, no ten bis.",
  'rank' => 3,
  'address' => "Ibn Gabirol 33 tel aviv",
  'lat' => "32.0753649",
      'lang' => "34.781607099999974"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Vitrina')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Vitrina',
  'food_type' => 'Hamburger',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'https://www.youtube.com',
  'description' => "Considered to be Tel Avivs best burgers",
  'rank' => 5,
  'address' => "Ibn Gabirol 54 tel aviv",
  'lat' => "32.0781374",
      'lang' => "34.78136760000007"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Ad HaEzem Express')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => 'Ad HaEzem Express',
  'food_type' => 'Hamburger',
  'ten_bis' => true,
  'delivery' => false,
  'link' => 'http://www.adhaetzemex.co.il/',
  'description' => "Pretty good salads",
  'rank' => 4,
  'address' => "Ibn Gabirol 21 tel aviv",
  'lat' => "32.0733984",
      'lang' => "34.78173570000001"
)

rest1 = Restaurant.find_or_initialize_by('name': 'Wolfnights')
rest1.update_attributes(
  'speed' => 'Fast',
  'name' => "Wolfnights",
  'food_type' => 'Hamburger',
  'ten_bis' => true,
  'delivery' => true,
  'link' => 'http://www.wolfnights.co.il/m',
  'description' => "Great American Burgers",
  'rank' => 4,
  'address' => "Ibn Gabirol 67 tel aviv",
  'lat' => "32.0792696",
      'lang' => "34.781129899999996"
)
