# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

leah = User.create(username: 'LeahB')


article1 = Article.create(
    title: "Atmospheric Methane Levels Are Going Up—And No One Knows Why",
    content: "This story originally appeared on Undark and is part of the Climate Desk collaboration.
    Every week dozens of metal flasks arrive at NOAAs Earth System Research Laboratory in Boulder, Colorado, each one loaded with air from a distant corner of the world. Rese… [+24577 chars]",
    urlToImage: "https://media.wired.com/photos/5cdca4c5af643e2f373ebc3d/191:100/pass/science_refinery-fire_462840162.jpg",
    author: "Jonathan Mingle",
    url: "https://www.wired.com/story/atmospheric-methane-levels-are-going-up-and-no-one-knows-why/",
    user_id: 1)
