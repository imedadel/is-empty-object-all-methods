export const useEntries = (o: object): boolean =>
  Object.entries(o).length === 0 && o.constructor === Object;

export const useEntriesWOC = (o: object): boolean =>
  Object.entries(o).length === 0;

export const useKeys = (o: object): boolean =>
  Object.keys(o).length === 0 && o.constructor === Object;

export const useKeysWOC = (o: object): boolean => Object.keys(o).length === 0;

export const useForIn = (o: object): boolean => {
  for (const key in o) {
    if (o.hasOwnProperty(key)) return false;
  }
  return true;
};

export default {
  useEntries,
  useEntriesWOC,
  useKeys,
  useKeysWOC,
  useForIn,
};
