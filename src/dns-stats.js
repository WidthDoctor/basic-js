const { NotImplementedError } = require('../extensions/index.js');


function getDNSStats(domains) {
  const stats = {};
  domains.forEach(domain => {
    const subdomains = domain.split('.').reverse();
    let last = '';
    subdomains.forEach(subdomain => {
      const dns = last + '.' + subdomain;
      stats[dns] = stats[dns] ? stats[dns] + 1 : 1;
      last = dns;
    });
  });
  return stats;
}
module.exports = {
  getDNSStats
};
