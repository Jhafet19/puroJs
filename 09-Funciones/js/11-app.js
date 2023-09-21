

const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
};
aprendiendo(`JavaScript`)
//tiene por implicito el return
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}` 


console.log(aprendiendo2("Java"));