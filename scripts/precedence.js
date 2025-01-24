// const prec = {};
// prec["+"] = 2;
// prec["-"] = 2;
// prec["*"] = 3;
// prec["÷"] = 3;
// prec["%"] = 3;
// prec["!"] = 4;
// prec["√"] = 5;
// prec["^"] = 5;
// prec["sin"] = 10;
// prec["arcsin"] = 10;
// prec["cos"] = 10;
// prec["arccos"] = 10;
// prec["tan"] = 10;
// prec["arctan"] = 10;
// prec["csc"] = 10;
// prec["sec"] = 10;
// prec["cot"] = 10;
// prec["ln"] = 10;
// prec["log"] = 10;
// prec["log10"] = 10;

// export { prec };
const prec = {
  "+": { precedence: 1, associativity: "left" },
  "-": { precedence: 1, associativity: "left" },
  "*": { precedence: 2, associativity: "left" },
  "÷": { precedence: 2, associativity: "left" },
  "^": { precedence: 3, associativity: "right" },
  "√": { precedence: 4, associativity: "right" },
  "!": { precedence: 4, associativity: "right" },
  sin: { precedence: 5, associativity: "right" },
  cos: { precedence: 5, associativity: "right" },
  tan: { precedence: 5, associativity: "right" },
  arcsin: { precedence: 5, associativity: "right" },
  arccos: { precedence: 5, associativity: "right" },
  arctan: { precedence: 5, associativity: "right" },
  log: { precedence: 5, associativity: "right" },
  log10: { precedence: 5, associativity: "right" },
  "(": { precedence: 0 },
  "{": { precedence: 0 },
};

export { prec };
