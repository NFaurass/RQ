var NumberOfQuotes = 28

var Quotes = new BuildArray(NumberOfQuotes)

// Use the following variables to 
// define your random Quotes:
Quotes[1] = "The value of achievement lies in the achieving."
Quotes[2] = "I always get by best with my naivety, which is 20 percent deliberate."
Quotes[3] = "Long live impudence! It’s my guardian angel in this world."
Quotes[4] = "A happy man is too satisfied with the present to dwell too much on the future."
Quotes[5] = "Nothing truly valuable arises from ambition or from a mere sense of duty; it stems rather from love and devotion toward men and toward objective things."
Quotes[6] = "Three rules of work: Out of clutter find simplicity; From discord find harmony; In the middle of difficulty lies opportunity."
Quotes[7] = "On the mysterious: It is the fundamental emotion which stands at the cradle of true art and true science. He who knows it not and can no longer wonder, no longer feel amazement, is as good as dead, a snuffed-out candle."
Quotes[8] = "I salute the man who is going through life always helpful, knowing no fear, and to whom aggressiveness and resentment are alien."
Quotes[9] = "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness."
Quotes[10] = "The only thing more dangerous than ignorance is arrogance."
Quotes[11] = "Weak people revenge. Strong people forgive. Intelligent people ignore."
Quotes[12] = "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales."
Quotes[13] = "The aim [of education] must be the training of independently acting and thinking individuals who, however, see in the service to the community their highest life achievement."
Quotes[14] = "To see with one’s own eyes, to feel and judge without succumbing to the suggestive power of the fashion of the day, to be able to express what one has seen and felt in a trim sentence or even in a cunningly wrought word – is that not glorious? Is it not a proper subject for congratulation?"
Quotes[15] = "Most people say that it is the intellect which makes a great scientist. They are wrong: it is character."
Quotes[16] = "The ideals which have lighted me on my way and time after time given me new courage to face life cheerfully, have been Truth, Goodness, and Beauty."
Quotes[17] = "If people are good only because they fear punishment, and hope for reward, then we are a sorry lot indeed."
Quotes[18] = "To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science."
Quotes[19] = "I do not at all believe in human freedom in the philosophical sense. Everybody acts not only under external compulsion but also in accordance with inner necessity."
Quotes[20] = "Unthinking respect for authority is the greatest enemy of truth."
Quotes[21] = "The only thing I did was this: in long intervals I have expressed an opinion on public issues whenever they appeared to me so bad and unfortunate that silence would have made me feel guilty of complicity."
Quotes[22] = "How strange is the lot of us mortals! Each of us is here for a brief sojourn; for what purpose he knows not, though he sometimes thinks he senses it."
Quotes[23] = "I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever."
Quotes[24] = "When I am judging a theory, I ask myself whether, if I were God, I would have arranged the world in such a way."
Quotes[25] = "I believe in intuition and inspiration. At times I feel certain I am right while not knowing the reason."
Quotes[26] = "The value of a man should be seen in what he gives and not in what he is able to receive."
Quotes[27] = "He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed."
Quotes[28] = "Don’t listen to the person who has the answers; listen to the person who has the questions. (This is one of my favorite Albert Einstein quote. Leave a reply here and let me know what’s yours!)"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomQuote(frm) {
// Generate a random number between 1 and NumberOfQuotes
var rnd = Math.ceil(Math.random() * NumberOfQuotes)

// Display the word inside the text box
frm.QuoteBox.value = Quotes[rnd]
}