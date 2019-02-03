"use strict";

const isBalanced = (str) => {
  const parenthesesStack = [],
    tokens = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

  inputTokens(str).forEach( parentheses => {
    if (!tokens[parentheses]) {
      parenthesesStack.push(parentheses);
    } else {
      console.log(tokens[parentheses], parenthesesStack[parenthesesStack.length - 1])
      tokens[parentheses] === parenthesesStack[parenthesesStack.length - 1] ? parenthesesStack.pop() : parenthesesStack.push(parentheses);
    }
  });

  parenthesesStack.length === 0 ? console.log('balanced') : console.log('unbalanced');
};

const inputTokens = (str) => {
  const charactersList = '()[]{}';
  return [...str].reduce((list, letter) => {
    if (charactersList.indexOf(letter) > -1) {
      list.push(letter);
      return list;
    }
    return list;
  }, []);
};