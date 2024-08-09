export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let index = 0;
  return {
    next() {
      if (index < departments.length) {
        return { value: departments[index++], done: false };
      }
      return { done: true };
    },
  };
}
