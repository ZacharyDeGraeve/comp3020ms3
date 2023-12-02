// Since Chrome strictly enforces CORS, we couldn't fetch a local JSON file.
// My workaround was to load multiple scripts with the defer attribute, in order. -Ivory

var folders =
    [
        {
            "id": "folder1",
            "name": "My Plays",
            "plays": [1, 2, 3]
        },
        {
            "id": "folder2",
            "name": "Saved Plays",
            "plays": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        },
        {
            "id": "folder3",
            "name": "Basketball",
            "plays": [2, 6, 10, 13, 17]
        }
    ]

var plays =
[
    {
        "play_id": 1,
        "play_name": "Shotgun",
        "sport": "Football",
        "image_url": "images/football2.jpeg",
        "rating": 3.0,
        "created_by": "Coach Wilson",
        "comments": [
            "Wow what a great play for my high school team!",
            "Just like TB12"
        ],
        "tags": [
            "Offensive",
            "Shotgun",
            "Throwing"
        ]
    },
    {
        "play_id": 2,
        "play_name": "Triangle #3",
        "sport": "Basketball",
        "image_url": "images/basketball2.jpeg",
        "rating": 3.0,
        "created_by": "Coach Carter",
        "comments": [
            "My youth team couldn't figure it out",
            "Love this play do recommend"
        ],
        "tags": [
            "Offensive",
            "Triangle",
            "Post"
        ]
    },

    {
        "play_id": 6,
        "play_name": "Triangle #5",
        "sport": "Basketball",
        "image_url": "images/basketball3.jpeg",
        "rating": 3.0,
        "created_by": "Coach Carter",
        "comments": [
            "Coach Carter is an awesome movie!",
            "Plays pretty sweet too my high school team used to do this"
        ],
        "tags": [
            "Post",
            "Pin-Down",
            "Triangle"
        ]
    },
    {
        "play_id": 7,
        "play_name": "Russian Cycle",
        "sport": "Ice Hockey",
        "image_url": "images/hockey3.jpeg",
        "rating": 5.0,
        "created_by": "Herb Brookes",
        "comments": [
            "Just keep cycling until they're tired",
            "Great for a team with lots of speed but poor passing"
        ],
        "tags": [
            "Offensive",
            "Cycle",
            "5-on-5"
        ]
    },
    {
        "play_id": 8,
        "play_name": "Through Pass",
        "sport": "Soccer",
        "image_url": "images/soccer3.jpeg",
        "rating": 3.5,
        "created_by": "Messi#1",
        "comments": [
            "I don't know a lot about soccer",
            "I play the fifa video games and do this on there"
        ],
        "tags": [
            "Defense",
            "Zone"
        ]
    },


    {
        "play_id": 3,
        "play_name": "PowerPlay BD",
        "sport": "Ice Hockey",
        "image_url": "images/hockey2.jpeg",
        "rating": 4.0,
        "created_by": "Herb Brookes",
        "comments": [
            "If we played 'em 10 times they might beat us 9 but not this GAME",
            "We will play like the Russians"
        ],
        "tags": [
            "Offensive",
            "PowerPlay",
            "Miracle"
        ]
    },
    {
        "play_id": 4,
        "play_name": "Movement",
        "sport": "Soccer",
        "image_url": "images/soccer1.jpeg",
        "rating": 1.6,
        "created_by": "Ronaldo",
        "comments": [
            "Just running around it's silly",
            ""
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 5,
        "play_name": "Blue 42",
        "sport": "Football",
        "image_url": "images/football1.jpeg",
        "rating": 3.0,
        "created_by": "ChiefsFan4Life",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },
    




    {
        "play_id": 9,
        "play_name": "Double Fake",
        "sport": "Football",
        "image_url": "images/football2.jpeg",
        "rating": 3.0,
        "created_by": "jack",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Tag 2",
            "Tag3"
        ]
    },
    {
        "play_id": 10,
        "play_name": "Horns Wrinkle",
        "sport": "Basketball",
        "image_url": "images/basketball3.jpeg",
        "rating": 3.0,
        "created_by": "Lebron",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Horns",
            "Flare"
        ]
    },
    {
        "play_id": 11,
        "play_name": "Corner",
        "sport": "Soccer",
        "image_url": "images/soccer2.jpeg",
        "rating": 3.0,
        "created_by": "Ronaldo",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Set Piece",
            "Corner",
            "Offensive"
        ]
    },
    {
        "play_id": 12,
        "play_name": "Mahomes",
        "sport": "Football",
        "image_url": "images/football1.jpeg",
        "rating": 3.0,
        "created_by": "Patrick",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Offensive",
            "Play Action",
            "Throwing"
        ]
    },
    {
        "play_id": 13,
        "play_name": "Blind Pig",
        "sport": "Basketball",
        "image_url": "images/basketball3.jpeg",
        "rating": 3.0,
        "created_by": "Person Name",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "Triangle",
            "Offensive"
        ]
    },
    {
        "play_id": 14,
        "play_name": "Ovi",
        "sport": "Ice Hockey",
        "image_url": "images/hockey1.jpeg",
        "rating": 3.0,
        "created_by": "Sid the Kid",
        "comments": [
            "First Comment will go here",
            "Second Comment will go here"
        ],
        "tags": [
            "One Timer",
            "Offensive",
            "PowerPlay"
        ]
    },
    {
        "play_id": 15,
        "play_name": "Penalty",
        "sport": "Soccer",
        "image_url": "images/soccer1.jpeg",
        "rating": 3.0,
        "created_by": "Penaldo",
        "comments": [
            "Are there actually set plays for a penalty kick I'm not sure?",
            "Anotha one"
        ],
        "tags": [
            "Offensive",
            "Set Piece",
            "Penalty"
        ]
    },
    {
        "play_id": 16,
        "play_name": "Play 16",
        "sport": "Football",
        "image_url": "images/football1.jpeg",
        "rating": 3.0,
        "created_by": "Gronk",
        "comments": [
            "I'm quickly running out of ideas or good jokes to put on here",
            "Throw them the short toss"
        ],
        "tags": [
            "Lob",
            "Screen Play",
            "Offensive"
        ]
    },
    {
        "play_id": 17,
        "play_name": "2-3 Zone",
        "sport": "Basketball",
        "image_url": "images/basketball1.jpeg",
        "rating": 3.3,
        "created_by": "Joel",
        "comments": [
            "Zones are bad for giving up offensive rebounds",
            "Works great on my youth team!!!"
        ],
        "tags": [
            "Zone",
            "Defensive"
        ]
    },
    {
        "play_id": 18,
        "play_name": "Penalty Kill Diamond",
        "sport": "Ice Hockey",
        "image_url": "images/hockey1.jpeg",
        "rating": 4.0,
        "created_by": "Ryan",
        "comments": [
            "Need big players to pull this off",
            "Gotta be patient in this one"
        ],
        "tags": [
            "PK",
            "Defensive",
            "5-on-4"
        ]
    },
    {
        "play_id": 19,
        "play_name": "Cross",
        "sport": "Soccer",
        "image_url": "images/soccer2.jpeg",
        "rating": 4.1,
        "created_by": "Messi#1",
        "comments": [
            "Take away the cross!",
            "Goooooooooaaaaaaaaaallllllllllll",
            "Anotha one",
            "Work smarter not harder"
        ],
        "tags": [
            "Defensive"
        ]
    },
    {
        "play_id": 20,
        "play_name": "Full blitz",
        "sport": "Football",
        "image_url": "images/football2.jpeg",
        "rating": 5.0,
        "created_by": "George Washington",
        "comments": [
            "Sacks all day",
            "Shut down the run game"
        ],
        "tags": [
            "Defensive",
            "Blitz"
        ]
    }
];