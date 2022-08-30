const p = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// const evenly_divisible_by_3 = p.filter( item => item.id % 3 === 0);
// console.log(evenly_divisible_by_3);

// const fire_type = p.filter( item => item.types[0] === "fire");
// console.log(fire_type);

// const more_than_one = p.filter( item => item.types.length > 1);
// console.log(more_than_one);

// const just_name = p.map(item => item.name);
// console.log(just_name);

// const name_id_gt_99 = p.filter(item => item.id > 99).map(result => result.name);
// console.log(name_id_gt_99);

// const name_poison = p.filter(item => item.types.length === 1 && item.types[0] === "poison").map(result => result.name);
// console.log(name_poison);

// const first_second_flying = p.filter(item => item.types[1] === "flying").map(result => result.types[0]);
// console.log(first_second_flying);

// const normal_type = p.filter(item => item.types[0] === "normal").length;
// console.log(normal_type);