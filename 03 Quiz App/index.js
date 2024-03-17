const questions =[
    {
        question :"what is the largest animal in the planet",
        answers :[
            {Text:"Shark ", correct: false},
            {Text:"Blue wheal ", correct: true},
            {Text:"goat ", correct: false},
            {Text:"Eleehant ", correct: false}
        ]
    },

    {
        question :"what is largest forest in india",
        answers :[
            {Text:"Nuranang Fall ", correct: false},
            {Text:"Kudremukh National Park ", correct: true},
            {Text:"Van Vihar National Park ", correct: true},
            {Text:"Simla reserve forest ", correct: false}
        ]
    },

    {
        question :"what is the largest animal in the planet",
        answers :[
            {Text:"Shark ", correct: false},
            {Text:"Blue wheal ", correct: true},
            {Text:"goat ", correct: false},
            {Text:"Eleehant ", correct: false}
        ]
    },

    {
        question :"what is the largest dam in India",
        answers :[
            {Text:"Hirakund ", correct: false},
            {Text:"tihari ", correct: true},
            {Text:"bhakhra nangal ", correct: false},
            {Text:"sardar sarovar ", correct: false}
        ]
    },

    {
        question :"what is the national bird of India",
        answers :[
            {Text:"peigon ", correct: false},
            {Text:"Blue bird ", correct: true},
            {Text:"Kingfisher ", correct: false},
            {Text:"Peacock", correct: true}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerBUtton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");