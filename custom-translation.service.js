//not in use
export function customTranslationLoader($http, $q, $timeout) {
  return function (options) {
    return $q((resolve, reject) => {
      $http.get('/assets/translations/' + options.key + '.json')
        .then(function (data) {
          resolve(data);
        })
        .catch(function () {
          reject(options.key);
        });
    });
  };
}