# JS_SBA
## SBA 308: JavaScript Fundamentals

A script that gathers data, processes it, and then outputs a consistent result as described by a specification.
transforms the data you input such that the output of your program is an array of objects, each containing the following information in the following format:
{
    
    the ID of the learner for which this data has been collected
    "id": number,
    
    the learner’s total, weighted average, in which assignments
    with more points_possible should be counted for more
    e.g. a learner with 50/100 on one assignment and 190/200 on another
    would have a weighted average score of 240/300 = 80%.
    "avg": number,
    
    each assignment has a key with its ID,
    and the value associated with it is the percentage that
    the learner scored on the assignment (submission.score / points_possible)
    assignment_id: number,
    
    if an assignment is not yet due, it will not be included in either
    the average or the keyed dictionary of scores
}

## Features

JavaScript
- Declare variables properly using let and const where appropriate.
- Use operators to perform calculations on variables and literals.
- Use strings, numbers, and Boolean values cached within variables.
- Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
- Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
- Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.

## Tech

JS_SBA uses many different technologies to work properly:

- [JavaScript] - Scripting language that enables you to create dynamically updating content.
- [HTML] - Standard markup language for creating web pages.