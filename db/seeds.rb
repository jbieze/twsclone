# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    demo_user = User.create(email: "terrybollea@wwe.com", username: "hulkster", password: "brooke4ever")

    c1 = City.create!(name: "SF Bay Area", img_url: "http://www.hrwiki.org/w/images/thumb/0/03/404.PNG/800px-404.PNG")
    c2 = City.create!(name: "New York City", img_url: "http://www.hrwiki.org/w/images/thumb/0/03/404.PNG/800px-404.PNG")
    c3 = City.create!(name: "London", img_url: "https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/2:1/w_2560/london-travel-guide-lede.jpg")
    c4 = City.create!(name: "Boston", img_url: "http://www.hrwiki.org/w/images/thumb/0/03/404.PNG/800px-404.PNG")
    c5 = City.create!(name: "DC", img_url: "http://www.hrwiki.org/w/images/thumb/0/03/404.PNG/800px-404.PNG")
    c6 = City.create!(name: "Chicago", img_url: "http://www.hrwiki.org/w/images/thumb/0/03/404.PNG/800px-404.PNG")
