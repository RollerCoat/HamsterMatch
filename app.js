const name_object = document.getElementById("name");
const age_object = document.getElementById("age");
const picture_object = document.getElementById("card_profile_picture");
const likings_object = document.getElementById("likings");
const dislikings_object = document.getElementById("dislikings");

const scroll_button = document.getElementById("next_hamster");
const like_button = document.getElementById("like");
const dislike_button = document.getElementById("dislike");

const likes_counter = document.getElementById("likes");

const overlay = document.getElementById('overlay-effect');

const LIKED = 1
const DISLIKED = -1
const NEUTRAL = 0

class Hamster {
    constructor(name, age, picture, likings, dislikings, likes, did_i_like, likes_you) {
        this.name = name;
        this.age = age;
        this.picture = picture;
        this.likings = likings;
        this.dislikings = dislikings;

        this.likes = likes;
        this.likes_you = likes_you;
        this.did_i_like = 0;
    }

    put_data_on_screen() {
        name_object.textContent = this.name;
        age_object.textContent = this.age;

        likings_object.textContent = this.likings.join(', ');
        dislikings_object.textContent = this.dislikings.join(', ');

        picture_object.src = this.picture;
    }

    like() {
        if ( this.did_i_like === DISLIKED ) {

            update_likes(this, 2); // Dislike => 0 => Like: +2
            this.did_i_like = LIKED;
        }
        
        else if ( this.did_i_like === NEUTRAL ) {

            update_likes(this, 1);
            this.did_i_like = LIKED;
        }

        else {
            update_likes(this, -1);
            this.did_i_like = NEUTRAL;
        }
    }

    dislike() {
        if ( this.did_i_like === LIKED ) {

            update_likes(this, -2);
            this.did_i_like = DISLIKED;
        }
        
        else if ( this.did_i_like === NEUTRAL ) {

            update_likes(this, -1);
            this.did_i_like = DISLIKED;
        }

        else {
            update_likes(this, 1);
            this.did_i_like = NEUTRAL;
        }
    }
};

let hamsters_in_town = [
    new Hamster(
        "Herbert", // Name
        3, // Alter
        "assets/herbert.png", // Bild
        ["Käse", "Käserolle", "Gouda"], // Mag er
        ["Nils der Hamster"], // Mag er nicht
        0, // Likes
        0, // 1: gelikt 0: nicht -1: gedislikt
        Boolean(Math.round(Math.random())) // Mag er dich?
    ),
    new Hamster(
        "Nils", // Name
        4, // Alter
        "assets/nils.png", // Bild
        ["Videospiele", "Nüsse"], // Mag er
        ["Schule"], // Mag er nicht
        0, // Likes
        0, // 1: gelikt 0: nicht -1: gedislikt
        Boolean(Math.round(Math.random())) // Mag er dich?
    ),
    new Hamster(
        "Gertrud", // Name
        2, // Alter
        "assets/gertrud.png", // Bild
        ["Essen", "Messer"], // Mag er
        ["Laufen", "Sport", "Hamsterräder"], // Mag er nicht
        0, // Likes
        0, // 1: gelikt 0: nicht -1: gedislikt
        Boolean(Math.round(Math.random())) // Mag er dich?
    ),
    new Hamster(
        "Bruno",
        5,
        "assets/bruno.png",
        ["Karotten", "Schlafen", "Holzhäuser"],
        ["Staubsauger", "Regen"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Frieda",
        1,
        "assets/frieda.png",
        ["Sonnenblumenkerne", "Buddeln", "Blumen"],
        ["Lärm", "Katzen"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Klaus",
        6,
        "assets/klaus.png",
        ["Pizza", "Fernsehen", "Nickerchen"],
        ["Sport", "Montage"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Luna",
        2,
        "assets/luna.png",
        ["Beeren", "Klettern", "Musik"],
        ["Gewitter", "Brokkoli"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Otto",
        4,
        "assets/otto.png",
        ["Hamsterräder", "Käse", "Abenteuer"],
        ["Stillstehen", "Spinat"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Berta",
        3,
        "assets/berta.png",
        ["Kekse", "Backen", "Tee"],
        ["Fast Food", "Lärm"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Willi",
        2,
        "assets/willi.png",
        ["Gaming", "Popcorn", "Cola"],
        ["Früh aufstehen", "Hausaufgaben"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Emma",
        5,
        "assets/emma.png",
        ["Yoga", "Nüsse", "Sonnenuntergänge"],
        ["Stress", "Kälte"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Rudi",
        3,
        "assets/rudi.png",
        ["Zugfahren", "Bücher", "Schokolade"],
        ["Mathe", "Schmutz"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),

    new Hamster(
        "Hannelore",
        4,
        "assets/hannelore.png",
        ["Käsekuchen", "Stricken", "Spaziergänge"],
        ["Hitze", "Mücken"],
        0,
        0,
        Boolean(Math.round(Math.random()))
    ),
];

function update_likes(hamster, likes) {
    hamster.likes += likes;
}

hamster_iteration = Math.floor( Math.random() * hamsters_in_town.length );
hamsters_in_town[hamster_iteration].put_data_on_screen();

scroll_button.addEventListener('click', () => {
    hamster_iteration = (( hamster_iteration + 1 ) % hamsters_in_town.length);
    hamsters_in_town[hamster_iteration].put_data_on_screen();

    likes_counter.textContent = hamsters_in_town[hamster_iteration].likes;
})

like_button.addEventListener('click', () => {
    hamsters_in_town[hamster_iteration].like();

    if (hamsters_in_town[hamster_iteration].likes_you 
        && 
        hamsters_in_town[hamster_iteration].did_i_like === 1) {

        overlay.classList.remove('active');
        void overlay.offsetWidth;
        overlay.classList.add('active');
    }

    likes_counter.textContent = hamsters_in_town[hamster_iteration].likes;
});

dislike_button.addEventListener('click', () => {
    hamsters_in_town[hamster_iteration].dislike();
    likes_counter.textContent = hamsters_in_town[hamster_iteration].likes;
});
