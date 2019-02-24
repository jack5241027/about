import { isNum } from '@/share/utils';
import { operators } from './constants';

const isOp = op => operators.get(op);

const getStackTop = stack => stack[stack.length - 1];

const getPriority = op => operators.get(op) || 0;

const getBefore = (src, pointer) => {
  const before = [];
  for (let i = pointer - 1; i >= 0; i--) {
    if (isNum(src[i])) {
      before.push(src[i]);
    } else {
      break;
    }
  }
  return before.reverse().join('');
};

const getAfter = (src, pointer) => {
  const after = [];
  let i = pointer + 1;
  let nextPointer = pointer;
  for (i; i < src.length; i++) {
    if (isNum(src[i])) {
      after.push(src[i]);
    } else {
      nextPointer = i - 1;
      break;
    }
  }

  if (nextPointer === pointer) {
    nextPointer = i - 1;
  }

  return {
    after: after.join(''),
    nextPointer,
  };
};

const inFixToPostFix = (infixList = []) => {
  let pointer = 0;
  const stack = [];
  const post = [];

  while (pointer < infixList.length) {
    const char = infixList[pointer];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (getStackTop(stack) !== '(') {
        post.push(stack.pop());
      }
      stack.pop();
    } else if (isOp(char)) {
      const priority = getPriority(char);
      while (priority < getPriority(getStackTop(stack))) {
        post.push(stack.pop());
      }
      stack.push(char);
    } else if (char === '.') {
      const { after, nextPointer } = getAfter(infixList, pointer);
      const before = getBefore(infixList, pointer);
      post[post.length - 1] = `${before}${char}${after}`;
      pointer = nextPointer;
    } else if (isNum(infixList[pointer - 1])) {
      post[post.length - 1] = `${getBefore(infixList, pointer)}${char}`;
    } else {
      post.push(char);
    }
    pointer += 1;
  }

  while (stack.length) {
    post.push(stack.pop());
  }

  return post;
};

const cal = (op, num1, num2) => {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num2 - num1;
    case '*':
      return num1 * num2;
    case '/':
      return num2 / num1;
    case '%':
      return num2 % num1;
    case '^':
      return num2 ** num1;
    default:
      return 0;
  }
};

const calPostfix = (postFix) => {
  const stack = [];
  let num1 = 0;
  let num2 = 0;

  postFix.forEach((s) => {
    if (isOp(s)) {
      num1 = stack.pop();
      num2 = stack.pop();
      stack.push(cal(s, num1, num2));
    } else {
      stack.push(parseFloat(s));
    }
  });

  return stack.pop();
};

const format = ipt => ipt.map(i => `${i}`.replace('X', '*'));

export default inputs => calPostfix(inFixToPostFix(format(inputs)));
