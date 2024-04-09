const {
	Character,
	Bowman,
	Swordsman,
	Magician,
	Daemon,
	Undead,
	Zombie,
} = require('../src/character')

describe('Character', () => {
	test('should create a character with correct parameters', () => {
		const character = new Character('John', 'Bowman')
		expect(character.name).toBe('John')
		expect(character.type).toBe('Bowman')
		expect(character.health).toBe(100)
		expect(character.level).toBe(1)
		expect(character.attack).toBe(25)
		expect(character.defence).toBe(25)
	})

	test('should throw an error if name is too short', () => {
		expect(() => new Character('J', 'Bowman')).toThrow(
			'Имя должно содержать от 2 до 10 символов'
		)
	})

	test('should throw an error if type is incorrect', () => {
		expect(() => new Character('John', 'Unknown')).toThrow(
			'Неверный тип персонажа'
		)
	})

	test('should correctly level up character', () => {
		const character = new Character('John', 'Bowman')
		character.levelUp()
		expect(character.level).toBe(2)
		expect(character.attack).toBe(30)
		expect(character.defence).toBe(30)
		expect(character.health).toBe(100)
	})

	test('should throw an error if trying to level up dead character', () => {
		const character = new Character('John', 'Bowman')
		character.health = 0
		expect(() => character.levelUp()).toThrow(
			'Нельзя повысить уровень умершего'
		)
	})

	test('should correctly apply damage to character', () => {
		const character = new Character('John', 'Bowman')
		character.damage(50)
		expect(character.health).toBe(62.5)
	})

	test('should set health to 0 if damage is too high', () => {
		const character = new Character('John', 'Bowman')
		character.damage(200)
		expect(character.health).toBe(0)
	})
})

describe('Bowman', () => {
	test('should create a bowman with correct parameters', () => {
		const bowman = new Bowman('Robin')
		expect(bowman.name).toBe('Robin')
		expect(bowman.type).toBe('Bowman')
		expect(bowman.health).toBe(100)
		expect(bowman.level).toBe(1)
		expect(bowman.attack).toBe(25)
		expect(bowman.defence).toBe(25)
	})
})

describe('Swordsman', () => {
	test('should create a swordsman with correct parameters', () => {
		const swordsman = new Swordsman('Arthur')
		expect(swordsman.name).toBe('Arthur')
		expect(swordsman.type).toBe('Swordsman')
		expect(swordsman.health).toBe(100)
		expect(swordsman.level).toBe(1)
		expect(swordsman.attack).toBe(40)
		expect(swordsman.defence).toBe(10)
	})
})

describe('Magician', () => {
	test('should create a magician with correct parameters', () => {
		const magician = new Magician('Merlin')
		expect(magician.name).toBe('Merlin')
		expect(magician.type).toBe('Magician')
		expect(magician.health).toBe(100)
		expect(magician.level).toBe(1)
		expect(magician.attack).toBe(10)
		expect(magician.defence).toBe(40)
	})
})

describe('Daemon', () => {
	test('should create a daemon with correct parameters', () => {
		const daemon = new Daemon('Lucifer')
		expect(daemon.name).toBe('Lucifer')
		expect(daemon.type).toBe('Daemon')
		expect(daemon.health).toBe(100)
		expect(daemon.level).toBe(1)
		expect(daemon.attack).toBe(10)
		expect(daemon.defence).toBe(40)
	})
})

describe('Undead', () => {
	test('should create an undead with correct parameters', () => {
		const undead = new Undead('Dracula')
		expect(undead.name).toBe('Dracula')
		expect(undead.type).toBe('Undead')
		expect(undead.health).toBe(100)
		expect(undead.level).toBe(1)
		expect(undead.attack).toBe(25)
		expect(undead.defence).toBe(25)
	})
})

describe('Zombie', () => {
	test('should create a zombie with correct parameters', () => {
		const zombie = new Zombie('Walker')
		expect(zombie.name).toBe('Walker')
		expect(zombie.type).toBe('Zombie')
		expect(zombie.health).toBe(100)
		expect(zombie.level).toBe(1)
		expect(zombie.attack).toBe(40)
		expect(zombie.defence).toBe(10)
	})
})
