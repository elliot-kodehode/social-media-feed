const posts = [
    {
        username: "fashionista",
        fullName: "Ava Garcia",
        content: "In love with my new outfit! 👗",
        likes: 999,
        timestamp: "Posted 1 hour ago"
    },
    {
        username: "codingenthusiast",
        fullName: "Daniel Johnson",
        content: "Worked on a new coding project all night. 💻 Excited to see it come together.",
        likes: 888,
        timestamp: "Posted 2 hours ago"
    },
    {
        username: "yogapractitioner",
        fullName: "Sophia Martinez",
        content: "Morning yoga session to start the day right. 🧘‍♀️ Feeling refreshed and energized.",
        likes: 777,
        timestamp: "Posted 3 hours ago"
    },
    {
        username: "photographylover",
        fullName: "James Wilson",
        content: "Took some amazing shots during sunset today. 📸🌅",
        likes: 666,
        timestamp: "Posted 4 hours ago"
    },
    {
        username: "filmfanatic",
        fullName: "Olivia Davis",
        content: "Watched a classic movie marathon last night. 🎬 So many great films!",
        likes: 555,
        timestamp: "Posted 5 hours ago"
    },
    {
        username: "gardeninglover",
        fullName: "Michael Brown",
        content: "Spent the day in my garden planting flowers. 🌸🌼",
        likes: 444,
        timestamp: "Posted 6 hours ago"
    },
    {
        username: "cookingenthusiast",
        fullName: "Emily Johnson",
        content: "Tried out a new recipe for dinner tonight. 🍲 It turned out delicious!",
        likes: 333,
        timestamp: "Posted 7 hours ago"
    },
    {
        username: "petlover123",
        fullName: "John Doe",
        content: "Spent the day at the animal shelter volunteering. 🐶🐱 It's always so rewarding.",
        likes: 222,
        timestamp: "Posted 8 hours ago"
    },
    {
        username: "adventureseeker",
        fullName: "Jane Smith",
        content: "Hiking through the mountains this weekend was incredible! ⛰️🌲",
        likes: 111,
        timestamp: "Posted 9 hours ago"
    },
    {
        username: "traveler22",
        fullName: "Samantha White",
        content: "Exploring the beautiful beaches of Bali! 🏖️☀️",
        likes: 808,
        timestamp: "Posted 10 hours ago"
    },
    {
        username: "foodiegal",
        fullName: "Matthew Johnson",
        content: "Indulged in some delicious street food today. 🌮🍜",
        likes: 909,
        timestamp: "Posted 11 hours ago"
    },
    {
        username: "meditationlover",
        fullName: "Sophie Brown",
        content: "Took some time for meditation and self-reflection today. 🧘‍♂️✨",
        likes: 210,
        timestamp: "Posted 12 hours ago"
    },
    {
        username: "workhardplayhard",
        fullName: "David Lee",
        content: "Worked hard all week, now it's time to unwind! 🎉",
        likes: 321,
        timestamp: "Posted 13 hours ago"
    },
    {
        username: "naturelover",
        fullName: "Lily Martinez",
        content: "Spent the day hiking in the forest. 🌲🍃",
        likes: 432,
        timestamp: "Posted 14 hours ago"
    },
    {
        username: "earlybird",
        fullName: "Ethan Taylor",
        content: "Early morning run to start the day on the right foot. 🏃‍♂️☀️",
        likes: 543,
        timestamp: "Posted 15 hours ago"
    },
    {
        username: "musiclover123",
        fullName: "Sophia Garcia",
        content: "Discovering new music is my favorite pastime. 🎵🎧",
        likes: 654,
        timestamp: "Posted 16 hours ago"
    },
    {
        username: "gamerpro",
        fullName: "Noah Martinez",
        content: "Spent the whole day gaming. 🎮 Leveling up!",
        likes: 765,
        timestamp: "Posted 17 hours ago"
    },
    {
        username: "travelbug",
        fullName: "Emma Johnson",
        content: "Wanderlust kicking in again. ✈️ Planning the next adventure!",
        likes: 876,
        timestamp: "Posted 18 hours ago"
    },
    {
        username: "healthyliving",
        fullName: "William Brown",
        content: "Cooked a nutritious meal for dinner tonight. 🥗🍽️",
        likes: 987,
        timestamp: "Posted 19 hours ago"
    },
    {
        username: "artlover",
        fullName: "Oliver Smith",
        content: "Visited an art gallery today. 🖼️ So much talent on display!",
        likes: 321,
        timestamp: "Posted 20 hours ago"
    },
    {
        username: "motivationnation",
        fullName: "Emily Taylor",
        content: "Every day is a new opportunity to chase your dreams. 💫",
        likes: 432,
        timestamp: "Posted 21 hours ago"
    },
    {
        username: "doglover",
        fullName: "Lucas Johnson",
        content: "Took my furry friend for a long walk today. 🐕🚶‍♂️",
        likes: 543,
        timestamp: "Posted 22 hours ago"
    },
    {
        username: "fashionforward",
        fullName: "Ella Garcia",
        content: "Experimenting with different fashion styles today. 👠👗",
        likes: 654,
        timestamp: "Posted 23 hours ago"
    },
    {
        username: "coffeetime",
        fullName: "Daniel Brown",
        content: "Midday coffee break to recharge. ☕️",
        likes: 765,
        timestamp: "Posted 1 day ago"
    },
    {
        username: "productive",
        fullName: "Sophie Martinez",
        content: "Managed to check off everything on my to-do list today. ✔️",
        likes: 876,
        timestamp: "Posted 2 days ago"
    },
    {
        username: "staypositive",
        fullName: "Noah Garcia",
        content: "Choosing to see the good in every situation. 🌟",
        likes: 987,
        timestamp: "Posted 3 days ago"
    },
    {
        username: "foodiegirl",
        fullName: "Isabella Johnson",
        content: "Tried a new restaurant for lunch today. 🍽️ The food was amazing!",
        likes: 210,
        timestamp: "Posted 4 days ago"
    },
    {
        username: "medstudent",
        fullName: "Sophia Taylor",
        content: "Late-night study session at the library. 📚💉",
        likes: 321,
        timestamp: "Posted 5 days ago"
    },
    {
        username: "fitnessenthusiast",
        fullName: "Oliver Brown",
        content: "Completed a challenging workout today. 💪 Feeling stronger than ever!",
        likes: 432,
        timestamp: "Posted 6 days ago"
    },
    {
        username: "traveladventures",
        fullName: "William Martinez",
        content: "Wandering through the streets of Rome. 🇮🇹 So much history and beauty!",
        likes: 543,
        timestamp: "Posted 1 week ago"
    },
    {
        username: "selfcare",
        fullName: "Sophie Johnson",
        content: "Taking a break to focus on self-care today. 🛁💆‍♂️",
        likes: 654,
        timestamp: "Posted 8 days ago"
    },
    {
        username: "booklover",
        fullName: "Oliver Taylor",
        content: "Lost in the pages of a good book. 📖",
        likes: 765,
        timestamp: "Posted 9 days ago"
    },
    {
        username: "sunnydays",
        fullName: "Emma Garcia",
        content: "Enjoying the sunshine and warm weather. ☀️",
        likes: 876,
        timestamp: "Posted 10 days ago"
    },
    {
        username: "nightowl",
        fullName: "Lucas Smith",
        content: "Late-night thoughts and reflections. 🌙",
        likes: 987,
        timestamp: "Posted 11 days ago"
    },
    {
        username: "musicjunkie",
        fullName: "Ava Brown",
        content: "Attended an epic music festival over the weekend. 🎶🎉",
        likes: 210,
        timestamp: "Posted 12 days ago"
    },
    {
        username: "travelpics",
        fullName: "Jackson Garcia",
        content: "Capturing memories from my latest adventure. 📷✈️",
        likes: 321,
        timestamp: "Posted 13 days ago"
    },
    {
        username: "motivationalcoach",
        fullName: "Emma Smith",
        content: "Believe in yourself and anything is possible. 💪🌟",
        likes: 432,
        timestamp: "Posted 2 weeks ago"
    },
    {
        username: "dogmom",
        fullName: "Lucas Johnson",
        content: "Spoiling my fur baby with treats today. 🐾🐶",
        likes: 543,
        timestamp: "Posted 2 weeks ago"
    },
    {
        username: "artisticmind",
        fullName: "Sophie Taylor",
        content: "Finding inspiration in the world around me. 🎨✨",
        likes: 654,
        timestamp: "Posted 2 weeks ago"
    },
    {
        username: "technerd",
        fullName: "Oliver Garcia",
        content: "Geeking out over the latest tech gadgets. 🤓📱",
        likes: 765,
        timestamp: "Posted 2 weeks ago"
    }
];

export default posts;