const diff_Words = [
  "Obfuscate",
  "Esoteric",
  "Pernicious",
  "Pulchritude",
  "Quixotic",
  "Sesquipedalian",
  "Sycophant",
  "Ubiquitous",
  "Recalcitrant",
  "Vituperate",
  "Insouciant",
  "Intransigent",
  "Magnanimous",
  "Pusillanimous",
  "Lugubrious",
  "Perspicacious",
  "Circumlocution",
  "Redoubtable",
  "Apocryphal",
  "Cacophony",
   "Eloquent",
  "Pragmatic",
  "Ambiguous",
  "Resilient",
  "Benevolent",
  "Scrutinize",
  "Plausible",
  "Vindicate",
  "Reverence",
  "Transient",
  "Reconcile",
  "Alleviate",
  "Meticulous",
  "Discrepancy",
  "Imminent",
  "Prolific",
  "Fortuitous",
  "Empathy",
  "Candid",
  "Apathy",
  "Lucid",
  "Reluctant",
  "Innovate",
  "Obsolete",
  "Concur",
  "Instigate",
  "Scrupulous",
  "Superfluous",
  "Tenacious",
  "Cohesive"
];
let word = document.querySelector("#divword");
let score_c = 0
function disp()
{
    let timer = document.querySelector("#divtimer");
    let count = 1;
    let used_words = [];
    timer.innerHTML = count        
    index = parseInt(Math.random()*50)
    word.innerHTML = diff_Words[index]
    used_words.push(diff_Words[index])

    setInterval( ()=>
    {
        timer.innerHTML = count        
        index = parseInt(Math.random()*50)
        while(used_words.includes(diff_Words[index]))
        {
            index = parseInt(Math.random()*50)

        }

        if(count % 10 == 0)
        {
            word.innerHTML = diff_Words[index]
            used_words.push(diff_Words[index])

        }
        count++
    } ,1000);



}
function mat_word()
{
    let typedword = document.querySelector("#inpword").value;
    let score = document.querySelector("#divscore");
    if (typedword == word.innerHTML)
    {
        console.log("Matched")
        score_c = score_c + 5
        score.innerHTML = score_c
    }


}
