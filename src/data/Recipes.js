const recipesArr = [
    {
        id: "0",
        category: "desserts",
        title: "Murzynek",
        ingredients: [
            {
                name: "butter",
                quantity: 1,
            },
            {
                name: "cocoa",
                quantity: 3,
            },
            {
                name: "milk",
                quantity: .5,
            }
        ],
        cookingstyle: "baking",
        temp: 170,
        time: 40,
    },
    {
        id: "1",
        category: "soups",
        title: "Rosół",
        ingredients: [
            {
                name: "potato",
                quantity: 1,
            },
            {
                name: "chicken parts",
                quantity: 3,
            },
            {
                name: "carrot",
                quantity: 1,
            },
        ],
        cookingstyle: "boiling",
        temp: "none",
        time: 180,
    },
    {
        id: "2",
        category: "desserts",
        title: "Rolada murzynkowa",
        ingredients: [
            {
                name: "butter",
                quantity: 1,
            },
            {
                name: "cukier puder",
                quantity: 3,
            },
            {
                name: "milk",
                quantity: .25,
            },
        ],
        cookingstyle: "refrgerating",
        temp: "none",
        time: 480,
    }
]

export default recipesArr;