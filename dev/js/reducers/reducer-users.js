/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "William",
            last: "Shakespeare",
            age: 27,
            description: "William is dramatic.",
            thumbnail: "http://shakespeare.mit.edu/shake.gif"
        },
        {
            id: 2,
            first: "Albert",
            last: "Einstein",
            age: 58,
            description: "Albert is made of matter.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_(Nobel).png"
        },
        {
            id: 3,
            first: "Vincent",
            last: "van Gogh",
            age: 35,
            description: "Vincent loves to paint.",
            thumbnail: "http://www.artyfactory.com/art_appreciation/portraits/van_gogh/van_gogh_3.jpg"
        }
    ]
}
