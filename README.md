# Unexpected Behavior with Negative Input in TypeScript Function

This repository demonstrates a subtle bug in a TypeScript function that handles negative input unexpectedly. The function `printNumbers` is designed to print numbers from 1 to n. However, when n is negative, it silently does nothing instead of throwing an error or handling the negative input in a more meaningful way.

## Bug

The `bug.ts` file contains the buggy implementation.  When a negative number is passed to `printNumbers`, it enters the for loop, and the condition `i <= n` is never true (because i starts at 1, and n is negative), so the loop never executes.  This is unexpected; a more robust function would either throw an error or handle the negative input appropriately.

## Solution

The `bugSolution.ts` file provides a corrected version of the function.  The solution checks for the negative input before entering the loop, and throws an error if the input is invalid.