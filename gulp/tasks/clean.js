var del = require('del');

module.exports = function(gulp) {
  return function() {
    del(['blog/_site/**/*', 'blog/_site', 'blog/.sass-cache/**/*', 'blog/.sass-cache'], function (err, deletedFiles) {
      if (deletedFiles.length > 0) {
        console.log('Files deleted:');
        deletedFiles.forEach(function (deletedFile) {
          console.log(' - %s', deletedFile);
        });
      }
      console.log('\r\nTotal items: %d', deletedFiles.length);
    });
  }
};
