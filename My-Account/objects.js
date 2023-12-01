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
            "play_name": "Play 1",
            "sport": "Football",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 3.2,
            "created_by": "Person Name",
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
            "play_id": 2,
            "play_name": "Play 2",
            "sport": "Basketball",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 4.0,
            "created_by": "Person Name",
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
            "play_id": 3,
            "play_name": "Play 3",
            "sport": "Ice Hockey",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 2.6,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 4,
            "play_name": "Play 4",
            "sport": "Soccer",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 1.9,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 5,
            "play_name": "Play 5",
            "sport": "Football",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 4.7,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 6,
            "play_name": "Play 6",
            "sport": "Basketball",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 3.5,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 7,
            "play_name": "Play 7",
            "sport": "Ice Hockey",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 3.0,
            "created_by": "Person Name",
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
            "play_id": 8,
            "play_name": "Play 8",
            "sport": "Soccer",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 0.0,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Defensive",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 9,
            "play_name": "Play 9",
            "sport": "Football",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 2.9,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 10,
            "play_name": "Play 10",
            "sport": "Basketball",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 2.0,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 11,
            "play_name": "Play 11",
            "sport": "Soccer",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 4.6,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 12,
            "play_name": "Play 12",
            "sport": "Football",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 5.0,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 13,
            "play_name": "Play 13",
            "sport": "Basketball",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 3.8,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 14,
            "play_name": "Play 14",
            "sport": "Ice Hockey",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 3.3,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 15,
            "play_name": "Play 15",
            "sport": "Soccer",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 4.2,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 16,
            "play_name": "Play 16",
            "sport": "Football",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 3.0,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 17,
            "play_name": "Play 17",
            "sport": "Basketball",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 4.1,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 18,
            "play_name": "Play 18",
            "sport": "Ice Hockey",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 1.7,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 19,
            "play_name": "Play 19",
            "sport": "Soccer",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 0.0,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here",
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        },
        {
            "play_id": 20,
            "play_name": "Play 20",
            "sport": "Football",
            "image_url": "./Screenshot 2023-11-23 at 23.02.23.png",
            "rating": 5.0,
            "created_by": "Person Name",
            "comments": [
                "First Comment will go here",
                "Second Comment will go here"
            ],
            "tags": [
                "Tag 1",
                "Tag 2",
                "Tag3"
            ]
        }
    ];