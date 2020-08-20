module.exports = resource => ({ axios }) => ({
  get: async (req, res) => {
    try {
      const { data } = await axios.get(`/${resource}`);
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  },
  post: async (req, res) => {
    try {
      const { data } = await axios.post(`/${resource}`, req.body);
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  },
  put: async (req, res) => {
    try {
      const { data } = await axios.put(`/${resource}/${req.params.id}`, req.body);
      return res.send(data);
    } catch (error) {
      return res.send(error);
    }
  },
  delete: async (req, res) => {
    try {
      await axios.delete(`/${resource}/${req.params.id}`);
      return res.sendStatus(204);
    } catch (error) {
      return res.send(error);
    }
  }
});