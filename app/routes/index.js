import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
	//
	// Check the following for more information about services
	// https://guides.emberjs.com/v2.5.0/applications/services/
	//
	ajax: Ember.inject.service(),
	model() {
		return this.get('ajax').request(`${config.host}/friends`).then(function(data){
			return {
				totalFriends: data.data.length
			};
		});
	}
});
