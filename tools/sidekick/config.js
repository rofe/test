export const configureSidekick = () => ({
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
