const values = new Array(20_000_000).fill(0).map((value, index) => ({
  item: index,
  checked: index === 19_999_999,
}));

export { values };
