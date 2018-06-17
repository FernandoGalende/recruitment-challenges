const normalizeStreet = street => {
  return street.replace("st.", "street").replace("rd.", "road");
};

module.exports = { normalizeStreet };
