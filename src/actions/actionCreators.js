export function last30days(ranking) {
  return {
    type: `RECENT`,
    ranking
  };
}

export function alltime(ranking) {
  return {
    type: `ALLTIME`,
    ranking
  };
}
