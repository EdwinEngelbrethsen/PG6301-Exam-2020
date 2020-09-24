const {getRandomCharacter} = require("../../src/server/db/jojocharacter");

test("Test invalid number", () => {
   expect(() => getRandomCharacter(-1)).toThrow();
   expect(() => getRandomCharacter(0)).toThrow();
   expect(() => getRandomCharacter(12345)).toThrow();
});

test("Test get 1", () => {
   const characters = getRandomCharacter(1);

   expect(characters.length).toBe(1);
   expect(characters[0].characterName).toBeDefined();
   expect(characters[0].standName).toBeDefined();
});