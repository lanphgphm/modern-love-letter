const sals1 = [
    "DEAR",
    "TO MY",
    "MY",
    "SWEET",
    "BELOVED",
   ];

const sals2 = [
    "DARLING", 
    "LOVE",
    "DEAREST",
    "BABY", 
    "SWEETHEART",
    "HONEY",
    "POOKIE",
    ];


const adjs = [
    "BEAUTIFUL", 
    "GORGEOUS",
    "FONDEST", 
    "LOVELY",
    "PRECIOUS",
    "ADORABLE",
    "CUTE",
    "SWEET",
    "AMAZING",
    "LOVING", 
    "ENCHANTING",
    "CHARMING",
    "DELICIOUS",
    "WONDERFUL",
    "MAGICAL",
    "PERFECT",
    "DIVINE",
    "SPECIAL",
    "UNIQUE",
    "IRRESISTIBLE",
    "INSPIRING",
    "BLESSED",
    "GRACIOUS",
    "BELOVED",
    "WARM",
    "TENDER",
    "KIND",
    "GENTLE",
    "CARING",
    "LOYAL",
    "TRUSTWORTHY",
    "HONEST",
    "SINCERE",
    "GENUINE"
];

const nouns = [
    "HEART",
    "SOUL",
    "SPIRIT",
    "LIFE",
    "INSPIRATION",
    "JOY",
    "HAPPINESS",
    "LOVE",
    "PASSION",
    "DESIRE",
    "DREAM",
    "FANTASY",
    "FAIRYTALE",
    "MIRACLE",
    "BLESSING",
    "TREASURE",
    "GIFT",
    "SWEETNESS",
    "KINDNESS",
    "TENDERNESS",
    "CARE",
    "DEVOTION",
    "DEDICATION",
    "WISH", 
    "LONGING", 
    "CHARM",
    "BEING",
    "ADORATION", 
    "AFFECTION",
    "FONDNESS", 
    "MIND", 
    "COMPASSION", 
    "THOUGHTFULNESS",
    "APPRECATION",
    "ADMIRATION",
    "SOLICIUDE",
];

const advs = [
    "DEEPLY",
    "TRULY",
    "BEAUTIFULLY",
    "EAGERLY",
    "PASSIONATELY",
    "WONDERFULLY",
    "TENDERLY",
    "GENTLY",
    "THOUGHTFULLY",
    "RESPECTFULLY",
    "TRUSTINGLY",
    "SINCERELY",
    "GENUINELY",
    "FAITHFULLY",
    "LOVINGLY",
    "DEARLY",
    "FONDLY",
];

const verbs = [
    "ADORES",
    "ATTRACTS",
    "HOLDS DEAR",
    "HOPES FOR",
    "LIKES",
    "LONGS FOR",
    "LOVES",
    "TREASURES",
    "YEARNS FOR",
    "CHERISHES",
    "DELIGHTS IN",
    "FALLS FOR",
    "WORSHIPS",
    "ADMIRES",
    "APPRECIATES",
    "CARES FOR",
    "FANCIES",
    "FAVORS",
    "HOLDS NEAR"
];

function rel(array) {
    return array[Math.floor(Math.random() * array.length)];
} 

function generateLetterContent() {
    const SHORT = 1;
    const LONG = 2;
    let last = null;

    let ll = `     ${rel(sals1)} ${rel(sals2)},\n     `;

    for (let i = 0; i < 5; i++) {
        if (Math.random() < 0.5) {
            // LONG
            let optadj1 = (Math.random() < 0.5) ? '' : rel(adjs);
            let noun1 = rel(nouns);
            let optadv = (Math.random() < 0.5) ? '' : rel(advs);
            let verb = rel(verbs);
            let optadj2 = (Math.random() < 0.5) ? '' : rel(adjs);
            let noun2 = rel(nouns);

            let concat = (last !== null || last === LONG) ? ". " : "";

            ll += `${concat}MY ${optadj1} ${noun1} ${optadv} ${verb} YOUR ${optadj2} ${noun2}`;
            last = LONG;

        } else {
            // SHORT
            let adj = rel(adjs);
            let noun = rel(nouns);
            let concat = (last === SHORT) ? ", " : (last === LONG) ? ". YOU ARE" : "YOU ARE ";

            ll += `${concat} MY ${adj} ${noun}`;
            last = SHORT;
        }
    }

    let adv = rel(advs);
    ll += `.\n     YOURS ${adv},\n     M.U.C.\n`;

    ll = ll.replace(/ /g, ' ');
    ll = ll.replace(/\n/g, "<br><br>")
    console.log(ll);
    return ll;
}

function generate() {
    var letterDiv = document.getElementById('letter');
    letterDiv.innerHTML = generateLetterContent();
}

function getVocab(){
    generate();  
    
    var colsals1 = sals1.join("\n").replace(/ /g, '&nbsp;').replace(/\n/g, "<br>");
    var colsals2 = sals2.join("\n").replace(/ /g, '&nbsp;').replace(/\n/g, "<br>")
    var coladjs = adjs.join("\n").replace(/ /g, '&nbsp;').replace(/\n/g, "<br>")
    var colnouns = nouns.join("\n").replace(/ /g, '&nbsp;').replace(/\n/g, "<br>")
    var colverbs = verbs.join("\n").replace(/ /g, '&nbsp;').replace(/\n/g, "<br>")
    var coladvs = advs.join("\n").replace(/ /g, '&nbsp;').replace(/\n/g, "<br>")

    document.getElementById('sals1').innerHTML = colsals1;
    document.getElementById('sals2').innerHTML = colsals2;
    document.getElementById('adjs').innerHTML = coladjs;
    document.getElementById('nouns').innerHTML = colnouns;
    document.getElementById('verbs').innerHTML = colverbs;
    document.getElementById('advs').innerHTML = coladvs;
}