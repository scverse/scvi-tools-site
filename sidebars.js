// module.exports = {
//   someSidebar: {
//     Overview: ["overview"],
//     Models: ["scvi", "scanvi", "totalvi"],
//     Development: ["construction"]
//   },
// };


module.exports = {
  get_started: [
    'get_started',
    {
      type: 'category',
      label: 'Models for data analysis',
      items: [
        'scvi',
        'scanvi',
        'totalvi'
      ],
    },
    'construction',
  ],
};