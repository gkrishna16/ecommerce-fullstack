function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase(`peter`);

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
  // some more logic
  cb(fullName);
  cb(fullName);
  cb(fullName);
  cb(fullName);
  cb(fullName);
  cb(fullName);
}

handleName(`peter`, makeUppercase);
