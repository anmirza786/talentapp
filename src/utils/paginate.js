import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  //1st// _.slice(items, startIndex);
  //2nd// _.take();
  //3rd// _.value();
}
