module.exports = {
  darkMode: 'class',
  plugins: [
    // ...
    require('@windicss/plugin-scrollbar'),
    require('windicss/plugin/line-clamp'),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
}
