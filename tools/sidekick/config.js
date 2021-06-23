console.log('config.js loaded');
// export const configureSidekick = () => ({
window.hlx.initSidekick({
  project: 'Test Project',
  host: '',
  hlx3: true,
  byocdn: true,
  plugins: [
    {
      id: 'test',
      button: {
        text: 'test',
        action: (evt) => {
          console.log('test', evt);
        },
      },
    },
  ],
});
