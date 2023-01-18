// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  const results = [];

  for (const client of array) {
    if (client.withdrawals) {
      let tempRunningTotal = 0;

      for (const amount of client.withdrawals) {
        tempRunningTotal += amount;
      }

      results.push(tempRunningTotal);
    } else {
      results.push(0);
    }
  }

  return results;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
