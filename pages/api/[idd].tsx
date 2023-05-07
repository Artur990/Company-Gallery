export default function Index(req: any, res: any) {
  // zmienna trzyamjaca dynamiczne id api requestu
  const { idd } = req.query;
  // zwrócenie id w odpowiedzi
  res.send(`ID: ${idd}`);
  //   res.redirect("/api");
}
