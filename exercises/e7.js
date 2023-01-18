// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  const results = [];
  let tempMinBalance = 0;
  let targetIndex = 0;

  // Sets a temporary minimum balance that isn't zero
  for (const client of array) {
    if (client.balance === 0) {
      continue;
    }
    tempMinBalance = client.balance;
    break;
  }

  // Finds index of minimum non-zero balance
  for (const client of array) {
    if (client.balance < tempMinBalance && client.balance !== 0) {
      tempMinBalance = client.balance;
      targetIndex = array.indexOf(client);
    }
  }

  results.push(array[targetIndex]);

  return results;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
