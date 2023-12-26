//estos son listas con llave y valor

const maps=new Map();

    maps.set('nombre','Jhafet')
    maps.set('tipo','premium')
    maps.set('saldo',3000)

    console.log(maps);
    console.log(maps.size);
    console.log(maps.has('nombre'));
    maps.delete('saldo')
    console.log(maps.get('nombre'));
    console.log(maps.get('saldo'));

    console.log(maps);


    maps.forEach(map=>{
        console.log(map);
    })