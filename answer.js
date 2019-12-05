// *** YOUR ANSWER BELOW ***

let word = ['thumb', 'shoe', 'knee', 'door', 'hive', 'sticks', 'heaven', 'pate', 'spine', 'shin']

function thisOldMan(verseN){
    for(let i = 1; i <= verseN; i++) {
        let verseWord = word[i-1];
        console.log(`This old man, he played ${i}. 
        He played knick knack on my ${verseWord}. With a knick-knack, paddy-whack, give your dog a bone.
        This old man came rolling home.`)
    }
}

(thisOldMan(10));