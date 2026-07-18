const name_object = document.getElementById("name");
const age_object = document.getElementById("age");
const picture_object = document.getElementById("card_profile_picture");
const likings_object = document.getElementById("likings");
const dislikings_object = document.getElementById("dislikings");

const scroll_button = document.getElementById("next_hamster");
const like_button = document.getElementById("like");
const dislike_button = document.getElementById("dislike");
const super_like_button = document.getElementById("superlike");

class Hamster {
    constructor(name, age, picture, likings, dislikings) {
        this.name = name;
        this.age = age;
        this.picture = picture;
        this.likings = likings;
        this.dislikings = dislikings;
    }

    put_data_on_screen() {
        name_object.textContent = this.name;
        age_object.textContent = this.age;

        likings_object.textContent = this.likings.join(', ');
        dislikings_object.textContent = this.dislikings.join(', ');

        picture_object.src = this.picture;
    }
};

let hamsters_in_town = [
    {
        name: "Herbert",
        age: 3,
        picture: "assets/herbert.png",
        likings: ["Käse", "Käserolle", "Gouda"],
        dislikings: ["Nils der Hamster"],
        likes: 0,
        dislikes: 0
    },
    {
        name: "Nils",
        age: 4,
        picture: "assets/nils.png",
        likings: ["Videospiele", "Rennen"],
        dislikings: ["Lernen", "Schule"],
        likes: 0,
        dislikes: 0
    },
    {
        name: "Gertrud",
        age: 2,
        picture: "assets/gertrud.png",
        likings: ["Essen", "Messer", "Waffen"],
        dislikings: ["Laufen", "Sport"],
        likes: 0,
        dislikes: 0
    }
];

hamster_iteration = Math.floor( Math.random() * hamsters_in_town.length );

function new_hamster() {
    let hamster_on_screen = new Hamster(
        hamsters_in_town[hamster_iteration].name, // Name
        hamsters_in_town[hamster_iteration].age, // Alter
        hamsters_in_town[hamster_iteration].picture, // Bild
        hamsters_in_town[hamster_iteration].likings, // Mag ich
        hamsters_in_town[hamster_iteration].dislikings, // Mag ich nicht
    );

    hamster_on_screen.put_data_on_screen();
};

new_hamster();

scroll_button.addEventListener('click', () => {
    hamster_iteration = (( hamster_iteration + 1 ) % hamsters_in_town.length);
    new_hamster();
})

/*
like_button.addEventListener('click', () => {

})

*/