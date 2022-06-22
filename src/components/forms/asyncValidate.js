const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
  console.log("asyncValidate ---->");

  return sleep(1000).then(() => {
    // simulate server latency
    if (["john", "paul", "george", "ringo"].includes(values.username)) {
      throw { username: "That username is taken" };
    }
  });
};

export default asyncValidate;
