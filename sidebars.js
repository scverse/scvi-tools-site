// module.exports = {
//   someSidebar: {
//     Overview: ["overview"],
//     Models: ["scvi", "scanvi", "totalvi"],
//     Development: ["construction"]
//   },
// };


module.exports = {
  overview: [
    'overview',
    {
      type: 'category',
      label: 'Models',
      items: [
        'scvi',
        'scanvi',
        'totalvi'
      ],
    },
    'construction',
    'ecosystem'
  ],
};