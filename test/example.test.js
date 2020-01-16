// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('paper beats rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const npc = 'rock';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('scissors beats paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const npc = 'paper';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('rock beats scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const npc = 'scissors';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
