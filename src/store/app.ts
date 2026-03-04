export const useAppStore = defineStore("app", () => {
  const state = {
    test: "Hello, World!"
  };
  const linkedin = "https://www.linkedin.com/in/hal-lee-a242b2388/";
  const mail = "oncemeet0857@gmail.com";

  return {
    state,
    linkedin,
    mail
  };
});
