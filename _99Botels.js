let i = 99;
// 99 Bottels of Bear Challenge..!!!!!
let bottleWorld = "bottel";
function bottels99(){
    while(i > 1){

        console.log( i+" bottels of bear on the wall, "+i +" bottels of bear.");
        console.log("Take 1 down and pass it around, "+ (i-1) +" bottels of bear on the wall.\n");
        i--;
    }
    console.log("No more bottels of bear on the wall, no more bottels of bear.");
    console.log("Go to the store and buy some more, 99 bottels of bear on the wall.");
}
bottels99();