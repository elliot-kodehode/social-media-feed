const posts = [
    {
        username: "adventureseeker",
        fullName: "John Smith",
        content: "Hiking through the mountains this weekend was incredible! ⛰️🌲 #adventure #nature",
        likes: 111,
        timestamp: "2024-03-07T16:25:00"
    },
    {
        username: "petlover123",
        fullName: "Emma Johnson",
        content: "Spent the day at the animal shelter volunteering. 🐶🐱 It's always so rewarding. #animallover #volunteering",
        likes: 222,
        timestamp: "2024-03-06T11:10:00"
    },
    {
        username: "cookingenthusiast",
        fullName: "Liam Brown",
        content: "Tried out a new recipe for dinner tonight. 🍲 It turned out delicious! #cooking #food",
        likes: 333,
        timestamp: "2024-03-05T19:55:00"
    },
    {
        username: "gardeninglover",
        fullName: "Olivia Smith",
        content: "Spent the day in my garden planting flowers. 🌸🌼 #gardening #nature",
        likes: 444,
        timestamp: "2024-03-04T13:40:00"
    },
    {
        username: "filmfanatic",
        fullName: "Noah Johnson",
        content: "Watched a classic movie marathon last night. 🎬 So many great films! #movies #cinema",
        likes: 555,
        timestamp: "2024-03-03T20:20:00"
    },
    {
        username: "photographylover",
        fullName: "Sophia Wilson",
        content: "Took some amazing shots during sunset today. 📸🌅 #photography #sunset",
        likes: 666,
        timestamp: "2024-03-02T17:30:00"
    },
    {
        username: "yogapractitioner",
        fullName: "Liam Johnson",
        content: "Morning yoga session to start the day right. 🧘‍♀️ Feeling refreshed and energized. #yoga #wellness",
        likes: 777,
        timestamp: "2024-03-01T08:45:00"
    },
    {
        username: "codingenthusiast",
        fullName: "Emma Davis",
        content: "Worked on a new coding project all night. 💻 Excited to see it come together. #coding #programming",
        likes: 888,
        timestamp: "2024-02-29T23:55:00"
    },
    {
        username: "fashionista",
        fullName: "Noah Wilson",
        content: "In love with my new outfit! 👗💁‍♀️ #fashion #style",
        likes: 999,
        timestamp: "2024-02-28T14:15:00"
    },
    {
        username: "coffeeaddict",
        fullName: "Sophia Martinez",
        content: "Nothing like a strong cup of coffee to kickstart the day. ☕️ #coffee #morning",
        likes: 101,
        timestamp: "2024-02-27T09:30:00"
    },
    {
        username: "fitnessjunkie",
        fullName: "Liam Brown",
        content: "Just finished a killer workout! 💪 Feeling the burn. #fitness #exercise",
        likes: 202,
        timestamp: "2024-02-26T18:20:00"
    },
    {
        username: "bookworm88",
        fullName: "Emma Wilson",
        content: "Started reading a new book today. 📚 Can't put it down! #reading #booklover",
        likes: 303,
        timestamp: "2024-02-25T11:50:00"
    },
    {
        username: "musiclover456",
        fullName: "Noah Johnson",
        content: "Attended an incredible concert last night! 🎶🤘 #livemusic #goodvibes",
        likes: 404,
        timestamp: "2024-02-24T22:45:00"
    },
    {
        username: "beachbum22",
        fullName: "Olivia Martinez",
        content: "Spent the day soaking up the sun at the beach. 🏖️☀️ #beachday #relaxation",
        likes: 505,
        timestamp: "2024-02-23T13:35:00"
    },
    {
        username: "artistic_soul",
        fullName: "Noah Wilson",
        content: "Finished my latest painting! 🎨 Can't wait to share it with everyone. #art #creativity",
        likes: 606,
        timestamp: "2024-02-22T16:40:00"
    },
    {
        username: "techgeek789",
        fullName: "Liam Garcia",
        content: "Just launched my new app! 📱Excited to see how it performs. #tech #innovation",
        likes: 707,
        timestamp: "2024-02-21T09:20:00"
    },
    {
        username: "traveler22",
        fullName: "Emma Clark",
        content: "Exploring the beautiful beaches of Bali! 🏖️☀️ #wanderlust #travelgram",
        likes: 808,
        timestamp: "2024-02-20T14:10:00"
    },
    {
        username: "foodiegal",
        fullName: "Noah Davis",
        content: "Indulged in some delicious street food today. 🌮🍜 #foodie #streetfood",
        likes: 909,
        timestamp: "2024-02-19T20:00:00"
    },
    {
        username: "meditationlover",
        fullName: "Sophia Martinez",
        content: "Took some time for meditation and self-reflection today. 🧘‍♂️✨ #meditation #mindfulness",
        likes: 210,
        timestamp: "2024-02-18T17:45:00"
    },
    {
        username: "workhardplayhard",
        fullName: "Liam Davis",
        content: "Worked hard all week, now it's time to unwind! 🎉 #weekendvibes #relaxation",
        likes: 321,
        timestamp: "2024-02-17T12:30:00"
    },
    {
        username: "naturelover",
        fullName: "Emma Wilson",
        content: "Spent the day hiking in the forest. 🌲🍃 Such a peaceful escape. #nature #hiking",
        likes: 432,
        timestamp: "2024-02-16T09:15:00"
    },
    {
        username: "earlybird",
        fullName: "Noah Smith",
        content: "Early morning run to start the day on the right foot. 🏃‍♂️☀️ #running #exercise",
        likes: 543,
        timestamp: "2024-02-15T07:00:00"
    },
    {
        username: "musiclover123",
        fullName: "Sophia Martinez",
        content: "Discovering new music is my favorite pastime. 🎵🎧 #music #discover",
        likes: 654,
        timestamp: "2024-02-14T18:50:00"
    },
    {
        username: "gamerpro",
        fullName: "Liam Johnson",
        content: "Spent the whole day gaming. 🎮 Leveling up! #gaming #gamers",
        likes: 765,
        timestamp: "2024-02-13T15:40:00"
    },
    {
        username: "travelbug",
        fullName: "Emma Brown",
        content: "Wanderlust kicking in again. ✈️ Planning the next adventure! #travel #adventure",
        likes: 876,
        timestamp: "2024-02-12T10:35:00"
    },
    {
        username: "healthyliving",
        fullName: "Noah Garcia",
        content: "Cooked a nutritious meal for dinner tonight. 🥗🍽️ Eating clean feels great! #healthyeating #nutrition",
        likes: 987,
        timestamp: "2024-02-11T19:20:00"
    },
    {
        username: "artlover",
        fullName: "Sophia Davis",
        content: "Visited an art gallery today. 🖼️ So much talent on display! #art #inspiration",
        likes: 321,
        timestamp: "2024-02-10T14:15:00"
    },
    {
        username: "motivationnation",
        fullName: "Liam Wilson",
        content: "Every day is a new opportunity to chase your dreams. 💫 #motivation #dreambig",
        likes: 432,
        timestamp: "2024-02-09T09:10:00"
    },
    {
        username: "doglover",
        fullName: "Emma Johnson",
        content: "Took my furry friend for a long walk today. 🐕🚶‍♂️ #doglover #mansbestfriend",
        likes: 543,
        timestamp: "2024-02-08T16:05:00"
    },
    {
        username: "fashionforward",
        fullName: "Noah Martinez",
        content: "Experimenting with different fashion styles today. 👠👗 #fashion #experiment",
        likes: 654,
        timestamp: "2024-02-07T11:00:00"
    },
    {
        username: "coffeetime",
        fullName: "Sophia Brown",
        content: "Midday coffee break to recharge. ☕️ #coffee #breaktime",
        likes: 765,
        timestamp: "2024-02-06T18:55:00"
    },
    {
        username: "productive",
        fullName: "Liam Garcia",
        content: "Managed to check off everything on my to-do list today. ✔️ #productivity #goals",
        likes: 876,
        timestamp: "2024-02-05T13:50:00"
    },
    {
        username: "staypositive",
        fullName: "Emma Wilson",
        content: "Choosing to see the good in every situation. 🌟 #positivity #optimism",
        likes: 987,
        timestamp: "2024-02-04T08:45:00"
    },
    {
        username: "foodiegirl",
        fullName: "Noah Davis",
        content: "Tried a new restaurant for lunch today. 🍽️ The food was amazing! #foodie #yum",
        likes: 210,
        timestamp: "2024-02-03T17:40:00"
    },
    {
        username: "medstudent",
        fullName: "Sophia Martinez",
        content: "Late-night study session at the library. 📚💉 #medschool #studying",
        likes: 321,
        timestamp: "2024-02-02T12:35:00"
    },
    {
        username: "fitnessenthusiast",
        fullName: "Liam Wilson",
        content: "Completed a challenging workout today. 💪 Feeling stronger than ever! #fitness #strength",
        likes: 432,
        timestamp: "2024-02-01T07:30:00"
    },
    {
        username: "traveladventures",
        fullName: "Emma Brown",
        content: "Wandering through the streets of Rome. 🇮🇹 So much history and beauty! #travel #explore",
        likes: 543,
        timestamp: "2024-01-31T16:25:00"
    },
    {
        username: "selfcare",
        fullName: "Noah Garcia",
        content: "Taking a break to focus on self-care today. 🛁💆‍♂️ #selfcare #relaxation",
        likes: 654,
        timestamp: "2024-01-30T11:20:00"
    },
    {
        username: "booklover",
        fullName: "Sophia Johnson",
        content: "Lost in the pages of a good book. 📖 #reading #escape",
        likes: 765,
        timestamp: "2024-01-29T18:15:00"
    },
    {
        username: "sunnydays",
        fullName: "Liam Wilson",
        content: "Enjoying the sunshine and warm weather. ☀️ #sunshine #happiness",
        likes: 876,
        timestamp: "2024-01-28T13:10:00"
    },
    {
        username: "nightowl",
        fullName: "Emma Davis",
        content: "Late-night thoughts and reflections. 🌙 #latenight #introspection",
        likes: 987,
        timestamp: "2024-01-27T08:05:00"
    },
    {
        username: "musicjunkie",
        fullName: "Noah Garcia",
        content: "Attended an epic music festival over the weekend. 🎶🎉 #music #festival",
        likes: 210,
        timestamp: "2024-01-26T17:00:00"
    },
    {
        username: "travelpics",
        fullName: "Sophia Johnson",
        content: "Capturing memories from my latest adventure. 📷✈️ #travel #memories",
        likes: 321,
        timestamp: "2024-01-25T11:55:00"
    },
    {
        username: "motivationalcoach",
        fullName: "Liam Martinez",
        content: "Believe in yourself and anything is possible. 💪🌟 #motivation #believe",
        likes: 432,
        timestamp: "2024-01-24T06:50:00"
    },
    {
        username: "dogmom",
        fullName: "Emma Wilson",
        content: "Spoiling my fur baby with treats today. 🐾🐶 #dogmom #puppylove",
        likes: 543,
        timestamp: "2024-01-23T15:45:00"
    },
    {
        username: "artisticmind",
        fullName: "Noah Johnson",
        content: "Finding inspiration in the world around me. 🎨✨ #art #inspiration",
        likes: 654,
        timestamp: "2024-01-22T10:40:00"
    },
    {
        username: "technerd",
        fullName: "Sophia Brown",
        content: "Geeking out over the latest tech gadgets. 🤓📱 #tech #gadgets",
        likes: 765,
        timestamp: "2024-01-21T17:35:00"
    },
    {
        username: "fitnessfreak",
        fullName: "Liam Davis",
        content: "Never skip a Monday workout! 💪 #fitness #mondaymotivation",
        likes: 876,
        timestamp: "2024-01-20T12:30:00"
    },
    {
        username: "wanderlust",
        fullName: "Emma Martinez",
        content: "Dreaming of my next travel destination. 🌍✈️ #wanderlust #travel",
        likes: 987,
        timestamp: "2024-01-19T07:25:00"
    }
];

export default posts;