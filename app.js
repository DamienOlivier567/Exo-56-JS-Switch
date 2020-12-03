let maVar = prompt("Entrez le nom de l'accesoires");


switch(maVar) {
    case 'souris':
        alert("J'utilise une souris");
        break;
    case 'clavier':
        alert("J'utilise un clavier");
        break;
    case 'ordinateur':
        alert("J'utilise un ordinateur");
        break;
    case 'tapis':
        alert("J'utilise pas un tapis");
        break;
    case 'imprimante':
        alert("J'utilise une imprimante");
        break;
    case 'ondulateur':
        alert("J'utilise pas un ondulateur")
        break;
    default:
        alert("Veullez marquez un accessoire");
}