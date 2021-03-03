function truncate(str, maxlength) {
  if(str === null || str.length <= maxlength)
    return str;
  const CONTINUED = "…";
  return str.slice(0, maxlength - CONTINUED.length) + CONTINUED;
}
