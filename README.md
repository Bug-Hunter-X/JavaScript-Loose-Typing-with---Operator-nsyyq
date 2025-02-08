# JavaScript Loose Typing with + Operator
This example demonstrates a common JavaScript pitfall: unexpected behavior due to loose typing and the + operator.

## Bug
The `foo` function adds two values. When both are numbers, addition is performed.  However, if either is a string, string concatenation occurs.

## Solution
Explicit type checking or using a stricter type system (e.g., TypeScript) can prevent this issue.
