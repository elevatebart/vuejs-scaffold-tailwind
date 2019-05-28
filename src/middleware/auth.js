export default function auth({ next }) {
  if (!localStorage.getItem("jwt")) {
    console.log("not log");
    // return router.push({ name: 'login' });
  }
  return next();
}
