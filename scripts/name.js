document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").innerHTML = localStorage.getItem("name")
})

 const Activities = {
     videoGames: {
        description:"playing a video game",
        link: "https://ftw.usatoday.com/lists/online-games-multiplayer",
        why: "I personally love playing Fortnite with my best friend and boyfriend who both live away from me, because it is an online game that is cross compatable, since I have an XBOX and they both have PlayStation devices. If you're into video games at all, I would reccomend checking out the link above, which lists some online multiplayer video games you could play with your friend or partner. Give it a try!"
     },
     movies: {
        description:"watching a new movie",
        link: "https://find-a-movie.com/find",
        why: "The link above leads to a website that can help you decide whatt movie to watch if y'all can't figure our what you want to watch for your movie night tonight!"
     },
     workout: {
         description:"working out or doing yoga",
         link: "https://www.youtube.com/channel/UCX32D3gKXENrhOXdZjWWtMA",
         why: "You and your friend can try and workout you want to do together, or just do your own workouts on the phone, but if you're interested in trying something new, I reccomend a youtube channel called Yoga With Kassandra,' which I linked above. She has tons of free yoga lessons of varying skill levels and length you could try out with your friend today!",
     },
     homework: {
        description:"doing homework",
        link: "https://pomofocus.io/",
        why: "If you and your friend are in school, or have a job where they need to do work at home, try working together on the phone to stay motivated and have company while you get everything done. Above, I linked a tool that can be used as a focus timer, so that you can plan out when you work or have a break, to keep you on track for your goals.",
     },
     art: {
        description:"painting or doing art",
        link: "https://magatsu.net/generators/art/index.php",
        why: "If you don't have a piece you can continue working on, or cannot think of what to make, try out this art prompt generator that I linked above. You can pick one out and do a little challenge with your friend, and talk to listen to music while y'all make the piece together. Even if you've never made any kind of art before, it'll be fun to try out!",
     },
     cook: {
        description:"doing a cooking challenge",
        link: "https://smartslowcooker.com/blog/cooking-challenge",
        why: "If you don't cook often, or want to make something fun to eat, do a cooking challenge with your friend and try and make a recipe you've never done before. Even if you're not a very experienced chef, you'll have your friend there with you so y'all can figure it out together! I included a link to a page that has different cooking challenges you can scroll through and find what y'all want to make if you don't already have something in mind. Happy Cooking!",
     },
     write: {
        description:"writing a letter for each other",
        link: "https://stephanieorefice.net/30-letters-best-friend/",
        why: "Have you written a letter to this friend before? Well now's the time! If you don't know what to write about, check out the link above for some fun ideas of letters to write to your best friend, and then mail them to eachother. Whenever they arrive you can open them together, or just talk about it after you open them. Have fun!",
     },
     puzzle: {
        description:"doing an online puzzle",
        link: "https://jigsawpuzzles.io/",
        why: "Have you ever heard of a digital, online puzzle? Well surprisingly, they exist, and you can play them live and online with your friends! Just go to the link I provided and follow the instructions to add your friend and choose the puzzle y'all wanna do together. Good Luck!",
     },
     music: {
        description:"listening to music",
        link: "https://headphonesaddict.com/listen-to-music-together/",
        why: "If you and your friend are just doing your own thing over the phone but want to add music together, you can check out the link above and see if any of the options provided work for what music streaming services you both have. Then, you can listen to the same songs at the same time! If you both have it, Spotify actually has a feature where you can start a 'group session' where you can do the same thing. Happy listening!",
     },

 };

let randomNumber = Math.floor(Math.random() * Object.keys(Activities).length);
let randomActivity = Activities[Object.keys(Activities)[randomNumber]];

document.getElementById("activity").innerHTML = randomActivity.description;
console.log(randomActivity);
document.getElementById("link").innerHTML = randomActivity.link;
document.getElementById("reason").innerHTML = randomActivity.why;

//change the random result
function refreshPage(){
    window.location.reload();
} 