module.exports = {
  addKanji: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, folder_id } = req.params;
    const { index_number } = req.body;
    db.add_kanji([index_number, user_id, folder_id])
      .then(kanji => res.status(200).send(kanji))
      .catch(err => {
        res.status(400).send({ errorMessage: "add to list failed" });
      });
  },
  deleteKanji: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, folder_id, kanji_id } = req.params;
    db.delete_kanji([user_id, folder_id, kanji_id])
      .then(kanji => res.status(200).send(kanji))
      .catch(err => {
        res.status(400).send({ errorMessage: "did not delete" });
      });
  },
  readKanji: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, folder_id } = req.params;
    db.read_kanji([user_id, folder_id])
      .then(kanji => res.status(200).send(kanji))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not see kanji" });
      });
  }
};
