var fruittype = prompt("What You Want?");
switch(fruittype){
    case 'Mango':
        console.log('60rs Kilo');
        break;
        case 'apple':
            console.log('100rs kilo');
            break;
            case 'Banana':
                console.log('80rs kilo');
                default:
                    console.log(`${fruittype} not available`);
}
console.log("anything else?")