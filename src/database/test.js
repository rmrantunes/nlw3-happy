const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");
Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2269864",
    lng: "-49.6768318",
    name: "Casa da Paz",
    description:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "464651",
    images: [
      "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1595295413110-3304e36b564f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 7h às 15h",
    open_on_weekends: "0",
  });
  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  // consultar somente 1 orfanato pelo id;
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  // deletar dados da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
  console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"));
});
