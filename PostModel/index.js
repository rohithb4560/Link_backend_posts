const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    reactorImage: {
        type: String
    },
    reactorName: {
        type: String
    },
    authorImage: {
        type: String
    },
    authorName: {
        type: String
    },
    jobTitle: {
        type: String
    },
    postTime: {
        type: String
    },
    postDescription: {
        type: String
    },
    image: {
        type: String
    },
    reactionCount: {
        type: String
    },
    postTime: {
        type: String
    },
    postDescription: {
        type: String
    },
    image: {
        type: String
    },


    reactionCount: {
        type: String
    },
    repostCount: {
        type: String,
        trim: true,
        required: true

    },
    comments: [
        {
            commentatorImage: {
                type: String
            },
            commentatorName: {
                type: String
            },
            commentatorDesignation: {
                type: String
            },
            comment: {
                type: String

            },
            commentTime: {
                type: String
            },
            commentLikes: {
                type: String
            }


        }
    ]

}, {

    timeStamps: true
})
module.exports.post = new mongoose.model("post", postSchema)

// {
//     "id": 1,
//     "reactorImage": "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "reactorName": "Chan yuang",
//     "authorImage": "https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "authorName": "amanda whytt",
//     "jobTitle": "Professional photographer | wanderer",
//     "postTime": "1d",
//     "postDescription": "Photos do define your persona a good one may get you somewhere...",
//     "image": "https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "reactionCount": 8763,
//     "commentCount": 2342,
//     "repostCount": 878,
//     "comments": [
//       {
//         "commentatorImage": "https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "commentatorName": "Jim cling",
//         "commentatorDesignation": "Creator a hustlers lab",
//         "comment": 
//           "Hah! that what what i was thinking "
//         ,
//         "commentTime": "4h",
//         "commentLikes": 765
//       },{}
//     ]
//   }