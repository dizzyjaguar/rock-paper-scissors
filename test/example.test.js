// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('paper beats rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'paper';
    const npc = 'rock';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('scissors beats paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'scissors';
    const npc = 'paper';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('rock beats scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'rock';
    const npc = 'scissors';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('rock equals rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'rock';
    const npc = 'rock';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('paper equals paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'paper';
    const npc = 'paper';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('scissors equals scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'scissors';
    const npc = 'scissors';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('rock loses paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'rock';
    const npc = 'paper';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('paper loses scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'paper';
    const npc = 'scissors';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('scissors loses rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const user = 'scissors';
    const npc = 'rock';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(user, npc);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});