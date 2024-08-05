// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // New scope
    const task2 = false; // New scope
  }

  return [task, task2];
}

