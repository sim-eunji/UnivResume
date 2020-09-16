export function setInterceptors(instance) {
  instance.interceptors.response.use(
      function(response) {
          return response;
      },
      function(error) {
          return Promise.reject(error);
      },
  );
  return instance;
}
