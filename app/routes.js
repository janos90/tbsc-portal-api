export default function routes() {
  this.resource('oauth', { only: [] }, function(){ this.post('/token', 'token') });
  this.resource('entities');
  this.resource('forms');
  this.resource('sections');
  this.resource('elements');
  this.resource('sections');
  this.resource('permissions');
  this.resource('jobs');
  this.resource('users');
  this.resource('files');
  this.resource('entities');
  this.resource('oauth-clients');
  this.resource('oauth-access-tokens');
  this.resource('oauth-access-tokens');
  this.resource('oauth-refresh-tokens');
}
