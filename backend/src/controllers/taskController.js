const test = (req, res) => {
  return res.status(200).json({ msg: "Ok!" })
}

module.exports = { test }
