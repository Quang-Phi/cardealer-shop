export default function (list) {
  const listLeftFilter = [...list].filter((element) => {
    return element.category === 5;
  });

  const listRightFilter = [...list].filter((element) => {
    return element.category === 6;
  });

  const listAudi = [...list].filter((element) => {
    return element.clasify === "Audi";
  });
  const listBMW = [...list].filter((element) => {
    return element.clasify === "bmw";
  });
  const listPorcher = [...list].filter((element) => {
    return element.category === 3;
  });
  const listMaserati = [...list].filter((element) => {
    return element.category === 4;
  });
  return [
    listLeftFilter,
    listRightFilter,
    listAudi,
    listBMW,
    listPorcher,
    listMaserati,
  ];
}
