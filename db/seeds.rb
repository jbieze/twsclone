# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    demo_user = User.create(email: "terrybollea@wwe.com", username: "hulkster", password: "brooke4ever", city_id: 2)

    host1 = User.create(email: "person@mail.net", username: "harold", password: "haroldthehost", city_id: 2)

    c1 = City.create!(name: "SF Bay Area", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24744804%2F99100008917%2F1%2Foriginal.jpg?w=1000&rect=0%2C0%2C2160%2C1080&s=b25c7b2deb9cdc3fbb52efcbc7977671")
    c2 = City.create!(name: "New York City", img_url: "https://www.wigdorlaw.com/wp-content/uploads/2017/05/5.12.17-SuingNYCCOMPRESSED.jpg")
    c3 = City.create!(name: "London", img_url: "https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/2:1/w_2560/london-travel-guide-lede.jpg")
    c4 = City.create!(name: "Boston", img_url: "https://www.smartdestinations.com/img/pt/dest/Bos/att/Bos_Att_Boston_Sunset_Cruises/gallery/Boston-Sunset-Cruises-1.jpg")
    c5 = City.create!(name: "DC", img_url: "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/1200/600/90/secure.parksandresorts.wdpromedia.com/media/abd/refresh/north-america/washington-dc-philadelphia-tour/atlantic-day-05-capitol.jpg")
    c6 = City.create!(name: "Chicago", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F31129711%2F162248186408%2F1%2Foriginal.jpg?s=810a2a998d4b827e0590b125e5443ccb")

    e1 = Event.create!(address: "123 Actual Place", city_id: 2, host_id: 2, date_time: "2017-10-28 17:30:00")
    e2 = Event.create!(address: "456 Real Road", city_id: 2, host_id: 1, date_time: "2017-10-07 13:45:00")

    e3 = Event.create!(address: "789 Verifiable Street", city_id: 1, host_id: 2, date_time: "2017-10-28 17:30:00")
    e4 = Event.create!(address: "1011 Existing Avenu", city_id: 1, host_id: 1, date_time: "2017-10-07 13:45:00")

    e5 = Event.create!(address: "1213 Forreal Blvd", city_id: 3, host_id: 2, date_time: "2017-10-28 17:30:00")
    e6 = Event.create!(address: "1415 Definitely Road", city_id: 3, host_id: 1, date_time: "2017-10-07 13:45:00")

    e7 = Event.create!(address: "1617 Totally Court", city_id: 4, host_id: 2, date_time: "2017-10-28 17:30:00")
    e8 = Event.create!(address: "1819 True Lane", city_id: 4, host_id: 1, date_time: "2017-10-07 13:45:00")

    e9 = Event.create!(address: "2021 Accurate Road", city_id: 5, host_id: 2, date_time: "2017-10-28 17:30:00")
    e10 = Event.create!(address: "2223 Undeniable Street", city_id: 5, host_id: 1, date_time: "2017-10-07 13:45:00")

    e11 = Event.create!(address: "2425 Whatta Blvd", city_id: 6, host_id: 2, date_time: "2017-10-28 17:30:00")
    e12 = Event.create!(address: "2627 Completely Lane", city_id: 6, host_id: 1, date_time: "2017-10-07 13:45:00")
