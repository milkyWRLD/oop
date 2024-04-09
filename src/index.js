import {
	Bowman,
	Daemon,
	Magician,
	Swordsman,
	Undead,
	Zombie,
} from './character'

// Создаем новых персонажей
const bowman = new Bowman('Robin')
const swordsman = new Swordsman('Arthur')
const magician = new Magician('Merlin')
const daemon = new Daemon('Lucifer')
const undead = new Undead('Dracula')
const zombie = new Zombie('Walker')

// Выводим информацию о персонажах
console.log(bowman)
console.log(swordsman)
console.log(magician)
console.log(daemon)
console.log(undead)
console.log(zombie)
