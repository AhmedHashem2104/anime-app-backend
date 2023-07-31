const axios = require("axios");

const searchAPI = async (req, res) => {
  const url = `https://api.consumet.org/anime/gogoanime/${req.body.keyword}?page=${req.body.page}`;
  if (!req.body.keyword && !req.body.page)
    return res.status(400).send({
      message: `Enter search keyword.`,
    });

  try {
    const { data } = await axios.get(url, {
      params: { page: req.body.page },
    });
    return res.send(data);
  } catch (err) {
    return res.status(400).send({
      message: `No data found.`,
    });
  }
};

const animeInfo = async (req, res) => {
  const url = `https://api.consumet.org/anime/gogoanime/info/${req.body.animeID}`;
  if (!req.body.animeID)
    return res.status(400).send({
      message: `No data found.`,
    });
  try {
    const { data } = await axios.get(url);
    return res.send(data);
  } catch (err) {
    return res.status(400).send({
      message: `No data found.`,
    });
  }
};

const animeEpisode = async (req, res) => {
  const url = `https://api.consumet.org/anime/gogoanime/servers/${req.body.episodeID}`;
  console.log(url);
  if (!req.body.episodeID)
    return res.status(400).send({
      message: `No data found.`,
    });
  try {
    const { data } = await axios.get(url);
    return res.send(data);
  } catch (err) {
    return res.status(400).send({
      message: `No data found.`,
    });
  }
};

module.exports = {
  searchAPI,
  animeInfo,
  animeEpisode,
};
