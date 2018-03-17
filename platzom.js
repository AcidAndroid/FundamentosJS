function platzom(palabra) {
    let translation = palabra;

    //si la palabre termina en ar se le quitan los 2 caracteres finales

    if (palabra.toLowerCase().endsWith('ar')) {
        translation = palabra.slice(0, -2);

    }


    //si la palabra inciia con z se le añade p al final
    if (palabra.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //si la palabra traducida tiene 10 o mas letras se parte a la mitad y se le agrega un guin
    if (translation.length >= 10) {
        let mitad1 = translation.slice(0, Math.round(translation.length / 2));
        let mitad2 = translation.slice(Math.round(translation.length / 2));

        console.log(mitad1)
        console.log(mitad2)
        translation = mitad1 + '-' + mitad2;
    }

    //si la palabra es un palindromo ninguna regla cuenta y se devuelve ma misma palabra con mayus y minus
    const reverse = (palabra) => { return palabra.split('').reverse().join('') }

    function minMay(palabra) {
        const l = palabra.length;
        let translation = '';
        let capitaliza = true;

        for (let index = 0; index < l; index++) {
            palabra.charAt(index);
            translation += capitaliza ? palabra.charAt(index).toUpperCase() : palabra.charAt(index).toLowerCase();
            capitaliza = !capitaliza;
        }
        return translation;

    }

    if (palabra == reverse(palabra)) {
        console.log('palindrome');
        return minMay(palabra);
    }


    return translation;
}
platzom('ProGrmaR');